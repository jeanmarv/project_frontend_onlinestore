export async function getCategories() {
  const fecthCategories = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const fecthCategoriesJson = await fecthCategories.json();
  return fecthCategoriesJson;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const FetchProducts = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}_ID&q=${query} `);
  const FetchProductsJson = await FetchProducts.json();
  return FetchProductsJson;
}
