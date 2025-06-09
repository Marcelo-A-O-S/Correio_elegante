import { getCartaById, getCartaComTrechos } from "@/repositories/cartaRepository"
import TrechosEditor from "./TrechosEditor";

export default async function TrechosPage(props: any) {
  const { id } = props.params;
    const carta = await getCartaComTrechos(id);
    if (!carta) return <div>Carta não encontrada</div>;

    return (<>
        <main className="container mx-auto">
            <TrechosEditor carta={carta} initialTrechos={carta.trechos} />
        </main>
    </>)
}