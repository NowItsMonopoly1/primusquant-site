'use client';

import { useEffect } from 'react';
import Script from 'next/script';

declare global {
  interface Window {
    twttr?: {
      widgets?: {
        load: () => void;
      };
    };
  }
}

export default function Home() {
  useEffect(() => {
    // Reload Twitter widgets after component mounts
    if (window.twttr?.widgets) {
      window.twttr.widgets.load();
    }
  }, []);

  return (
    <>
      <div className="min-h-screen bg-black text-gray-300">
        <header className="min-h-screen flex flex-col justify-center items-center text-center px-8 bg-black">
          <h1 className="font-orbitron text-5xl md:text-8xl font-bold tracking-[0.25em] text-white mb-8">
            PRIMUSQUANT
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mb-6">
            Experimental Reinforcement Learning Perpetual Trading Research System
          </p>
          <p className="text-lg text-gray-400">Drift Protocol · Solana</p>
          <p className="text-base text-gray-500 mt-8 max-w-2xl">
            Real-money execution using developer capital only · Transparent performance · Not financial advice
          </p>
        </header>

        <main className="container mx-auto px-8 py-20 max-w-5xl">
          <div className="bg-gray-900 p-8 rounded-lg border-l-4 border-red-600 mb-12 text-sm">
            <strong className="text-red-500 text-lg">IMPORTANT DISCLAIMER</strong>
            <br />
            <br />
            PrimusQuant is an experimental research project by Primus Systems LLC. All trading activity is conducted
            with developer-owned capital only. No third-party funds are accepted or managed. Past performance is not
            indicative of future results. This is not financial advice.
          </div>

          <section className="bg-gray-900 p-10 rounded-lg border border-gray-700 mb-12">
            <h2 className="font-orbitron text-3xl text-red-500 mb-8 text-center">Live Trading Feed</h2>
            <div className="flex justify-center">
              <blockquote className="twitter-tweet" data-theme="dark">
                <a href="https://twitter.com/PrimusQuant"></a>
              </blockquote>
            </div>
          </section>

          <section className="text-center py-12 bg-gray-900 rounded-lg border border-red-600 mb-12">
            <h2 className="font-orbitron text-3xl text-red-500 mb-8">Live Performance</h2>
            <p className="text-6xl font-bold mb-4">+0.00%</p>
            <p className="text-lg">Developer capital only · Real-time PnL tracking</p>
          </section>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gray-900 p-6 rounded-lg text-center">
              <p className="text-4xl font-bold text-red-500">+187%</p>
              <p>2025 Backtest Return</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg text-center">
              <p className="text-4xl font-bold text-red-500">14.7%</p>
              <p>Max Drawdown</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg text-center">
              <p className="text-4xl font-bold text-red-500">2.31</p>
              <p>Sharpe Ratio</p>
            </div>
          </div>

          <section className="text-center py-12">
            <h2 className="font-orbitron text-3xl text-red-500 mb-8">Primus Systems LLC</h2>
            <p className="max-w-3xl mx-auto text-lg mb-6">
              California-registered company building experimental AI systems for Solana DeFi research.
              <br />
              PrimusQuant is our public research prototype demonstrating reinforcement learning in perpetual futures
              markets.
            </p>
            <p className="mt-8 text-gray-400">
              Twitter:{' '}
              <a href="https://twitter.com/PrimusQuant" className="text-red-500 hover:underline">
                @PrimusQuant
              </a>{' '}
              ·{' '}
              <a href="https://twitter.com/MonopolysWay" className="text-red-500 hover:underline">
                @MonopolysWay
              </a>
            </p>
            <p className="mt-4 text-gray-400">Email: research@primusinsights.com</p>
          </section>
        </main>

        <footer className="text-center py-12 bg-black border-t border-gray-800 text-sm text-gray-500">
          <p>
            © 2025 Primus Systems LLC · California Limited Liability Company
            <br />
            Experimental research only. Not investment advice.
          </p>
        </footer>
      </div>

      <Script src="https://platform.twitter.com/widgets.js" strategy="lazyOnload" />
    </>
  );
}
