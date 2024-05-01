import AdminNav from "@/components/admin/AdminNav";
import React from "react";

export const metadata = {
    title:"Admin page",
    description:"Admin Dashboard",
}

const AdminLayout = ({children} : {children:React.ReactNode}) => {
    return ( 
        <div>
            <AdminNav/>
            {children}
        </div>
     );
}
 
export default AdminLayout;