// brands.js

const brands = [
  { id: 101, name: "Dell" },
  { id: 102, name: "Samsung" },
  { id: 103, name: "Sony" }
];

export function getAllBrands() {
  return brands;
}

export function getBrandById(id) {
  return brands.find(brand => brand.id === id);
}
