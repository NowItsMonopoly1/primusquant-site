import { NextResponse } from 'next/server';

const WALLET_ADDRESS = '3sCh2oX7hhJFgCHwdfQe1djwK6FuaNdZeLmoc9sAbceY';
const INITIAL_DEPOSIT = 83.81; // Your starting capital in USD

export async function GET() {
  try {
    // Fetch from Drift API
    const response = await fetch(
      `https://mainnet-beta.api.drift.trade/user/accountValue?userPubKey=${WALLET_ADDRESS}`,
      { next: { revalidate: 30 } } // Cache for 30 seconds
    );

    if (!response.ok) {
      // Fallback: try alternative endpoint
      const altResponse = await fetch(
        `https://drift-historical-data-v2.s3.eu-west-1.amazonaws.com/program/dRiftyHA39MWEi3m9aunc5MzRF1JYuBsbn6VPcn33UH/user/${WALLET_ADDRESS}/trades/2024/11`
      );

      if (!altResponse.ok) {
        return NextResponse.json({
          accountValue: null,
          pnl: null,
          pnlPercent: null,
          error: 'Unable to fetch Drift data',
          lastUpdated: new Date().toISOString()
        });
      }
    }

    const data = await response.json();

    // Account value is typically in the response
    // Drift API returns value in base units, need to parse
    let accountValue = 0;

    if (data.value !== undefined) {
      accountValue = parseFloat(data.value) / 1e6; // Convert from base units
    } else if (data.totalAccountValue !== undefined) {
      accountValue = parseFloat(data.totalAccountValue) / 1e6;
    } else if (typeof data === 'number') {
      accountValue = data / 1e6;
    }

    const pnl = accountValue - INITIAL_DEPOSIT;
    const pnlPercent = ((accountValue - INITIAL_DEPOSIT) / INITIAL_DEPOSIT) * 100;

    return NextResponse.json({
      accountValue: accountValue.toFixed(2),
      pnl: pnl.toFixed(2),
      pnlPercent: pnlPercent.toFixed(2),
      initialDeposit: INITIAL_DEPOSIT,
      walletAddress: WALLET_ADDRESS,
      lastUpdated: new Date().toISOString()
    });
  } catch (error) {
    console.error('Drift API error:', error);
    return NextResponse.json({
      accountValue: null,
      pnl: null,
      pnlPercent: null,
      error: 'Failed to fetch data',
      lastUpdated: new Date().toISOString()
    });
  }
}
