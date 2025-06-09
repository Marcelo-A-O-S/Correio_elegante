import { getCartaById, getCartaComTrechos } from "@/repositories/cartaRepository"
import TrechosEditor from "./TrechosEditor";
type TrechosPageProps = {
    params: {
      id: string;
    };
  };
export default async function TrechosPage({ params }: TrechosPageProps) {
    const carta = await getCartaComTrechos(params.id);
    if (!carta) return <div>Carta não encontrada</div>;

    return (<>
        <main className="container mx-auto">
            <TrechosEditor carta={carta} initialTrechos={carta.trechos} />
        </main>
    </>)
}