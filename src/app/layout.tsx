import type { Metadata } from "next";
import { Quattrocento_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "../components/navbar/Navbar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "@/components/footer/Footer";
import CartProviders from "@/providers/CartProviders";

const font = Quattrocento_Sans({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "Ecommerce",
  description: "Website Ecommerce",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className} suppressHydrationWarning={true}>
        <CartProviders>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </CartProviders>
      </body>
    </html>
  );
}
