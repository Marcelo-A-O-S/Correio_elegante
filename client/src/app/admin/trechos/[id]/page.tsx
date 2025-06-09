import { getCartaById, getCartaComTrechos } from "@/repositories/cartaRepository"
import TrechosEditor from "./TrechosEditor";

export default async function TrechosPage({ params }: { params: { id: string } }) {
    const carta = await getCartaComTrechos(params.id);
    if (!carta) return <div>Carta não encontrada</div>;

    return (<>
        <main className="container mx-auto">
            <TrechosEditor carta={carta} initialTrechos={carta.trechos} />
        </main>
    </>)
}