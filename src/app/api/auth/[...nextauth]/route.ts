
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import { AuthOptions } from "next-auth";
import { getUserById } from "@/libs/api";


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
                const res = await fetch("http://89.116.134.204:8011/api/sl/v1/web/users/signin", {
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
                const userDetails = await getUserById(token.userSecureId)
                session.user = userDetails
                session.user.name = `${userDetails.data.fullName}`
                session.user.role = `${userDetails.data.role}`
                session.user.secureId = `${userDetails.data.secureId}`
                
            }
            return session
        },
        async jwt({ token, user }: any) {
            if (user) {
                token.fullName = user.data.fullName
                token.userSecureId = user.data.userSecureId;
                token.token = user.data.token;
                user.data.secureId = token.userSecureId;
            }
            // console.log(token,user);
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
    secret: process.env.NEXTAUTH_SECRET
}
const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }