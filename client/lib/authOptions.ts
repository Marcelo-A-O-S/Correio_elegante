import { NextAuthOptions } from "next-auth";
import GoogleProvider  from "next-auth/providers/google";
const googleClientId = process.env.GOOGLE_CLIENT_ID;
const googleClientSecret = process.env.GOOGLE_CLIENT_SECRET;
export const authOptions: NextAuthOptions = {
    pages:{
        signIn:"/"
    },
    providers: [
        GoogleProvider({
            clientId: googleClientId as string,
            clientSecret: googleClientSecret as string,
          }),
    ],
    callbacks:{
        signIn({ user, account, profile, email, credentials }) {
            if(!account || !account.provider) {
                return false; 
            }
            return true;
        },
    }
}