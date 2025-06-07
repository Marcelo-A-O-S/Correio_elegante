"use client";

import Image from 'next/image';
import { Menu } from 'lucide-react';
import { useState } from 'react';
import { moontime } from '@/fonts';
import Link from 'next/link';
export default function Navbar() {
    const [openMenu, setOpenMenu] = useState(false);
    return (<>
        <nav className="bg-[#5271ff] w-full border-b-2">
            <div className="container flex w-full justify-between items-center mx-auto px-4 py-2 text-white">
                <div className='flex items-center'>
                    <Link href="/" className={`${moontime.className} text-4xl`}>Correio Elegante</Link>
                </div>
                <ul className='hidden sm:flex items-center space-x-4 text-lg'>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/login" >Login</a>
                    </li>
                </ul>
                <Menu className='sm:hidden' onClick={()=>setOpenMenu(!openMenu)} />
            </div>
            <div className={`${openMenu? "flex": "hidden"} flex-col`}>
            <Link className='flex py-2 pl-3 pr-4' href="/">Home</Link>
            <Link className='flex py-2 pl-3 pr-4' href="/login" >Login</Link>
            </div>
        </nav>

    </>)
    }