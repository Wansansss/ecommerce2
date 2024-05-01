import axios from 'axios';
import { NextResponse } from 'next/server';

export async function POST(request: any) {
    const body = await request.json();
    const { productName,
        description,
        amount,
        categorySecureId,
        stockProduct,
        fileUrl:[] } = body;

    console.log(body);

    try {
        const response = await axios.post(
            'http://89.116.134.204:8011/api/sl/v1/backoffice/product/add',{
                productName,
                description,
                amount: parseFloat(amount),
                categorySecureId,
                stockProduct,
                fileUrl:[],
            }
        );

        return NextResponse.json(response.data);
    } catch (error: any) {
        console.error('Error:', error);
        return NextResponse.json({ message: 'Internal Server Error' });
    }
}
