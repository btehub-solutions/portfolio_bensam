
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// Mockup configuration
const CANVAS_SIZE = 1400;
const FRAME_WIDTH = 1180;
const BORDER_RADIUS = 16;
const TITLEBAR_HEIGHT = 44;

async function createProjectMockup({
  rawImagePath,
  urlPillText,
  accentColor = '#FF4800',
  outputFileName,
}) {
  console.log(`Generating mockup for ${urlPillText}...`);

  // Ensure output directory exists
  const outDir = path.join(__dirname, 'public', 'mockups');
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  // 1. Read and measure the screenshot
  const imageMeta = await sharp(rawImagePath).metadata();
  const screenHeight = Math.round((FRAME_WIDTH / imageMeta.width) * imageMeta.height);
  const totalFrameHeight = TITLEBAR_HEIGHT + screenHeight;

  // Position: vertically centered but biased upward so bottom 220px remains safe
  const frameX = Math.round((CANVAS_SIZE - FRAME_WIDTH) / 2);
  const targetCenterY = (CANVAS_SIZE - 180) / 2; // offset for bottom badge
  const frameY = Math.max(120, Math.round(targetCenterY - totalFrameHeight / 2));

  // 2. Resize screenshot to exact FRAME_WIDTH
  const resizedScreen = await sharp(rawImagePath)
    .resize(FRAME_WIDTH, screenHeight, { fit: 'fill', kernel: 'lanczos3' })
    .toBuffer();

  // 3. Create SVG titlebar and frame background
  const titlebarSvg = Buffer.from(`
    <svg width="${FRAME_WIDTH}" height="${TITLEBAR_HEIGHT}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="tbGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#24262E" />
          <stop offset="100%" stop-color="#181920" />
        </linearGradient>
      </defs>
      <path d="M 0,${BORDER_RADIUS} Q 0,0 ${BORDER_RADIUS},0 L ${FRAME_WIDTH - BORDER_RADIUS},0 Q ${FRAME_WIDTH},0 ${FRAME_WIDTH},${BORDER_RADIUS} L ${FRAME_WIDTH},${TITLEBAR_HEIGHT} L 0,${TITLEBAR_HEIGHT} Z" fill="url(#tbGrad)"/>
      <line x1="0" y1="${TITLEBAR_HEIGHT - 1}" x2="${FRAME_WIDTH}" y2="${TITLEBAR_HEIGHT - 1}" stroke="rgba(255,255,255,0.08)" stroke-width="1"/>
      
      <!-- Window Dots -->
      <circle cx="24" cy="22" r="6" fill="#FF5F56" />
      <circle cx="44" cy="22" r="6" fill="#FFBD2E" />
      <circle cx="64" cy="22" r="6" fill="#27C93F" />

      <!-- Center URL Address Pill -->
      <g transform="translate(${(FRAME_WIDTH - 420) / 2}, 9)">
        <rect width="420" height="26" rx="6" fill="rgba(0,0,0,0.4)" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>
        <!-- Lock Icon -->
        <path d="M 16 17 L 16 14 A 3 3 0 0 1 22 14 L 22 17 M 14 17 L 24 17 L 24 22 L 14 22 Z" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="1.2"/>
        <text x="32" y="18" fill="rgba(255,255,255,0.65)" font-family="system-ui, -apple-system, sans-serif" font-size="12" font-weight="500">${urlPillText}</text>
      </g>
    </svg>
  `);

  // 4. Combine Titlebar and Screen into one frame buffer with rounded bottom corners
  const frameCompositeSvg = Buffer.from(`
    <svg width="${FRAME_WIDTH}" height="${totalFrameHeight}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <clipPath id="frameClip">
          <rect width="${FRAME_WIDTH}" height="${totalFrameHeight}" rx="${BORDER_RADIUS}" ry="${BORDER_RADIUS}"/>
        </clipPath>
      </defs>
      <rect width="${FRAME_WIDTH}" height="${totalFrameHeight}" rx="${BORDER_RADIUS}" ry="${BORDER_RADIUS}" fill="#101115" stroke="rgba(255,255,255,0.15)" stroke-width="1.5"/>
    </svg>
  `);

  const windowContent = await sharp({
    create: {
      width: FRAME_WIDTH,
      height: totalFrameHeight,
      channels: 4,
      background: { r: 16, g: 17, b: 21, alpha: 1 }
    }
  })
    .composite([
      { input: titlebarSvg, top: 0, left: 0 },
      { input: resizedScreen, top: TITLEBAR_HEIGHT, left: 0 }
    ])
    .png()
    .toBuffer();

  // Mask the composite with rounded rectangle
  const maskSvg = Buffer.from(`
    <svg width="${FRAME_WIDTH}" height="${totalFrameHeight}">
      <rect x="0" y="0" width="${FRAME_WIDTH}" height="${totalFrameHeight}" rx="${BORDER_RADIUS}" ry="${BORDER_RADIUS}" fill="#fff"/>
    </svg>
  `);

  const roundedWindow = await sharp(windowContent)
    .composite([{ input: maskSvg, blend: 'dest-in' }])
    .png()
    .toBuffer();

  // 5. Create 1400x1400 Luxury Dark Canvas with Subtle Glow & Ambient Shadow
  const bgSvg = Buffer.from(`
    <svg width="${CANVAS_SIZE}" height="${CANVAS_SIZE}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="ambientGlow" cx="50%" cy="45%" r="65%">
          <stop offset="0%" stop-color="${accentColor}" stop-opacity="0.14" />
          <stop offset="50%" stop-color="${accentColor}" stop-opacity="0.03" />
          <stop offset="100%" stop-color="#07080A" stop-opacity="0" />
        </radialGradient>
        
        <linearGradient id="bgBase" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#121318" />
          <stop offset="100%" stop-color="#07080A" />
        </linearGradient>

        <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
          <path d="M 80 0 L 0 0 0 80" fill="none" stroke="rgba(255,255,255,0.035)" stroke-width="1"/>
        </pattern>
        
        <!-- Multi-stage drop shadow -->
        <filter id="windowShadow" x="-20%" y="-20%" width="150%" height="160%">
          <feDropShadow dx="0" dy="16" stdDeviation="28" flood-color="#000000" flood-opacity="0.75" />
          <feDropShadow dx="0" dy="48" stdDeviation="64" flood-color="#000000" flood-opacity="0.6" />
        </filter>
      </defs>

      <!-- Base Canvas Background -->
      <rect width="${CANVAS_SIZE}" height="${CANVAS_SIZE}" fill="url(#bgBase)"/>
      <rect width="${CANVAS_SIZE}" height="${CANVAS_SIZE}" fill="url(#ambientGlow)"/>
      <rect width="${CANVAS_SIZE}" height="${CANVAS_SIZE}" fill="url(#grid)"/>

      <!-- Window Soft Shadow Silhouette -->
      <rect x="${frameX}" y="${frameY}" width="${FRAME_WIDTH}" height="${totalFrameHeight}" rx="${BORDER_RADIUS}" ry="${BORDER_RADIUS}" fill="#000" filter="url(#windowShadow)"/>
    </svg>
  `);

  const outputPath = path.join(outDir, outputFileName);

  // Composite background and rounded window together
  await sharp(bgSvg)
    .composite([
      { input: roundedWindow, top: frameY, left: frameX }
    ])
    .webp({ quality: 92 })
    .toFile(outputPath);

  console.log(`Saved: ${outputPath}`);
}

