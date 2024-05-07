export const getSearchProduct = async (value:any) => {
  const response = await fetch(process.env.NEXT_PUBLIC_API_URL +`/api/sl/v1/web/product/search?page=1&limit=10&value=${value}`);
  const search = await response.json();
  return search;
};

export const getProductPromo = async (query?:any) =>{
  const response = await fetch(process.env.NEXT_PUBLIC_API_URL+ `/api/sl/v1/web/product/promo?${query}`);
  const product = await response.json();
  return product;
}

export const getProductList = async (query?:any) =>{
  const response = await fetch(process.env.NEXT_PUBLIC_API_URL+ `/api/sl/v1/web/product/list?productName=${query}`);
  const product = await response.json();
  return product;
}


export const getProductDetail = async (productSecureId:any) => {
  const res = await fetch(
    process.env.NEXT_PUBLIC_API_URL +`/api/sl/v1/web/product?secureId=${productSecureId}`
  );
  const data = res.json();
  return data;
};

export const getKategoriList = async () => {
  const response = await fetch(process.env.NEXT_PUBLIC_API_URL+"/api/sl/v1/web/product-category/list")
  if (!response.ok) {
    throw new Error("failed fetch data")    
  }
  const kategori = await response.json();
  return kategori
};

export const getKategoriDetail = async (query:any) => {
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL+`/api/sl/v1/web/product/category/list?${query}`);
  const data = res.json()
  return data
};

export const getUserList = async () => {
  const response = await fetch(process.env.NEXT_PUBLIC_API_URL +"/api/sl/v1/web/users/list")
  if (!response.ok) {
    throw new Error("failed fetch data")    
  }
  const user = await response.json();
  return user
}

export const getUserById = async (secureId:any) => {
  const response = await fetch(process.env.NEXT_PUBLIC_API_URL+`/api/sl/v1/web/users?secureId=${secureId}`)
  if (!response.ok) {
    throw new Error("failed fetch data")    
  }
  const user = await response.json();
  return user
}
export const getAccountDetail = async (userSecureId?:any) => {
  const response = await fetch(process.env.NEXT_PUBLIC_API_URL+`/api/sl/v1/web/users/account/detail`,{
    method: "GET",
    headers: {
      "x-user-secure-id": userSecureId as string,
      "accept": "*/*"
    },
  })
  if (!response.ok) {
    throw new Error("failed fetch data")    
  }
  const user = await response.json();
  return user
}
