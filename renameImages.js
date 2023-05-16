import shopProducts from './src/products.js';
import fs from 'fs';
import path from 'path';

const __filename = new URL(import.meta.url).pathname;
const imagesDir = path.join(path.dirname(__filename), 'public/images');

shopProducts.forEach((product) => {
    const oldImagePath = path.join(imagesDir, `${product.name}.jpg`);
    const newImagePath = path.join(imagesDir, `${product.id}.jpg`);

    fs.rename(oldImagePath, newImagePath, (err) => {
        if (err) {
            console.error(`Error renaming image for product ID ${product.id}:${err}`);
        } else {
            console.log(`Image renamed for product ID ${product.id}`);
        }
    });

});