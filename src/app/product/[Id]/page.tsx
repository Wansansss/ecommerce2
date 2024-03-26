import { getProductDetail} from "@/libs/api";
import { Rating } from "@mui/material";

const Horizontal = () => {
  return <hr className="w-[30% my-2]" />;
};


const Page = async ({params}:any) => {
  const product = await getProductDetail(params.Id)
  console.log(product);
  return(
    <>
   <div className="h-full pt-44 pb-12 px-8 grid grid-cols-1 md:grid-cols-2 gap-12">
      <div>IMAGES</div>
      <div className="flex flex-col gap-1 text-slate-500 text-sm">
        <h2 className="text-3xl font-medium text-black">
          {product.data.productName}
        </h2>
        <div className="flex items-center gap-2">
          <Rating value={product.data.ratingByClick} readOnly />
          <div>{product.data.totalProductSell} Terjual</div>
        </div>
        <Horizontal />
        <div className="text-justify">{product.data.productDescription}</div>
        <Horizontal />
        <div>
          <span className="font-bold">CATEGORY: </span>
          {product.data.categoryName}
        </div>
        <div
          className={
            product.data.totalProductStock ? "text-green-600" : "text-red-600"
          }
        >
          {product.data.totalProductStock ? `Stok : ${product.data.totalProductStock}` : "Habis"}
        </div>
        <Horizontal />
        Warna
        <Horizontal />
        <div>Jumlah</div>
        <Horizontal />
        <div>Tambah Ke Keranjang</div>
      </div>
    </div>
    </>
  )
};

export default Page;
