"use client";
import Button from "@/components/utils/Button";
import Container from "@/components/utils/Container";
import ProductImages from "@/components/utils/products/ProductImages";
import SetQuantity from "@/components/utils/products/SetQuantity";
import { useCart } from "@/hooks/useCart";
import { formatPrice } from "@/libs/formatPrice";
import { Rating } from "@mui/material";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { MdCheckCircle } from "react-icons/md";

interface ProductDetailsProps {
  data: any;
}

export type CartProductType = {
  productSecureId: string;
  productName: string;
  productDescription: string;
  categoryName: string;
  selectedImg: SelectedImgType;
  qty: number;
  stock: number;
  amountDiscount: number;
  amount: number;
};

export type SelectedImgType = {
  image: string;
};

const Horizontal = () => {
  return <hr className="w-[30% my-2] h-1 bg-red-600" />;
};

const ProductDetails: React.FC<ProductDetailsProps> = ({ data }) => {
  const { handleAddProductToCart, cartProducts } = useCart();
  const [isProductInCart, setIsProductInCart] = useState(false);
  const [cartProduct, setCartProduct] = useState<CartProductType>({
    productSecureId: data.productSecureId,
    productName: data.productName,
    productDescription: data.productDescription,
    categoryName: data.categoryName,
    selectedImg: { ...data.fileUrlList[0] },
    qty: 1,
    stock: data.totalProductStock,
    amountDiscount: data.amountDiscount,
    amount: data.amount,
  });
  const router = useRouter();

  useEffect(() => {
    setIsProductInCart(false);
    if (cartProducts) {
      const existingIndex = cartProducts.findIndex(
        (item) => item.productSecureId == data.productSecureId
      );

      if (existingIndex > -1) {
        setIsProductInCart(true);
      }
    }
  }, [cartProducts, data.productSecureId]);

  const handleSelect = useCallback((value: SelectedImgType) => {
    setCartProduct((prev) => {
      return {
        ...prev,
        selectedImg: value,
      };
    });
  }, []);

  const handleQtyIncrease = useCallback(() => {
    if (cartProduct.qty === cartProduct.stock) {
      return;
    }

    setCartProduct((prev) => {
      return {
        ...prev,
        qty: prev.qty + 1,
      };
    });
  }, [cartProduct]);
  const handleQtyDecrease = useCallback(() => {
    if (cartProduct.qty === 1) {
      return;
    }

    setCartProduct((prev) => {
      return {
        ...prev,
        qty: prev.qty - 1,
      };
    });
  }, [cartProduct]);

  return (
    <Container>
      <div className="h-full pt-44 pb-12 px-8 grid grid-cols-1 md:grid-cols-2 gap-12">
        <ProductImages
          cartProduct={cartProduct}
          data={data}
          handleSelect={handleSelect}
        />
        <div className="flex flex-col gap-1 text-slate-500 text-sm">
          <h2 className="text-3xl font-bold text-black">{data.productName}</h2>
          <div className="flex flex-row gap-2">
            <h1 className="text-xl font-semibold text-black">
              {formatPrice(data.amountDiscount)}
            </h1>
            <h1 className="line-through text-md font-semibold text-gray-500">
              {formatPrice(data.amount)}
            </h1>
            <p className="text-red-600 text-sm">-{data.discount}%</p>
          </div>

          <div className="flex items-center gap-2">
            <Rating value={data.ratingByClick} readOnly />
          </div>
          <Horizontal />
          <div className="text-justify">{data.productDescription}</div>
          <Horizontal />
          <div>
            <span className="font-bold">CATEGORY: </span>
            {data.categoryName}
          </div>
          <div
            className={
              data.totalProductStock ? "text-green-600" : "text-red-600"
            }
          >
            {data.totalProductStock
              ? `Stok : ${data.totalProductStock}`
              : "Habis"}
          </div>
          <Horizontal />
          {isProductInCart ? (
            <>
              <p className="mb-2 text-black flex gap-1">
                <MdCheckCircle className="text-teal-400" size={20} />
                <span className="ml-2">Berhasil Ditambahkan Ke Keranjang</span>
              </p>
              <div className="max-w-[300px]">
                <Button
                  label="Lihat Keranjang"
                  onClick={() => {
                    router.push("/cart");
                  }}
                />
              </div>
            </>
          ) : (
            <>
              <SetQuantity
                cartProduct={cartProduct}
                handleQtyIncrease={handleQtyIncrease}
                handleQtyDecrease={handleQtyDecrease}
              />
              <Horizontal />
              {data.totalProductStock ? (
                <div className="max-w-[300px]">
                  <Button
                    label="Tambah Ke Keranjang"
                    onClick={() => handleAddProductToCart(cartProduct)}
                  />
                </div>
              ) : (
                <div className="max-w-[300px]">
                  <Button
                    label="Tambah Ke Keranjang"
                    onClick={() => handleAddProductToCart(cartProduct)}
                    disabled
                  />
                </div>
              )}
              {/* <div className="max-w-[300px]">
                <Button
                  label="Tambah Ke Keranjang"
                  onClick={() => handleAddProductToCart(cartProduct)}
                />
              </div> */}
            </>
          )}
        </div>
      </div>
    </Container>
  );
};

export default ProductDetails;
