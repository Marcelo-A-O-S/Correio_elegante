import Image from "next/image"
import ImgAdmin from "../../../assets/admin.png"
export default function DashboardPage(){
    return(<>
    <main className="container mx-auto">
        <section className="w-full flex flex-col">
            <div className="flex flex-col items-center">
                <h1 className="text-3xl font-bold text-center my-4">Admin Dashboard</h1>
                <p className="text-center">Bem vindo ao painel do administrador. Aqui você pode gerenciar o sistema do Correio Elegante.</p>
                <Image src={ImgAdmin} alt="" className={"object-cover h-full"}/>
            </div>
        </section>
    </main>
    </>)
}