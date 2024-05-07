import { getSession } from "@/actions/getCurrentUser";
import { CartProductType } from "@/app/product/[Id]/ProductDetails";
import axios from "axios";
import { NextResponse } from "next/server";

const calculateOrderAmount = (items: CartProductType[]) => {
    const totalPrice = items.reduce((acc,item)=>{
        const itemTotal = item.amount * item.qty
        return acc * itemTotal
    }, 0)
    return totalPrice
}

export async function POST(request: Request){
    const currentUser = await getSession()

    if(!currentUser){
        return NextResponse.json({error: 'Login Terlebih Dahulu'}, {status: 401})
    }
    const body = await request.json()
    const {items, paymentOrderId} = body
    const total = calculateOrderAmount(items) * 100
    const orderData = {
        user: {connect: {fullName: currentUser.name}},
        amount: total,
        currency:"IDR",
        status:"pending",
        deliveryStatus:"pending",
        paymentOrderId: paymentOrderId,
        products: items

    }
    if(paymentOrderId) {
        

    } else {
        const paymentOrder = await axios.post(process.env.NEXT_PUBLIC_API_URL+ "/api/sl/v1/web/cart",orderData)
        return NextResponse.json(paymentOrder)
    }
}