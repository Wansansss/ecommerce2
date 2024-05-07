import { getSession } from '@/actions/getCurrentUser';
import { NextResponse } from 'next/server';

export async function PUT(request: any) {
  const user = await getSession()
  let secureId = ''
  if(user?.secureId)
   secureId = user?.secureId
 
  console.log(secureId)
  const body = await request.json()
  console.log(body)
  const url = "http://89.116.134.204:8011/api/sl/v1/web/users/account"

  try{
    const res = await fetch(url, {
      method: "PUT",
      headers: {
        "x-user-secure-id" : secureId,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    }) 
    return NextResponse.json(res)
  } catch (error) {
    console.log(error)
    return NextResponse.json({ message: 'Internal Server Error' });
  }

    // const body = await request.json(); 
    // const currentUser = await getSession()
    // console.log("ini user >>>>>> " , currentUser)


    // try {
    //   const response = await axios.put(
    //     'http://89.116.134.204:8011/api/sl/v1/web/users/account',body);
    //   return NextResponse.json(response.data);
    // } catch (error:any) {
    //   console.error('Error:', error);
    //   return NextResponse.json({ message: 'Internal Server Error' });
    // }
}
