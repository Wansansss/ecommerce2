import Image from "next/image";
import Link from "next/link";
import Container from "../Container";

const KategoriCard = ({ kategori }) => {
  return (
    <Container>
      <div className="grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 p-8 flex items-center justify-center">
        {kategori.data?.map((kategoricard) => (
          <Link
            href={`/kategori/${kategoricard.categorySecureId}`}
            key={kategoricard.categorySecureId}
            className="flex items-center justify-center flex-col border-[1px] rounded shadow-sm shadow-black border-black hover:border-red-600 hover:scale-105 duration-75 transition-all max-h-[300px] max-w-[200px]"
          >
            <Image
              src="http://89.116.134.204:8011/api/sl/v1/backoffice/uploadfile/files/ac1.jpeg"
              alt=""
              width={500}
              height={500}
              className="block p-1 max-h-[50%] max-w-[50%] hover:scale-100 hover:-translate-y-1 hover:-translate-x-1 hover:opacity-50 duration-300 transition-all"
            />

            <div className="block h-[50%] p-2 w-full text-white font-semibold bg-red-600/90 hover:text-black/80">
              <p className="block text-center text-xl">
                {kategoricard.categoryName}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </Container>
  );
};

export default KategoriCard;
