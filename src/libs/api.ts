export const getProductList = async () => {
  const response = await fetch("http://89.116.134.204:8011/api/sl/v1/web/product/pagination/list?page=1&limit=10&productName=tes");
  if (!response.ok) {
    throw new Error("failed fetch data");
  }
  const product = await response.json();
  return product;
};

export const getProductDetail = async (productSecureId:any) => {
  const res = await fetch(
    `http://89.116.134.204:8011/api/sl/v1/web/product?secureId=${productSecureId}`
  );
  const data = res.json();
  return data;
};

export const getKategoriList = async () => {
  const response = await fetch("http://89.116.134.204:8011/api/sl/v1/web/product-category/list")
  if (!response.ok) {
    throw new Error("failed fetch data")    
  }
  const kategori = await response.json();
  return kategori
};

export const getKategoriDetail = async (categorySecureId:any) => {
  const res = await fetch(`http://89.116.134.204:8011/api/sl/v1/web/product-category?secureId=${categorySecureId}`)
  const data = res.json()
  return data
};