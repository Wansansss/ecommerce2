import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

export async function getSession() {
    const session = await getServerSession(authOptions)
    return session?.user
}

// export async function getUserDetail(){
//     const session = await getSession();
//     const currentUser = await getAccountDetail(session?.secureId);
//     return currentUser
// }


// export default async (req, res) => {
//   const session = await getServerSession(req, res, authOptions)
//   if (session) {
//     // Signed in
//     console.log("Session", JSON.stringify(session, null, 2))
//   } else {
//     // Not Signed in
//     res.status(401)
//   }
//   res.end()
// }
