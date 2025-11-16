# PrimusQuant

Experimental Reinforcement Learning perpetual trading research system on Drift Protocol / Solana.

## Deployment Instructions

### Quick Deploy to Vercel

1. **Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/YOUR_USERNAME/primusquant.git
   git push -u origin main
   ```

2. **Deploy on Vercel**:
   - Go to [vercel.com/new](https://vercel.com/new)
   - Import your GitHub repository
   - Vercel will auto-detect Next.js settings
   - Click "Deploy"

3. **Add Custom Domain**:
   - In Vercel project → Settings → Domains
   - Add: `primusquant.com` and `www.primusquant.com`
   - Copy the DNS records Vercel provides

4. **Configure DNS (Namecheap)**:
   - Go to Namecheap → Domain List → primusquant.com → Manage
   - Advanced DNS → Add New Record:
     - Type: `CNAME` | Host: `www` | Value: `cname.vercel-dns.com.` | TTL: Automatic
     - Type: `A` | Host: `@` | Value: `76.76.21.21` | TTL: Automatic
   - Delete any conflicting records

5. **Wait for DNS Propagation** (5-30 minutes)

Site will be live at https://primusquant.com

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Project Structure

- `/src/app/page.tsx` - Main landing page
- `/src/app/layout.tsx` - Root layout with metadata
- `/src/app/globals.css` - Global styles with Tailwind

## Disclaimer

PrimusQuant is an experimental research project by Primus Systems LLC. All trading activity is conducted with developer-owned capital only. No third-party funds are accepted or managed.
