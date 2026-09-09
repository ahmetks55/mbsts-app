const { createCanvas } = require('canvas');
const fs = require('fs');
const path = require('path');

const sizes = [72, 96, 128, 144, 152, 192, 384, 512];
const iconsDir = path.join(__dirname, 'icons');

if (!fs.existsSync(iconsDir)) {
  fs.mkdirSync(iconsDir, { recursive: true });
}

sizes.forEach(size => {
  const canvas = createCanvas(size, size);
  const ctx = canvas.getContext('2d');
  
  // Background gradient
  const gradient = ctx.createLinearGradient(0, 0, size, size);
  gradient.addColorStop(0, '#1a5276');
  gradient.addColorStop(1, '#2980b9');
  
  // Rounded rectangle
  const radius = size * 0.18;
  ctx.beginPath();
  ctx.moveTo(radius, 0);
  ctx.lineTo(size - radius, 0);
  ctx.quadraticCurveTo(size, 0, size, radius);
  ctx.lineTo(size, size - radius);
  ctx.quadraticCurveTo(size, size, size - radius, size);
  ctx.lineTo(radius, size);
  ctx.quadraticCurveTo(0, size, 0, size - radius);
  ctx.lineTo(0, radius);
  ctx.quadraticCurveTo(0, 0, radius, 0);
  ctx.closePath();
  ctx.fillStyle = gradient;
  ctx.fill();
  
  // MBSTS text
  ctx.fillStyle = 'white';
  ctx.font = `bold ${size * 0.23}px Arial`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('MBSTS', size / 2, size * 0.38);
  
  // Subtitle
  ctx.fillStyle = 'rgba(255,255,255,0.8)';
  ctx.font = `500 ${size * 0.09}px Arial`;
  ctx.fillText('Hazirlik', size / 2, size * 0.55);
  
  // Year
  ctx.fillStyle = 'rgba(255,255,255,0.6)';
  ctx.font = `${size * 0.07}px Arial`;
  ctx.fillText('2026', size / 2, size * 0.75);
  
  // Save
  const buffer = canvas.toBuffer('image/png');
  fs.writeFileSync(path.join(iconsDir, `icon-${size}.png`), buffer);
  console.log(`Created icon-${size}.png`);
});

console.log('All icons generated!');
