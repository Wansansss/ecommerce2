
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { AuthOptions } from "next-auth";
import { getAccountDetail, getUserById } from "@/libs/api";


export const authOptions: AuthOptions = {
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {
                username: {
                    label: "Username",
                    type: "text"
                },
                password: {
                    label: 'Password',
                    type: 'password',
                }
            }, async authorize(credentials) {
                const res = await fetch(process.env.NEXT_PUBLIC_API_URL+"/api/sl/v1/web/users/signin", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(credentials)
                })
                const user = await res.json()
                console.log(user)
                if (res.ok && user) {
                    return user
                }
                if (!credentials?.username || !credentials?.password) {
                    throw new Error("Username atau Password Salah")
                }
                if (!user || !user?.hashedPassword) {
                    throw new Error("Username atau Password Salah")
                }
            }
        })
    ],
    callbacks: {
        async session({ session, token }: any) {
            session.token = token.token
            if (session?.token ?? false) {
                try {
                    const userDetails = await getUserById(token.userSecureId)
                    session.user = userDetails.data
                    session.user.address = userDetails.data.address
                } catch (error) {
                    console.log(error)
                }
               
            } 
            if (session?.user.address === undefined || null) {
                const account = await getAccountDetail(token.userSecureId)
                session.user.address = account.data.address
            }
            return session
        },
        async jwt({ token, user }: any) {
            if (user) {
                token.name = user.data.fullName
                token.userSecureId = user.data.userSecureId;
                token.token = user.data.token;

            }
            // console.log("ini user >>>>> ",user);
            return token
        }
    },
    pages: {
        signIn: '/login',
        newUser: '/register',
    },
    debug: process.env.NODE_ENV === 'development',
    session: {
        strategy: "jwt",

    },
    // secret: process.env.NEXTAUTH_SECRET
}
const handler = NextAuth(authOptions)

export { handler as GET, handler as POST, handler as PUT}