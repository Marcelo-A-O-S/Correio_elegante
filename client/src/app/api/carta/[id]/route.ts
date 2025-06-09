import { getCartaComTrechos } from "@/repositories/cartaRepository";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const url = new URL(request.url);
  const id = url.pathname.split("/").pop(); 
  if(!id) return NextResponse.json({ error: 'ID não informado' }, { status: 400 });
  const carta = await getCartaComTrechos(id);

  if (!carta) {
    return NextResponse.json({ error: 'Carta não encontrada' }, { status: 404 });
  }
  return NextResponse.json(carta,{status:200});
}