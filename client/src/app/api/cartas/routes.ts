import { getCartas } from "@/repositories/cartaRepository";
import { NextResponse } from "next/server";

export async function GET(){
    try{
            const cartas = await getCartas();
            return NextResponse.json(cartas);
        }catch(error){
            return NextResponse.json({ error: "Erro ao buscar cartas" }, { status: 500 });
        }
}