/*
 * Regenerates the marketing images in ../media/ in the portal theme.
 * Usage (from repo root):
 *   QRCODE_PATH=/path/to/node_modules/qrcode node stardust/prototypes/media-src/render.mjs
 * Needs playwright (devDependency) and the `qrcode` package (any install).
 */
import { createRequire } from 'node:module';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { chromium } from 'playwright';

const here = path.dirname(fileURLToPath(import.meta.url));
const out = path.resolve(here, '../media');
const require = createRequire(import.meta.url);
const QRCode = require(process.env.QRCODE_PATH || 'qrcode');

// portal tokens (portal.sharewifiqr.com app/globals.css)
const T = {
  ink: '#211d35', muted: '#6d6a80', border: '#e9e7f0', canvas: '#f8f8fc',
  purple: '#654ce0', purpleDark: '#533dc4', tint: '#f0ecff', lavender: '#a594ff',
};
const FONT = 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif';

const qr = async (text) => QRCode.toString(text, {
  type: 'svg', margin: 0, errorCorrectionLevel: 'M', color: { dark: T.ink, light: '#0000' },
});

const wifiIcon = (size, color = '#fff') => `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2.2" stroke-linecap="round"><path d="M4.5 9.5a10.5 10.5 0 0 1 15 0"/><path d="M7.6 12.8a6 6 0 0 1 8.8 0"/><path d="M10.6 15.9a1.9 1.9 0 0 1 2.8 0"/><circle cx="12" cy="19" r="1.2" fill="${color}" stroke="none"/></svg>`;

const base = `
  *{box-sizing:border-box;margin:0}
  html,body{background:transparent}
  body{font-family:${FONT};color:${T.ink};-webkit-font-smoothing:antialiased}
  .tile{display:grid;place-items:center;border-radius:12px;background:linear-gradient(145deg,#8a72ff,#6046df);box-shadow:0 4px 9px #7057e82c}
`;

const card = ({ eyebrow, title, network, note }, svg) => `
  <div class="card">
    <div class="head"><div class="tile">${wifiIcon(22)}</div><span class="eyebrow">${eyebrow}</span></div>
    <h1>${title}</h1>
    <div class="qr">${svg}</div>
    <div class="foot">
      <div><small>Network</small><strong>${network}</strong></div>
      <p>${note}</p>
    </div>
  </div>`;

const cardCss = `
  .card{position:relative;width:418px;padding:34px 34px 30px;background:#fff;border:1px solid ${T.border};border-radius:26px;
    box-shadow:0 2px 4px #27214b08,0 28px 56px -22px #27214b38}
  .head{display:flex;align-items:center;gap:14px}
  .head .tile{width:42px;height:42px}
  .eyebrow{font-size:12.5px;font-weight:750;letter-spacing:.12em;text-transform:uppercase;color:${T.muted}}
  h1{margin:24px 0 22px;font-size:34px;line-height:1.08;font-weight:780;letter-spacing:-.045em}
  .qr{padding:22px;background:${T.canvas};border:1px solid ${T.border};border-radius:16px}
  .qr svg{display:block;width:100%;height:auto}
  .foot{display:flex;justify-content:space-between;align-items:flex-end;gap:16px;margin-top:22px}
  .foot small{display:block;font-size:11px;font-weight:750;letter-spacing:.12em;text-transform:uppercase;color:${T.muted};margin-bottom:5px}
  .foot strong{font-size:16px;font-weight:700;letter-spacing:-.02em}
  .foot p{max-width:170px;text-align:right;font-size:13.5px;line-height:1.4;color:${T.muted}}
`;

const pages = [];

for (const [name, data, wifi, tilt] of [
  ['blog-home', { eyebrow: 'Home Wi-Fi', title: 'The Nguyen<br>household', network: 'Nguyen-Home-5G', note: 'Scan to join. No password typing.' }, 'WIFI:T:WPA;S:Nguyen-Home-5G;P:example-password;;', 2.5],
  ['blog-events', { eyebrow: 'Wedding Wi-Fi', title: 'Ava &amp; Sam<br>June 14', network: 'AvaAndSam-Guests', note: 'Share your photos with #AvaAndSam' }, 'WIFI:T:WPA;S:AvaAndSam-Guests;P:example-password;;', 2.5],
  ['blog-rentals', { eyebrow: 'Check-in', title: 'Cedar Cabin<br>guest Wi-Fi', network: 'CedarCabin-Guest', note: 'Tracked code: password changes after each stay' }, 'https://sharewifiqr.com/q/cedar-cabin', 2.5],
]) {
  pages.push({
    name, w: 716, h: 756,
    html: async () => `<style>${base}${cardCss}
      body{width:716px;height:756px;display:grid;place-items:center}
      .card{transform:rotate(${tilt}deg)}</style>${card(data, await qr(wifi))}`,
  });
}

pages.push({
  name: 'hero-guest-card', w: 716, h: 820,
  html: async () => `<style>${base}${cardCss}
    body{width:716px;height:820px;position:relative}
    .back{position:absolute;left:250px;top:96px;width:380px;height:600px;border-radius:26px;background:${T.tint};border:1px solid #e4defd;transform:rotate(4deg);box-shadow:0 20px 40px -24px #27214b30}
    .card{position:absolute;left:104px;top:66px;transform:rotate(-3deg)}
    .pill{position:absolute;left:338px;top:698px;display:flex;align-items:center;gap:14px;padding:15px 24px;border-radius:999px;background:${T.ink};color:#fff;box-shadow:0 14px 30px -12px #211d3570}
    .pill i{width:10px;height:10px;border-radius:50%;background:${T.lavender}}
    .pill strong{font-size:24px;font-weight:780;letter-spacing:-.04em}
    .pill span{font-size:16px;font-weight:500;color:#e3dff2}
    </style>
    <div class="back"></div>
    ${card({ eyebrow: 'Guest Wi-Fi', title: 'Welcome to<br>Lakeside Cottage', network: 'Lakeside Guest', note: 'Scan with your phone camera' }, await qr('https://sharewifiqr.com/q/lakeside-guest'))}
    <div class="pill"><i></i><strong>128</strong><span>scans this month</span></div>`,
});

pages.push({
  name: 'dashboard', w: 1176, h: 598,
  html: async () => {
    const bars = [30, 44, 19, 54, 40, 70, 60, 34, 50, 80, 64, 90, 74, 100];
    const thumb = await qr('https://sharewifiqr.com/q/thumb');
    const rows = [
      ['Lakeside Guest', 'Tracked · last scan today', '128'],
      ['Lobby — Maple Café', 'Tracked · last scan 2h ago', '342'],
      ['Office Visitors', 'Tracked · last scan yesterday', '57'],
      ['Home 5G', 'Direct · not counted', '—'],
    ];
    return `<style>${base}
      body{width:1176px;height:598px;display:grid;place-items:center}
      .win{width:1092px;height:518px;border-radius:20px;overflow:hidden;background:#fff;border:1px solid ${T.border};box-shadow:0 2px 4px #27214b08,0 30px 60px -28px #27214b40;display:flex;flex-direction:column}
      .bar{height:52px;flex:none;display:flex;align-items:center;padding:0 20px;background:${T.canvas};border-bottom:1px solid ${T.border};position:relative}
      .dots{display:flex;gap:8px}.dots i{width:11px;height:11px;border-radius:50%;background:#dcd8e6}
      .url{position:absolute;left:50%;transform:translateX(-50%);width:300px;padding:7px 0;text-align:center;font-size:13px;color:${T.muted};background:#fff;border:1px solid ${T.border};border-radius:8px}
      .top{display:flex;align-items:center;justify-content:space-between;padding:22px 28px;border-bottom:1px solid ${T.border}}
      .brand{display:flex;align-items:center;gap:12px;font-size:21px;font-weight:780;letter-spacing:-.045em}
      .brand .tile{width:38px;height:38px}
      .btn{display:inline-flex;align-items:center;gap:7px;padding:9px 15px;border-radius:8px;background:${T.purple};color:#fff;font-weight:680;font-size:14px;box-shadow:0 2px 4px #4a33af23}
      .body{flex:1;display:grid;grid-template-columns:1fr 1.15fr;min-height:0}
      .stats{padding:24px 28px;border-right:1px solid ${T.border};display:flex;flex-direction:column;background:${T.canvas}}
      .label{font-size:12px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:${T.muted}}
      .big{font-size:54px;font-weight:780;letter-spacing:-.05em;line-height:1;margin:12px 0 8px}
      .delta{display:inline-flex;align-self:flex-start;gap:6px;padding:5px 10px;border-radius:99px;background:${T.tint};color:#5d46c4;font-size:12.5px;font-weight:700}
      .chart{flex:1;display:flex;align-items:flex-end;gap:7px;margin-top:20px}
      .chart i{flex:1;border-radius:5px 5px 2px 2px;background:#ddd5ff}
      .chart i:last-child{background:${T.purple}}
      .list{display:flex;flex-direction:column}
      .row{display:flex;align-items:center;gap:14px;padding:14px 26px;border-bottom:1px solid #f0eef5}
      .thumb{width:44px;height:44px;flex:none;padding:7px;border-radius:11px;background:${T.tint}}
      .thumb svg{width:100%;height:100%;display:block}
      .row b{display:block;font-size:15.5px;font-weight:700;letter-spacing:-.02em}
      .row small{display:block;font-size:12.5px;color:${T.muted};margin-top:2px}
      .row .n{margin-left:auto;font-size:20px;font-weight:760;letter-spacing:-.04em;font-variant-numeric:tabular-nums}
      .note{padding:14px 26px;font-size:12.5px;color:${T.muted}}
      </style>
      <div class="win">
        <div class="bar"><div class="dots"><i></i><i></i><i></i></div><div class="url">portal.sharewifiqr.com</div></div>
        <div class="top"><div class="brand"><div class="tile">${wifiIcon(20)}</div>Your QR codes</div><span class="btn">+ New code</span></div>
        <div class="body">
          <div class="stats"><span class="label">Scans · last 14 days</span><div class="big">164</div><span class="delta">+23% vs previous 14 days</span>
            <div class="chart">${bars.map((v) => `<i style="height:${v}%"></i>`).join('')}</div></div>
          <div class="list">${rows.map(([t, s, n]) => `<div class="row"><div class="thumb">${thumb}</div><div><b>${t}</b><small>${s}</small></div><span class="n">${n}</span></div>`).join('')}
            <p class="note">Direct codes join instantly but can't be counted.</p></div>
        </div>
      </div>`;
  },
});

const browser = await chromium.launch();
const only = process.argv.slice(2);
for (const p of pages.filter((x) => !only.length || only.includes(x.name))) {
  const page = await browser.newPage({ viewport: { width: p.w, height: p.h }, deviceScaleFactor: 2 });
  await page.setContent(`<!doctype html><html><body>${await p.html()}</body></html>`);
  await page.evaluate(() => document.fonts.ready);
  await page.screenshot({ path: `${out}/${p.name}.png`, omitBackground: true });
  console.log('wrote', p.name);
  await page.close();
}
await browser.close();
