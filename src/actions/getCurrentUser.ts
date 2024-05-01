import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

export async function getSession() {
    const session = await getServerSession(authOptions)
    return session?.user
}

// export async function getCurrentUser() {
//     try {
//         const session = await getSession()

//         if (!session?.user?.email) {
//             return null
//         }
//         const res = await fetch("http://89.116.134.204:8011/api/sl/v1/web/users/signin",{
//                     method: "POST",
//                     headers: {
//                         "Content-Type": "application/json"
//                     },
//                     body: JSON.stringify(session)
//                 })
//                 const currentUser = await res.json()

//         if (!currentUser) {
//             return null
//         }

//         return {
//             ...currentUser,
//             createBy: currentUser.createBy.toISOString() || null,
//             changeBy: currentUser.updatedAt.toISOString() || null,
//             secureId: currentUser.secureId.toString(),
//             fullName: currentUser.fullName.toString(),
//         }
//     } catch (error: any) {
//         return null
//     }
// }