async function run() {
  const projects = [
    {
      rawImagePath: path.join(__dirname, 'public', 'trax-preview.png'),
      urlPillText: 'https://www.trax.ng',
      accentColor: '#FF4800',
      outputFileName: 'trax-mockup.webp'
    },
    {
      rawImagePath: path.join(__dirname, 'public', 'trax-jobs-raw.png'),
      urlPillText: 'https://jobs.trax.ng',
      accentColor: '#22C55E',
      outputFileName: 'trax-jobs-mockup.webp'
    },
    {
      rawImagePath: path.join(__dirname, 'public', 'trax-echo-raw.png'),
      urlPillText: 'https://echo.trax.ng',
      accentColor: '#8BB4F7',
      outputFileName: 'trax-echo-mockup.webp'
    },
    {
      rawImagePath: path.join(__dirname, 'public', 'btehub-solutions-raw.png'),
      urlPillText: 'https://btehub.vercel.app',
      accentColor: '#A855F7',
      outputFileName: 'btehub-solutions-mockup.webp'
    },
    {
      rawImagePath: path.join(__dirname, 'public', 'btehub-academy-raw.png'),
      urlPillText: 'https://btehubacademy.vercel.app',
      accentColor: '#EAB308',
      outputFileName: 'btehub-academy-mockup.webp'
    },
    {
      rawImagePath: path.join(__dirname, 'public', 'alertdrive-showcase.jpg'),
      urlPillText: 'https://github.com/btehub-solutions/AlertDrive_AI',
      accentColor: '#22C55E',
      outputFileName: 'alertdrive-mockup.webp'
    },
    {
      rawImagePath: path.join(__dirname, 'public', 'projects', 'coreai.jpg'),
      urlPillText: 'https://github.com/btehub-solutions/CoreAI',
      accentColor: '#3B82F6',
      outputFileName: 'coreai-mockup.webp'
    },
    {
      rawImagePath: path.join(__dirname, 'public', 'projects', 'taxnaija.jpg'),
      urlPillText: 'https://github.com/btehub-solutions/TaxNaija',
      accentColor: '#10B981',
      outputFileName: 'taxnaija-mockup.webp'
    },
    {
      rawImagePath: path.join(__dirname, 'public', 'projects', 'vibeai.jpg'),
      urlPillText: 'https://vibeaihub.vercel.app',
      accentColor: '#EC4899',
      outputFileName: 'vibeai-mockup.webp'
    },
    {
      rawImagePath: path.join(__dirname, 'public', 'projects', 'ethical-hacking.jpg'),
      urlPillText: 'https://www.trax.ng',
      accentColor: '#E11D48',
      outputFileName: 'ethical-hacking-mockup.webp'
    }
  ];

  for (const p of projects) {
    if (fs.existsSync(p.rawImagePath)) {
      await createProjectMockup(p);
    } else {
      console.warn('Skipping missing image:', p.rawImagePath);
    }
  }

  console.log('All mockups generated successfully!');
}

run().catch(err => {
  console.error('Error generating mockups:', err);
  process.exit(1);
});
