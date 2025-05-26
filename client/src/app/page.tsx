import Image from "next/image";
import ImageHero from "../assets/caixa.png";
import { moontime } from "./fonts/font";
import { Metadata } from "next";
import Manual from "../assets/manual.png";
import { ButtonAccount } from "@/components/button-account";
import { Google,Facebook } from "@deemlol/next-icons";
import ImageChecklist from "../assets/Checklist.png";
import Carta from "../assets/carta.png";
export const metadata: Metadata = {
  title: "Correio Solidário",
  description: "Espalhe carinho, admiração e um pouco de mistério pelos corredores da escola.",
  openGraph: {
    title: "Correio Solidário",
    description: "Espalhe carinho, admiração e um pouco de mistério pelos corredores da escola.",
    images: [
      {
        url: "https://correio-elegante-gastao.vercel.app/2.jpg",
        width: 800,
        height: 600,
        alt: "Correio Solidário Hero Image",
      },
    ],
  },
}
export default function Home() {
  return (
    <main className="container mx-auto">
        <section id="#" className="flex flex-col items-center w-full h-full p-4 ">
          {/*flex flex-row-reverse items-center justify-between */}
          <div className="flex flex-col items-center sm:flex-row-reverse">
            <Image src={ImageHero} alt="Hero Image" className="h-full object-cover" />
            <div className="flex flex-col">
              <h1 className={` ${moontime.className} text-7xl sm:text-8xl text-center `}>Correio Solidario</h1>
              <p className="text-xl text-center mt-4">
                Espalhe carinho, admiração e um pouco de mistério pelos corredores da escola.
              </p>
            </div>
          </div>
        </section>
        <section id="#funcionamento" className="flex flex-col items-center w-full h-full p-4">
          <div className="flex flex-col items-center sm:flex-row">
            <Image src={Manual} alt="Manual Image" className="h-full object-cover" />
            <div className="flex flex-col items-center">
            <h1 className={`${moontime.className} text-7xl sm:text-8xl text-center`}>Como vai funcionar?</h1>

            </div>
          </div> 
        </section>
        <section id="#criterios" className="flex flex-col items-center w-full h-full p-4">
          <div className="flex flex-col items-center sm:flex-row-reverse">
          <Image src={ImageChecklist} alt="Checklist Image" className="h-full object-cover" />
            <div>
            <h1 className={`${moontime.className} text-7xl sm:text-8xl text-center`}>Criterios para participar?</h1>
            <p className="text-xl">Segue abaixo os criterios necessarios:</p>
            <li className="text-xl">Ser aluno ou trabalhar no Gastao Valle</li>
            <li className="text-xl">Estudar ou trabalhar no periodo Noturno no Gastao Valle</li>
            </div>
          
          </div>
        </section>
        <section id="#participar" className="flex flex-col items-center w-full h-full p-4">
          <div className="flex flex-col items-center sm:flex-row">
            <Image src={Carta} alt="Logo Carta" className="h-full object-cover" />
            <div>
            <h1 className={`${moontime.className} text-7xl sm:text-8xl text-center`}>Como participar?</h1>
            <p className="text-xl">Participe utilizando a sua conta:</p>
            <div className="flex flex-col gap-2">
              <ButtonAccount className="flex items-center justify-center gap-1 cursor-pointer"  >< Google/>Google</ButtonAccount>
              <ButtonAccount className="flex items-center justify-center gap-1 cursor-pointer"  >< Facebook/>Facebook</ButtonAccount>
            </div>
            </div>
          </div>
        </section>
      </main>
  );
}
