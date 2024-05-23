import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaPhoneAlt,
  FaTiktok,
} from "react-icons/fa";
import Link from "next/link";
import { MdEmail } from "react-icons/md";
import logo from "../../../public/assets/img/logo.png";
import Image from "next/image";

const Footer = () => {
  return (
    <div>
      <footer className="flex flex-col md:flex-row justify-between bg-black/80 text-white">
        <div className="px-8">
          <Link href="/">
            <Image
              src={logo}
              alt="Sinergi Mandiri Lestari "
              className="w-40 sm:w-46"
            />
          </Link>
          <h1 className="text-2xl font-bold">Sinar Lestari Shop</h1>
          <hr className="w-full bg-red-600 h-2" />
          <span className="text-accent">
            4, Jl. Utama Raya No.11.f, RT.4/RW.3, Cengkareng, Kecamatan
            Cengkareng, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11730
          </span>
          <div className="flex items-center my-1">
            <FaPhoneAlt className="mx-6 text-2xl text-accent"></FaPhoneAlt>
            <div className="flex flex-col py-4">
              <a
                href="https://wa.me/6282137026688?text=Hallo Admin,"
                className="font-medium hover:text-red-600"
                target="blank"
              >
                +62 821-3702-6688
              </a>
              <a
                href="https://wa.me/6282227000222?text=Hallo Admin,"
                className="font-medium hover:text-red-600"
                target="blank"
              >
                +62 822-2700-0222
              </a>
              <a
                href="https://wa.me/6282250001666?text=Hallo Admin,"
                className="font-medium hover:text-red-600"
                target="blank"
              >
                +62 822-5000-1666
              </a>
              <a
                href="https://wa.me/6281290844844?text=Hallo Admin,"
                className="font-medium hover:text-red-600"
                target="blank"
              >
                +62 812-9084-4844
              </a>
            </div>
          </div>
          <div className="flex items-center py-4">
            <MdEmail className="mx-6 text-2xl text-accent"></MdEmail>
            <a href="mailto:sinergimandirilestari@gmail.com">
              <h3  className="font-medium hover:text-red-600">
                sinergimandirilestari@gmail.com
              </h3>
            </a>
          </div>
        </div>

        {/* Tautan */}
        <div className="py-24 px-4 md:px-8 justify-center items-center">
          <span className="font-bold text-xl">Tautan</span>
          <hr className="w-full h-1 bg-red-600" />
          <div className="flex flex-col">
            <Link
              href="/"
              className="hover:text-red-600"
            >
              <span>Home</span>
            </Link>
            <Link
              href="/promo"
              className="hover:text-red-600"
            >
              <span>Promo</span>
            </Link>
            <Link
              href="/"
              className="hover:text-red-600"
            >
              <span>Kategori</span>
            </Link>
            <Link
              href="/contact"
              className="hover:text-red-600"
            >
            <span>Kontak</span>
            </Link>
          </div>
        </div>
        {/* Fokus & Layanan */}
        <div className="flex flex-col justify-center px-4">
          <span className="font-bold text-xl">Fokus & Layanan</span>
          <hr className="w-full h-1 bg-red-600" />
          <h1 className="text-accent">
            Menyediakan layanan pelanggan yang responsive untuk membantu
            pelanggan dalam pertanyaan, masalah, maupun bantuan teknis
          </h1>
          <div className="flex flex-row py-16 justify-end px-4">
            <a
              href="https://www.facebook.com/profile.php?id=61555043132593&sfnsn=wiwspwa&mibextid=RUbZ1f"
              target="blank"
              className="text-4xl text-accent hover:text-red-600 hover:-translate-y-1.5 shadow-lg mx-1 duration-300"
            >
              <FaFacebookSquare></FaFacebookSquare>
            </a>
            <a
              href="https://www.tiktok.com/@sinarlestari555?_t=8kFQuNQAsa8&_r=1"
              target="blank"
              className="text-4xl text-accent hover:text-red-600 hover:-translate-y-1.5 shadow-lg mx-1 duration-300"
            >
              <FaTiktok></FaTiktok>
            </a>
            <a
              href="https://www.instagram.com/slsinarlestari?igsh=MXQydDNsZDFkcjl6ZA=="
              target="blank"
              className="text-4xl text-accent hover:text-red-600 hover:-translate-y-1.5 shadow-lg mx-1 duration-300"
            >
              <FaInstagramSquare></FaInstagramSquare>
            </a>
          </div>
        </div>
      </footer>
      <div className="px-10 py-6 text-sm text-center text-base-100 border-base-300 bg-black/70 ">
        <div className="w-full h-[2px] bg-red-700"></div>
        <div className="flex flex-col items-center justify-center mt-6 md:flex-row text-white font-semibold">
          <p>
            &copy; Copyright 2024, PT. Sinergi Mandiri Lestari. All Rights
            Reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
