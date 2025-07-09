// products.js

const products = [
  { id: 1, name: "Laptop", brandId: 101 },
  { id: 2, name: "Smartphone", brandId: 102 },
  { id: 3, name: "Headphones", brandId: 103 }
];

export function getAllProducts() {
  return products;
}

export function getProductById(id) {
  return products.find(product => product.id === id);
}
