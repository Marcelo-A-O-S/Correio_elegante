'use client'
import { ICarta } from "@/domains/interfaces/ICarta"
import { ITrecho } from "@/domains/interfaces/ITrecho"
import Image from "next/image";
import { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";

interface CartaShowProps {
    cartaCurrent: ICarta,
    initialTrechos: ITrecho[]
}
export default function CartaShow({ cartaCurrent, initialTrechos }: CartaShowProps) {
    const [currentImage, setCurrentImage] = useState<string | null>(null);
    const [trechos, setTrechos] = useState<ITrecho[]>([]);
    const [showReloadButton, setShowReloadButton] = useState(false);
    useEffect(() => {
        if (initialTrechos && initialTrechos.length > 0) {
            setTrechos(initialTrechos);
        }
    }, [initialTrechos]);
    const sequence = trechos.length > 0
    ? trechos.flatMap((trecho, index) => {
        const items: (string | number | (() => void))[] = [];
        items.push(() => {
            if (trecho.imageUrl) setCurrentImage(trecho.imageUrl);
        });
        if (index === trechos.length - 1) {
            items.push(() => setShowReloadButton(true));
          }
        items.push(trecho.content);
        items.push(3000);
        return items;
    })
    : [];
    return (
        <>
            <div className="flex flex-col w-full h-screen items-center justify-center">
                {currentImage && (
                    <Image
                        src={currentImage}
                        alt="Hello Mochi"
                        className="w-64 h-64 sm:w-96 sm:h-96 animate-pulse"
                        width="50"
                        height="50"
                    />
                )}
                {sequence.length > 0 ? (
                <TypeAnimation
                    sequence={sequence}
                    wrapper="span"
                    cursor={true}
                    
                    className="text-center text-xl sm:text-2xl p-4"
                    omitDeletionAnimation={true}
                />
            ) : (
                <p className="text-gray-500">Carregando...</p>
            )}
            {showReloadButton && (
            <button
              onClick={() => window.location.reload()}
              className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded-xl shadow-md mt-6"
            >
              Ver tudo de novo
            </button>
          )}
            </div>

        </>
    )
}