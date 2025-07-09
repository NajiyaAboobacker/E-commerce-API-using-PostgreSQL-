// index.js

import { getAllProducts, getProductById } from './products.js';
import { getAllBrands, getBrandById } from './brands.js';

console.log("All Products:");
console.log(getAllProducts());

console.log("\nProduct with ID 2:");
console.log(getProductById(2));

console.log("\nAll Brands:");
console.log(getAllBrands());

console.log("\nBrand with ID 102:");
console.log(getBrandById(102));
