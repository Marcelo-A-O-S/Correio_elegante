"use client";
import ImageLogo from '../assets/Logo carta.png';
import Image from 'next/image';
import { moontime } from '@/app/fonts/font';
import { Menu } from '@deemlol/next-icons';
import { useState } from 'react';

export default function Navbar() {
    const [openMenu, setOpenMenu] = useState(false);
    return (<>
        <nav className="bg-[#5271ff] w-full border-b-2">
            <div className="container flex w-full justify-between items-center mx-auto px-4 py-2 text-white">
                <div className='flex items-center'>
                    <Image src={ImageLogo} alt="Logo" className="h-10 w-12 mr-2 inline-block" />
                    <a href="/" className={`${moontime.className} text-4xl`}>Correio Solidario</a>
                </div>
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
                        <a href="#participar">Participar</a>
                    </li>
                </ul>
                <Menu className='sm:hidden' onClick={()=>setOpenMenu(!openMenu)} />
            </div>
            <div className={`${openMenu? "flex": "hidden"} flex-col`}>
            <a className='flex py-2 pl-3 pr-4' href="#hero">Home</a>
            <a className='flex py-2 pl-3 pr-4' href="#funcionamento" >Regras</a>
            <a className='flex py-2 pl-3 pr-4' href="#criterios">Criterios</a>
            <a className='flex py-2 pl-3 pr-4' href="#participar">Participar</a>
            </div>
        </nav>

    </>)
}