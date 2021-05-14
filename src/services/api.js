export async function getCategories() {
  // Implemente aqui
  const getProducts = await fetch('https://api.mercadolibre.com/sites/MLB/categories').then((response) => response.json());
  return getProducts;
}

export async function getProductsFromCategoryAndQuery(/* categoryId, query */) {
  // Implemente aqui! Quando o fizer, descomente os parâmetros que essa função recebe
}
