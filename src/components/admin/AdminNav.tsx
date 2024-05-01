"use client"


import Link from "next/link";
import Container from "../utils/Container";
import AdminNavItem from "./AdminNavItem";
import { MdDashboard, MdDns, MdFormatListBulleted, MdLibraryAdd } from "react-icons/md";
import { usePathname } from "next/navigation";

const AdminNav = () => {
 

    const pathname = usePathname()

    return ( 
        <div className="relative top-24 left-0 right-0 z-5 px-4 bg-opacity-90">
            <Container>
                <div className="flex flex-row items-center justify-between md:justify-center gap-2 md:gap-12 overflow-x-auto flex-wrap text-black">
                    <Link href="/admin">
                    <AdminNavItem label="Summary" icon={MdDashboard} selected={pathname === "/admin"}/>
                    </Link>
                    <Link href="/admin/add-products">
                    <AdminNavItem label="AddProducts" icon={MdLibraryAdd} selected={pathname === "/admin/add-products"}/>
                    </Link>
                    <Link href="/admin/manage-products">
                    <AdminNavItem label="ManageProducts" icon={MdDns} selected={pathname === "/admin/manage-products"}/>
                    </Link>
                    <Link href="/admin/manage-orders">
                    <AdminNavItem label="ManageOrders" icon={MdFormatListBulleted} selected={pathname === "/admin/manage-orders"}/>
                    </Link>
                </div>
            </Container>
        </div>
     );
}
 
export default AdminNav;