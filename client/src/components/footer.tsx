import Link from "next/link";
import Image from "next/image";
import { moontime } from "@/app/fonts/font";
import ImageLogo from "../assets/Logo carta.png";

export default function Footer() {
    return (
        <footer className="bg-[#5271ff] border-t-2 text-white py-4">
            <div className="mx-auto container sm:px-4 lg:px-8">
                <div className="flex flex-col items-center">
                    <Link className="flex items-center" href={"/"}>
                        <Image src={ImageLogo} alt="Logo" className="h-10 w-12 mr-2 inline-block" />
                        <a href="/" className={`${moontime.className} text-4xl`}>Correio Elegante</a>
                    </Link>
                </div>
                <div className="flex flex-col items-center mt-4">
                    <ul className="flex flex-col items-center sm:flex-row justify-center space-x-0 sm:space-x-4 space-y-2 sm:space-y-0 mt-4">
                        <li>
                            <Link href="#">Home</Link>
                        </li>
                        <li>
                            <Link href="#funcionamento">Regras</Link>
                        </li>
                        <li>
                            <Link href="#criterios">Criterios</Link>
                        </li>
                        <li>
                            <a href="#realizacao">Realização</a>
                        </li>
                        <li>
                            <Link href="#participar">Participar</Link>
                        </li>
                    </ul>
                </div>
                <div className="text-center py-4">
                    <p className="tex-t-center text-sm">© 2025 Correio Elegante. Todos os direitos reservados.</p>
                    <p className="text-center text-sm">Desenvolvido com carinho pela equipe da Escola Estadual Professor Gastão Valle.</p>
                </div>
            </div>
        </footer>
    );
}