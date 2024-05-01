import axios from 'axios';
import { NextResponse } from 'next/server';

export async function POST(request:any) {
  const body = await request.json(); 

  try {
    const response = await axios.post(
      'http://89.116.134.204:8011/api/sl/v1/web/users/signup',body);
    // console.log(response);
    return NextResponse.json(response.data);
  } catch (error:any) {
    console.error('Error:', error);
    return NextResponse.json({ message: 'Internal Server Error' });
  }
}
