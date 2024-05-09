import { getProduct } from "@/libs/api"
import { NextResponse } from "next/server"


export async function GET(request: Request){
    try{
        const searchParams = new URLSearchParams(request.url.split("?")[1])
        const rangeFromPriceStr = searchParams.get('price[rangeFrom]')
        const rangeToPriceStr = searchParams.get('price[rangeTo]')
        const rangeFromPrice = rangeFromPriceStr ? parseInt(rangeFromPriceStr) : undefined
        const rangeToPrice = rangeToPriceStr ? parseInt(rangeToPriceStr) : undefined

        console.log("FROM >>>>",rangeFromPrice)
        console.log(rangeToPrice)

        const product = await getProduct("/filter",`page=1&limit=10&rangeFrom=${rangeFromPrice}&rangeTo=${rangeToPrice}`)
        console.log(product)
        return NextResponse.json(product)
    }catch(err){
        console.log(err)
        return NextResponse.error()
    }
}