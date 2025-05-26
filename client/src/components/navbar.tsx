import ImageLogo from '../assets/Logo carta.png';
import Image from 'next/image';
import { moontime } from '@/app/fonts/font';
import { Menu } from '@deemlol/next-icons';
export default function Navbar() {
    return (<>
        <nav className="bg-[#5271ff] w-full border-b-2">
            <div className="container flex w-full justify-between items-center mx-auto px-4 py-2 text-white">
                <div className='flex items-center'>
                    <Image src={ImageLogo} alt="Logo" className="h-10 w-12 mr-2 inline-block" />
                    <a href="/" className={`${moontime.className} text-4xl`}>Correio Solidario</a>
                </div>
                <ul className='hidden sm:flex items-center space-x-4 text-lg'>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#funcionamento" >Regras</a>
                    </li>
                    <li>
                        <a href="#criterios">Criterios</a>
                    </li>
                    <li>
                        <a href="#participar">Participar</a>
                    </li>
                </ul>
                <Menu className='sm:hidden'/>
            </div>
        </nav>

    </>)
}