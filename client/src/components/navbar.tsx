"use client";
import ImageLogo from '../assets/Logo carta.png';
import Image from 'next/image';
import { moontime } from '@/app/fonts/font';
import { Menu } from '@deemlol/next-icons';
import { useState, useContext } from 'react';
import {useRouter } from "next/navigation";
import { AuthContext } from '@/contexts/authContext';
import { Mails } from 'lucide-react';
import { House } from 'lucide-react';
import { Printer } from 'lucide-react';
import Link from 'next/link';
export default function Navbar() {
    const router = useRouter()
    const { auth, onchange, onlogout } = useContext(AuthContext);
    const [openMenu, setOpenMenu] = useState(false);
    const handleLogout = async () => {
        await onlogout();
        await onchange();
        router.push("/")
    };
    return (<>

        <nav className="bg-[#5271ff] w-full border-b-2">
            <div className="container flex w-full justify-between items-center mx-auto px-4 py-2 text-white">
                <div className='flex items-center'>
                    <Image src={ImageLogo} alt="Logo" className="h-10 w-12 mr-2 inline-block" />
                    <span className={`${moontime.className} text-4xl`}>Correio Elegante</span>
                </div>
                {auth ?
                    <ul className='hidden sm:flex items-center space-x-4 text-lg'>

                        <li>
                            <Link className="flex" href="/admin/dashboard"><House/>Home</Link>
                        </li>
                        <li>
                            <Link className="flex" href="/admin/cartas" > <Mails/> Cartas</Link>
                        </li>
                        <li>
                            <Link className="flex" href="/admin/impressoes" > <Printer/> Impressões</Link>
                        </li>
                        <li>
                            <button onClick={handleLogout} className='cursor-pointer' type="button">Logout</button>
                        </li>

                    </ul>
                    :
                    <ul className='hidden sm:flex items-center space-x-4 text-lg'>

                        <li>
                            <a href="#hero">Home</a>
                        </li>
                        <li>
                            <a href="#funcionamento" >Regras</a>
                        </li>
                        <li>
                            <a href="#criterios">Criterios</a>
                        </li>
                        <li>
                            <a href="#realizacao">Realização</a>
                        </li>
                        <li>
                            <a href="#participar">Participar</a>
                        </li>
                    </ul>}
                <Menu className='sm:hidden' onClick={() => setOpenMenu(!openMenu)} />
            </div>
            <div className={`${openMenu ? "flex" : "hidden"} flex-col`}>
                {auth ? <>
                    <a className="flex" href="/admin/dashboard"><House/>Home</a>
                    <a className="flex" href="/admin/cartas" > <Mails/> Cartas</a>
                    <button onClick={handleLogout}  className='flex w-full' type="button">Logout</button>
                </>
                    :
                    <>
                        <a className='flex py-2 pl-3 pr-4' href="#hero">Home</a>
                        <a className='flex py-2 pl-3 pr-4' href="#funcionamento" >Regras</a>
                        <a className='flex py-2 pl-3 pr-4' href="#criterios">Criterios</a>
                        <a className='flex py-2 pl-3 pr-4' href="#realizacao">Realização</a>
                        <a className='flex py-2 pl-3 pr-4' href="#participar">Participar</a>
                    </>
                }
            </div>
        </nav>

    </>)
}