import { getCartaComTrechos } from "@/repositories/cartaRepository";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const url = new URL(request.url);
  const id = url.pathname.split("/").pop(); 
  if(!id) return new Response(JSON.stringify({ error: 'Id não informado' }), { status: 400 });
  const carta = await getCartaComTrechos(id);

  if (!carta) {
    return new Response(JSON.stringify({ error: 'Carta não encontrada' }), { status: 404 });
  }

  return new Response(JSON.stringify(carta), { status: 200 });
}