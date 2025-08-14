const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const input = path.join(__dirname, '..', 'assets', 'images', 'profile.jpg');
const outputDir = path.join(__dirname, '..', 'assets', 'images', 'generated');

if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

const sizes = [160, 320, 640, 1200];

(async () => {
  try {
    for (const size of sizes) {
      const outJpg = path.join(outputDir, `profile-${size}.jpg`);
      const outWebp = path.join(outputDir, `profile-${size}.webp`);

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
