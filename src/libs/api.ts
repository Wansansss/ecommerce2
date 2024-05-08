export const getProduct = async (resource?:any,query?:any) => {
  const response = await fetch(process.env.NEXT_PUBLIC_API_URL +`/api/sl/v1/web/product${resource}?${query}`,{
    next: {
      revalidate:3600
    }
  })
  const data = await response.json();
  return data;
};


export const getKategoriList = async () => {
  const response = await fetch(process.env.NEXT_PUBLIC_API_URL+"/api/sl/v1/web/product-category/list",{
    next: {revalidate:3600}
  })
  const kategori = await response.json();
  return kategori
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
    next: {
      revalidate:3600
    },
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
