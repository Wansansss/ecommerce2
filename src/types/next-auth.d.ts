import NextAuth, { DefaultSession } from "next-auth"
 
declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      role: string | undefined | null
      secureId:string | undefined | null
      fullName:string | undefined | null
      address:string | undefined | null
    } 
  }
}