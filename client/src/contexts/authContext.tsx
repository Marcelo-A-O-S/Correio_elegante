'use client'
import { verifyToken } from "@/utils/auth";
import { destroyCookie } from "nookies";
import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { createContext } from "react";
interface AuthContextprops{
    auth: boolean;
    onchange: ()=>Promise<void>;
    onlogout: ()=>Promise<void>;
}
export const AuthContext = createContext({} as AuthContextprops);


export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const router = useRouter();
    const [auth, setAuth ] = useState(false);
    useEffect(()=>{
        verifyAuth()

    }, [])
    const onchange = async () => {
        setAuth(!auth);
    };
    const onlogout = async () =>{
        await fetch("/api/logout");
        setAuth(false);
        router.push("/login");

    }
    const verifyAuth = async() => {
        const res =  await fetch("/api/me");;
        if(res.ok){
            setAuth(true);
        }else{
            if(auth){
                await onlogout();
            }
        }
    }
    return (
        <AuthContext.Provider value={{ auth, onchange, onlogout }}>
            {children}
        </AuthContext.Provider>
    )
};