
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
                const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/api/sl/v1/web/users/signin", {
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
        // async session({ session, token }: any) {
        //     session.token = token.data.token
        //     console.log(session.token)
        //     session.user = token.data
        //     console.log(session.user)
        //     if (session?.token ?? false) {
        //         try {
        //             const userDetails = await getUserById(session.user.userSecureId)
        //             console.log(userDetails.data)
        //             session.user = userDetails.data
        //             session.user.address = userDetails.data.address
        //         } catch (error) {
        //             console.log(error)
        //         }

        //     } 
        //     if (session?.user.address === undefined || null) {
        //         const account = await getAccountDetail(token.userSecureId)
        //         session.user.address = account.data.address
        //     }
        //     return session
        // },
        async jwt({ session, token, user }: any) {
            console.log("ini token >>>", token, user, session);
            if (user) {
                return {
                    ...token,
                    secureId: user.data.userSecureId,
                    fullName: user.data.fullName
                }
            }
            return token
        },
        async session({ session, token, user }: any) {
            console.log("ini session >>>", session, token, user);
            if (token) {
                return {
                    ...session,
                    user: {
                        ...session.user,
                        secureId: token.secureId,
                        fullName: token.fullName,
                    }
                }
            }
            return session
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

export { handler as GET, handler as POST, handler as PUT }