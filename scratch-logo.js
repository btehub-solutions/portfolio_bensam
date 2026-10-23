const sharp = require('sharp');

const svg = `
<svg width="240" height="70" viewBox="0 0 240 70" xmlns="http://www.w3.org/2000/svg">
  <rect width="240" height="70" fill="#000000"/>
  <g transform="translate(15, 12)">
    <svg viewBox="0 0 62 50" width="34" height="28" fill="none">
      <g fill="#FFFFFF">
        <path d="M6 0 H26 V10 H18 V34 L8 44 H0 L8 36 V0 Z" />
        <path d="M24 0 H44 C53.5 0, 58 4.5, 58 12.5 C58 20.5, 53.5 25, 44 25 H24 V0 Z M34 8.5 V16.5 H42.5 C46 16.5, 48 15, 48 12.5 C48 10, 46 8.5, 42.5 8.5 H34 Z" />
        <path d="M24 22 H46 C55.5 22, 61 27, 61 35 C61 43.5, 54.5 48.5, 44 48.5 H16 L24 40.5 H42 C47 40.5, 50 38, 50 35 C50 32, 47 30, 42 30 H24 V22 Z" />
      </g>
    </svg>
    <text x="44" y="24" fill="#FFFFFF" font-family="'Clash Display', 'Geist', sans-serif" font-weight="800" font-size="24" letter-spacing="-0.02em">BenSam</text>
  </g>
</svg>
`;

sharp(Buffer.from(svg))
  .png()
  .toFile('brand-logo-navbar.png')
  .then(() => console.log('Successfully created brand-logo-navbar.png'))
  .catch(err => console.error(err));
