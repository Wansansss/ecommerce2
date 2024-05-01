import { getSession } from '@/actions/getCurrentUser';
import axios from 'axios';
import { NextResponse } from 'next/server';

export async function PUT(request:any) {
  const body = await request.json(); 
  const currentUser = await getSession()
//   console.log("ini user >>>>>> " , currentUser)


  try {
    const response = await axios.put(
      'http://89.116.134.204:8011/api/sl/v1/web/users/account',body);
    return NextResponse.json(response.data);
  } catch (error:any) {
    console.error('Error:', error);
    return NextResponse.json({ message: 'Internal Server Error' });
  }
}
