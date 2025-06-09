import { getCartaComTrechos } from "@/repositories/cartaRepository";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params;

  const carta = await getCartaComTrechos(id);

  if (!carta) {
    return new Response(JSON.stringify({ error: 'Carta não encontrada' }), { status: 404 });
  }

  return new Response(JSON.stringify(carta), { status: 200 });
}