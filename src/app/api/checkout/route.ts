import { getSession } from '@/actions/getCurrentUser';
import { NextResponse } from 'next/server';

export async function POST(request: any) {
    const user = await getSession()
    let secureId = ''
    if (user?.secureId)
        secureId = user?.secureId
    if (!user) {
        return NextResponse.json({ message: 'Unauthorized' });
    }
    const body = await request.json()
    // const { productSecureId, totalItemsPurchased } = body
    // const orderData = {
    //     productSecureId: productSecureId,
    //     totalItemsPurchased: totalItemsPurchased
    // }
    const url = process.env.NEXT_PUBLIC_API_URL + "/api/sl/v1/web/cart"
    try {
        const res = await fetch(url, {
            method: "POST",
            headers: {
                "x-user-secure-id": secureId,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        })
        console.log("Ini Response >>>>", res, "Ini Body >>>>", body);
        return NextResponse.json(res)
    } catch (error) {
        console.log(error)
        return NextResponse.json({ message: 'Internal Server Error' });
    }
}


