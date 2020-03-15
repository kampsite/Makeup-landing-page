// const imagemin = require("imagemin");
// const imageminJpegtran = require("imagemin-jpegtran");
// const imageminPngquant = require("imagemin-pngquant");

// (async () => {
//   const files = await imagemin(["assets/img/*.{jpg,png}"], {
//     destination: "assets/img/build",
//     plugins: [
//       imageminJpegtran(),
//       imageminPngquant({
//         quality: [0.999, 0.999]
//       })
//     ]
//   });

//   console.log(files);
//   //=> [{data: <Buffer 89 50 4e …>, destinationPath: 'build/images/foo.jpg'}, …]
// })();

// const imagemin = require("imagemin");
// const imageminJpegtran = require("imagemin-jpegtran");
// const imageminPngquant = require("imagemin-pngquant");
// const imageminWebp = require("imagemin-webp");

// imagemin(["images/*.{jpg,png}"], "images/build", {
//   use: [imageminWebp({ quality: 50 })]
// }).then(() => {
//   console.log("Images optimized");
// });

const imagemin = require("imagemin"), // The imagemin module.
  webp = require("imagemin-webp"), // imagemin's WebP plugin.
  outputFolder = "images", // Output folder
  PNGImages = "images/*.png", // PNG images
  JPEGImages = "images/*.jpg"; // JPEG images

imagemin([PNGImages], outputFolder, {
  plugins: [
    webp({
      lossless: true // Losslessly encode images
    })
  ]
});

imagemin([JPEGImages], outputFolder, {
  plugins: [
    webp({
      quality: 65 // Quality setting from 0 to 100
    })
  ]
});
