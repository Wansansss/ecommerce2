import { User } from "next-auth";


export type SafeUser = Omit<User,"createdAt" | "updatedAt" | "emailVerified" | "userSecureId"|"token"|"role"> & { 
    createdAt: string
    updatedAt: string
    userSecureId: string
    token: string
    fullName: string
    emailVerified: string | null
    role: [] | null | undefined
}