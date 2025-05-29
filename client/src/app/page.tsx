import Image from "next/image";
import ImageHero from "../assets/caixa.png";
import { moontime } from "./fonts/font";
import { Metadata } from "next";
import Manual from "../assets/manual.png";
import Calendario from "../assets/calendario.png";
import ImageChecklist from "../assets/Checklist.png";
import Carta from "../assets/carta.png";
export const metadata: Metadata = {
  title: "Correio Elegante",
  description: "Espalhe carinho, admiração e um pouco de mistério pelos corredores da escola.",
  openGraph: {
    title: "Correio Elegante",
    description: "Espalhe carinho, admiração e um pouco de mistério pelos corredores da escola.",
    images: [
      {
        url: "https://correio-elegante-gastao.vercel.app/2.jpg",
        width: 800,
        height: 600,
        alt: "Correio Elegante Hero Image",
      },
    ],
  },
}
export default function Home() {
  return (
    <main className="container mx-auto">
        <section id="hero" className="flex flex-col items-center w-full h-full p-4 ">
          {/*flex flex-row-reverse items-center justify-between */}
          <div className="flex flex-col items-center sm:flex-row-reverse">
            <Image src={ImageHero} alt="Hero Image" className="h-full object-cover" />
            <div className="flex flex-col">
              <h1 className={` ${moontime.className} text-7xl sm:text-8xl text-center `}>Correio Elegante</h1>
              <p className="text-xl text-center mt-4">
                Espalhe carinho, admiração e um pouco de mistério pelos corredores da escola.
              </p>
            </div>
          </div>
        </section>
        <section id="funcionamento" className="flex flex-col items-center w-full h-full p-4">
          <div className="flex flex-col items-center p-4 sm:flex-row">
            <Image src={Manual} alt="Manual Image" className="h-full object-cover" />
            <div className="flex flex-col items-center">
            <h1 className={`${moontime.className} text-7xl sm:text-8xl text-center`}>Como vai funcionar?</h1>
            <div className="flex flex-col space-y-1 text-xl">
            <p >Será disponibilizada uma caixa para o depósito de cartas coloridas.</p>
            <p >Cada cor representa uma categoria: cartas do bem, de amizade ou de romance. Escolha a cor que melhor representa sua intenção.</p>
            <p>Escreva sua carta e informe o destinatário. Não é necessário identificar o remetente.</p>
            <p> Deposite sua carta na caixa — ela será entregue ao seu destino.</p>
            </div>
            </div>
          </div> 
        </section>
        <section id="criterios" className="flex flex-col items-center w-full h-full p-4">
          <div className="flex flex-col items-center p-4 sm:flex-row-reverse ">
          <Image src={ImageChecklist} alt="Checklist Image" className="h-full object-cover" />
            <div>
            <h1 className={`${moontime.className} text-7xl sm:text-8xl text-center`}>Quais os criterios para participar?</h1>
            <p className="text-xl">Confira abaixo os critérios necessários:</p>
            <ul className="list-disc">
            <li className="text-xl">Ser aluno ou funcionário do Gastão Valle;</li>
            <li className="text-xl">Estar vinculado ao período noturno da instituição (estudando ou trabalhando).</li>
            </ul>
            </div>
          
          </div>
        </section>
        <section id="realizacao" className="flex flex-col items-center w-full h-full p-4">
          <div className="flex flex-col items-center sm:flex-row">
            <Image src={Calendario} alt="Logo Carta" className="h-full object-cover" />
            <div>
            <h1 className={`${moontime.className} text-7xl sm:text-8xl text-center`}>Data de realizacao?</h1>
            <p className="text-xl">A dinâmica terá início na segunda feira, no dia <strong>02/05/2025</strong> finalizando no dia <strong>12/05/2025</strong>. Prepare sua carta com carinho e surpreenda alguém que seja especial para você!!</p>
            </div>
          </div>
        </section>
        <section id="participar" className="flex flex-col items-center w-full h-full p-4">
          <div className="flex flex-col items-center sm:flex-row-reverse">
            <Image src={Carta} alt="Logo Carta" className="h-full object-cover" />
            <div>
            <h1 className={`${moontime.className} text-7xl sm:text-8xl text-center`}>Como participar?</h1>
            <p className="text-xl">Escreva a sua carta e deposite na caixa!</p>
            </div>
          </div>
        </section>
      </main>
  );
}
