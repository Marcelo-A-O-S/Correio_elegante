import Footer from "./footer";
import Navbar from "./navbar";
import { AuthProvider } from "@/contexts/authContext";

export default function Container({ children }: { children: React.ReactNode }) {
    return (
    <>
    <AuthProvider>
    <Navbar/>
    {children}
    <Footer/>
    </AuthProvider>
    </>)
}