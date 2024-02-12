import Link from "next/link";
import Container from "../Container";
import FooterList from "./FooterList";
import { MdFacebook } from "react-icons/md";
import {
  AiFillInstagram,
  AiFillTwitterCircle,
  AiFillYoutube,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="bg-black/85 text-slate-200 text-sm mt-16">
      <Container>
        <div className=" flex flex-col md:flex-row justify-between pr-6 pl-8 pt-16 pb-8">
          <FooterList>
            <h3 className="text-base font-bold mb-2">Shop Categories</h3>
            <Link href={"/phones"}>Phone</Link>
            <Link href={"/laptops"}>Laptops</Link>
            <Link href={"/desktop"}>Desktops</Link>
            <Link href={"/watches"}>Watches</Link>
            <Link href={"/tv"}>TVs</Link>
            <Link href={"/accessories"}>Accesories</Link>
          </FooterList>
          <FooterList>
            <h3 className="text-base font-bold mb-2">Customer Services</h3>
            <Link href={"/contact"}>Contact Us</Link>
            <Link href={"/policy"}>Shipping Policy</Link>
            <Link href={"/return"}>Returns & Exchanges</Link>
            <Link href={"/faqs"}>FAQs</Link>
          </FooterList>
          <div className=" w-full md:w-1/3 mb-6 md:mb-0 ">
            <h3 className="text-base font-bold mb-2">About Us</h3>
            <p className="mb-2">
              Welcome to My Ecommerce, where we are revolutionizing the way you
              shop for electronics. Founded on the principle of providing
              unparalleled convenience and exceptional service, we are committed
              to being your trusted partner in the world of technology.
            </p>
            <p>
              &copy;{new Date().getFullYear()} Ecommerce. All rights reserved{" "}
            </p>
          </div>
          <FooterList>
            <h3 className=" text-base font-bold mb-2">Follow Us</h3>
            <div className="flex gap-2">
              <Link href={"/"} className=" hover:text-red-500 transition-all duration-500 hover:scale-125">
                <MdFacebook size={32} />
              </Link>
              <Link href={"/"} className=" hover:text-red-500 transition-all duration-500 hover:scale-125">
                <AiFillTwitterCircle size={32}  />
              </Link>
              <Link href={"/"} className=" hover:text-red-500 transition-all duration-500 hover:scale-125">
                <AiFillInstagram size={32} />
              </Link>
              <Link href={"/"} className=" hover:text-red-500 transition-all duration-500 hover:scale-125">
                <AiFillYoutube size={32} />
              </Link>
            </div>
          </FooterList>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
