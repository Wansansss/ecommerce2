import { getKategoriList } from "@/libs/api";
import Link from "next/link";
import { PiCaretDown } from "react-icons/pi";

const Navlink = async () => {
  type NavItem = {
    label: string;
    link?: string;
    children?: NavItem[];
  };

  const navItems: NavItem[] = [
    {
      label: "Home",
      link: "/",
    },
    {
      label: "Promo",
      link: "/product/promo",
    },
    {
      label: "Kategori Produk",
      children: [
        {
          label: "Populer",
          link: "/populer",
        },
        {
          label: "Terbaru",
          link: "/terbaru",
        },
        {
          label: "Terlaris",
          link: "/terlaris",
        },
      ],
    },
    {
      label: "Kontak",
      link: "/contact",
    },
  ];
  const kategori = await getKategoriList();
  return (
    <>
      {navItems.map((link, i) => (
        <div key={i} className="relative group px-2 py-3 transition-all">
          <div className="flex cursor-pointer items-center gap-2 group-hover:text-red-600 transition-all duration-500">
            <Link href={link.link ?? "/"}>{link.label}</Link>

            {link.children && (
              <PiCaretDown className=" rotate-180 transition-all duration-500 group-hover:rotate-0" />
            )}
          </div>
          {/* dropdown */}

          {link.children && (
            <div className="absolute right-0 top-10 hidden w-auto max-h-[250px] overflow-y-scroll flex-col gap-1 bg-white py-3 px-6 shadow-md transition-all duration-500 group-hover:flex">
              {kategori.data.map((ch: any, index: any) => (
                <Link
                  key={index}
                  href={`/product/kategori/${ch.categorySecureId}`}
                  className="flex cursor-pointer py-1 pl-6 pr-8 text-black/90 hover:text-red-600"
                >
                  <ul className="list-disc hover:list-none">
                    <li>{ch.categoryName}</li>
                  </ul>
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </>
  );
};

export default Navlink;
