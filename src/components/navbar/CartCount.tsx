'use client'

import { useCart } from "@/hooks/useCart";
import { useRouter } from "next/navigation";
import { CiShoppingCart } from "react-icons/ci";

const CartCount = () => {
    const {cartTotalQty} = useCart()
    const router = useRouter()
    return ( 
    <div className="relative cursor-pointer" onClick={() => router.push('/cart')}>
        <div className="text-3xl">
            <CiShoppingCart size={23}/>
        </div>
        <span className="absolute top-[-5px] right-[-8px] bg-red-700 text-white h-4 w-4 rounded-full flex items-center justify-center text-xs">
            {cartTotalQty}
        </span>
    </div> 
    );
}
 
export default CartCount;