import { FaFacebookSquare, FaInstagramSquare, FaTiktok } from "react-icons/fa";
import Link from "next/link";
import Container from "../utils/Container";

const Footer = () => {
  return (
      <div>
        <footer className="flex flex-col md:flex-row justify-between bg-black/80 text-white/65">
          {/* Tautan */}
          <div className="flex flex-col md:p-8 m-8">
            <span className="font-bold text-white text-xl">
              Layanan Pelanggan
            </span>
            <div className="mb-4 mt-1 border-[2px] border-solid border-red-600 md:-mr-10"></div>
            <Link
              href="/"
              className="hover:text-red-700 hover:translate-x-2 transition-all duration-200"
            >
              <span>Beranda</span>
            </Link>
            <Link
              href="/tentang"
              className="hover:text-red-700 hover:translate-x-2 transition-all duration-200"
            >
              <span>Tentang</span>
            </Link>
            <Link
              href="/layanan"
              className="hover:text-red-700 hover:translate-x-2 transition-all duration-200"
            >
              <span>Layanan</span>
            </Link>
            <Link
              href="/kontak"
              className="hover:text-red-700 hover:translate-x-2 transition-all duration-200"
            >
              <span>Kontak</span>
            </Link>
          </div>
          {/* About Us */}
          <div className="flex flex-col md:p-8 m-8">
            <span className="font-bold text-white text-xl">About Us</span>
            <div className="mb-4 mt-1 border-[2px] border-solid border-red-600 md:-mr-10"></div>
            <Link
              href="/"
              className="hover:text-red-700 hover:translate-x-2 transition-all duration-200"
            >
              <span>Beranda</span>
            </Link>
            <Link
              href="/tentang"
              className="hover:text-red-700 hover:translate-x-2 transition-all duration-200"
            >
              <span>Tentang</span>
            </Link>
            <Link
              href="/layanan"
              className="hover:text-red-700 hover:translate-x-2 transition-all duration-200"
            >
              <span>Layanan</span>
            </Link>
            <Link
              href="/kontak"
              className="hover:text-red-700 hover:translate-x-2 transition-all duration-200"
            >
              <span>Kontak</span>
            </Link>
          </div>
          {/* Pengiriman */}
          <div className="flex flex-col md:p-8 m-8">
            <span className="font-bold text-white text-xl">Pengiriman</span>
            <div className="mb-4 mt-1 border-[2px] border-solid border-red-600 md:-mr-10"></div>
            <Link
              href="/"
              className="hover:text-red-700 hover:translate-x-2 transition-all duration-200"
            >
              <span>Beranda</span>
            </Link>
            <Link
              href="/tentang"
              className="hover:text-red-700 hover:translate-x-2 transition-all duration-200"
            >
              <span>Tentang</span>
            </Link>
            <Link
              href="/layanan"
              className="hover:text-red-700 hover:translate-x-2 transition-all duration-200"
            >
              <span>Layanan</span>
            </Link>
            <Link
              href="/kontak"
              className="hover:text-red-700 hover:translate-x-2 transition-all duration-200"
            >
              <span>Kontak</span>
            </Link>
          </div>
          {/* Pengiriman */}
          <div className="flex flex-col md:m-16 m-8">
            <span className="font-bold text-white text-xl">Ikuti Kami</span>
            <div className="mb-4 mt-1 border-[2px] border-solid border-red-600 md:-mr-10"></div>
            <div className="flex p-4 gap-4">
              <a
                href="https://www.facebook.com/profile.php?id=61555043132593&sfnsn=wiwspwa&mibextid=RUbZ1f"
                target="blank"
                className="text-4xl text-white hover:text-red-700 hover:-translate-y-1.5 shadow-lg mx-1 duration-300"
              >
                <FaFacebookSquare></FaFacebookSquare>
              </a>
              <a
                href="https://www.tiktok.com/@sinarlestari555?_t=8kFQuNQAsa8&_r=1"
                target="blank"
                className="text-4xl text-white hover:text-red-700 hover:-translate-y-1.5 shadow-lg mx-1 duration-300"
              >
                <FaTiktok></FaTiktok>
              </a>
              <a
                href="https://www.instagram.com/slsinarlestari?igsh=MXQydDNsZDFkcjl6ZA=="
                target="blank"
                className="text-4xl text-white hover:text-red-700 hover:-translate-y-1.5 shadow-lg mx-1 duration-300"
              >
                <FaInstagramSquare></FaInstagramSquare>
              </a>
            </div>
          </div>
          <div className="flex items-center md:mt-12"></div>
        </footer>
        <div className="px-10 py-6 text-sm text-center text-base-100 border-base-300 bg-black/70 ">
          <div className="w-full h-[2px] bg-red-700"></div>
          <div className="flex flex-col items-center justify-center mt-6 md:flex-row text-white font-semibold">
            <p>
              &copy; Copyright 2022, PT. Sinergi Mandiri Lestari. All Rights
              Reserved
            </p>
          </div>
        </div>
        </div>
  );
};

export default Footer;
