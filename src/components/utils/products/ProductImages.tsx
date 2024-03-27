"use client"

import { CartProductType, SelectedImgType } from "@/app/product/[Id]/ProductDetails";
import Image from "next/image";
import React from "react";


interface ProductImagesProps{
    cartProduct: CartProductType,
    data: any,
    handleSelect: (value: SelectedImgType) => void;
}

const ProductImages:React.FC<ProductImagesProps> = ({
    cartProduct,
    data,
    handleSelect,
}) => {
    return ( 
        <div className="grid grid-cols-6 gap-2 h-full max-h-[500px] min-h-[300px] sm:min-h-[400px]">
            <div className="flex flex-col items-center justify-center gap-4 cursor-pointer border h-full max-h-[500px] min-h-[300px] sm:min-h-[400px]">
                {data.fileUrlList.map((image:SelectedImgType) => {
                    return <div key={image.color} onClick={() => handleSelect(image)} className={`relative w-[80%] aspect-square border-red-600 ${cartProduct.selectedImg.color === image.color ? 'border-[1.5px]' : 'border-none'}`}>
                        <Image src={image.image} alt="Product" fill className="object-contain"/>
                    </div>
                })}
            </div>
            <div className="col-span-5 relative aspect-square">
                <Image fill src={cartProduct.selectedImg.image} alt="Product" className="w-full h-full object-contain max-h-[500px] min-h-[300px] sm:min-h-[400px]"/>
            </div>
        </div>
     );
}
 
export default ProductImages;