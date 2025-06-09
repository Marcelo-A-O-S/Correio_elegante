import { getCartaByIdAndToken } from "@/repositories/cartaRepository";
import { notFound } from "next/navigation";
import CartaShow from "./CartaShow";
interface CartaPageProps {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ token?: string }>;
}
export default async function CartaPage({ params, searchParams }: CartaPageProps) {
  const { id } = await params;
  const { token } = await searchParams;

  if (!token) {
    return notFound();
  }
  const carta = await getCartaByIdAndToken(id, token);
  if (!carta) return notFound();
  return (<>
    <main className="container mx-auto">
      <CartaShow cartaCurrent={carta} initialTrechos={carta.trechos} />
    </main>
  </>)
}