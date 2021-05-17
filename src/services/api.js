export async function getCategories() {
  const getProducts = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const getCat = await getProducts.json();
  return getCat;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const request = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`, { method: 'GET' });
  const response = await request.json();
  return response;
}
