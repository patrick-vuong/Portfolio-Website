const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const input = path.join(__dirname, '..', 'assets', 'images', 'profile.jpg');
const outputDir = path.join(__dirname, '..', 'assets', 'images', 'generated');

if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });


// For original aspect ratio (portrait)
const portraitSizes = [160, 320, 640, 1200];
// For square crop (legacy, optional)
const squareSizes = [160, 320, 640, 1200];


(async () => {
  try {
    // Generate original aspect ratio (portrait) variants
    for (const size of portraitSizes) {
      const outJpg = path.join(outputDir, `profile-portrait-${size}.jpg`);
      const outWebp = path.join(outputDir, `profile-portrait-${size}.webp`);

      await sharp(input)
        .resize({ width: size })
        .jpeg({ quality: 80 })
        .toFile(outJpg);

      await sharp(input)
        .resize({ width: size })
        .webp({ quality: 75 })
        .toFile(outWebp);

      console.log(`Generated ${outJpg} and ${outWebp}`);
    }

    // Optionally, generate square crops for legacy or avatar use
    for (const size of squareSizes) {
      const outJpg = path.join(outputDir, `profile-square-${size}.jpg`);
      const outWebp = path.join(outputDir, `profile-square-${size}.webp`);

      await sharp(input)
        .resize(size, size, { fit: 'cover' })
        .jpeg({ quality: 80 })
        .toFile(outJpg);

      await sharp(input)
        .resize(size, size, { fit: 'cover' })
        .webp({ quality: 75 })
        .toFile(outWebp);

      console.log(`Generated ${outJpg} and ${outWebp}`);
    }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
