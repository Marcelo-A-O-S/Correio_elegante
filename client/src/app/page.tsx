import Image from "next/image";
import ImageHero from "../assets/caixa.png";
import { moontime } from "./layout";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Correio Solidário",
  description: "Espalhe carinho, admiração e um pouco de mistério pelos corredores da escola.",
  openGraph: {
    title: "Correio Solidário",
    description: "Espalhe carinho, admiração e um pouco de mistério pelos corredores da escola.",
    images: [
      {
        url: "../assets/caixa.png",
        width: 800,
        height: 600,
        alt: "Correio Solidário Hero Image",
      },
    ],
  },
}
export default function Home() {
  return (
    <div className="">
      <main className="container mx-auto">
        <section className="flex flex-col items-center w-full ">
          <div className="flex flex-row-reverse items-center justify-between">
            <Image src={ImageHero} alt="Hero Image" className="h-full object-cover" />
            <div className="flex flex-col">
              <h1 className={` ${moontime.className} text-8xl text-center `}>Correio Solidario</h1>
              <p className="text-xl  mt-4">
                Espalhe carinho, admiração e um pouco de mistério pelos corredores da escola.
              </p>
            </div>
          </div>
        </section>
        <section className="flex flex-col items-center">
          <div>
            <h1>Como vai funcionar</h1>
          </div>
        </section>

      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">

      </footer>
    </div>
  );
}
