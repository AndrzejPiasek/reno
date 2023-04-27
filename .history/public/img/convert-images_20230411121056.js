//////////////////////////////////////////////////
//////// node convert-images.js /ścieżka/do/katalogu/z/obrazami
//////////////////////////////////////////////////
//// LEPIEJ       node scripts/convert-images.js    /////
///////////////////////////////////////////////////////
//      const inputDir = path.resolve(__dirname, '../src/img');
//       const outputDir = path.resolve(__dirname, '../src/img/processed');
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDirectory = path.resolve('./');
const sizes = [300, 600, 900, 1200];

fs.readdir(inputDirectory, (err, files) => {
  if (err) {
    console.error(`Błąd odczytu katalogu: ${err}`);
    process.exit(1);
  }

  files.forEach(file => {
    const fileExt = path.extname(file).toLowerCase();
    if (fileExt === '.png' || fileExt === '.jpg' || fileExt === '.jpeg') {
      const fileName = path.basename(file, fileExt);

      sizes.forEach(size => {
        const outputDir = path.join(inputDirectory, `${size}`);
        if (!fs.existsSync(outputDir)) {
          fs.mkdirSync(outputDir);
        }

        const outputFile = path.join(outputDir, `${fileName}.webp`);

        if (!fs.existsSync(outputFile)) {
          sharp(path.join(inputDirectory, file))
            .resize({ width: size })
            .toFile(outputFile)
            .then(() => console.log(`Zapisano: ${outputFile}`))
            .catch(err => console.error(`Błąd konwersji: ${err}`));
        }
      });
    }
  });
});
