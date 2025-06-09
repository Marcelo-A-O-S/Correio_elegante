'use client';
import Image from "next/image"
import ImgAdmin from "../../assets/admin.png"
import { useState, useContext } from "react";
import { login } from "@/utils/auth";
import { useRouter } from "next/navigation";
import { AuthContext } from "@/contexts/authContext";


export default function LoginPage() {
    const {onchange} = useContext(AuthContext);
    const router = useRouter();
    const [secret, setSecret] = useState("");
    const handleLogin = async () =>{
        const token = await login(secret);
        if (token) {
            await onchange();
            router.push("/admin/dashboard");
          } else {
            alert("Login failed. Please check your credentials.");
          }
    }
    return (<>
        <main className="container mx-auto">
            <section className="flex flex-col items-center w-full h-full p-4">
                <div className="flex flex-col items-center p-4 sm:flex-row justify-around w-full">
                    <Image src={ImgAdmin} alt="Admin Image" className="h-full object-cover" />
                    <div className="flex flex-col items-center">
                        <h1 className="text-3xl font-bold">Login Admin</h1>
                        <form className="mt-4">
                            <div className="mb-4">
                                <label htmlFor="password" className="block text-sm font-medium ">Secret</label>
                                <input type="password" value={secret} onChange={(e)=> setSecret(e.target.value)} className="bg-white border-2 rounded-2 text-black"/>
                            </div>
                            <button type="button" onClick={handleLogin} className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">Login</button>
                        </form>
                    </div>
                </div>
            </section>

        </main>
    </>)
}