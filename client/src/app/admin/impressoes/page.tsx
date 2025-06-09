export const dynamic = 'force-dynamic';
import { getCartaById, getCartaComTrechos, getCartas } from "@/repositories/cartaRepository"
import QrPdfGenerator from "./qrcode-pdf";
export default async function ImpressoesPage() {
    const cartas = await getCartas();
    if (!cartas) return <div>Carta não encontrada</div>;

    return (<>
        <main className="container mx-auto">
            <QrPdfGenerator cartas={cartas} />
        </main>
    </>)
}