import { NextRequest, NextResponse } from "next/server";
import { cartaCreateSchema, cartaUpdateSchema } from "@/schemas/carta-schema";
import { Carta } from "@/domains/models/Carta";
import { createCarta, deleteCartaById, getCartas, updateCarta } from "@/repositories/cartaRepository";

export async function POST(req: Request) {
    const body = await req.json();
    const parsed = cartaCreateSchema.safeParse(body);
    if (!parsed.success) {
        return new Response(JSON.stringify({ error: parsed.error.message }), { status: 400 });
    }
    const { descricao, destinatario, remetente, title } = parsed.data;
    const carta = new Carta()
    carta.descricao = descricao;
    carta.destinatario = destinatario;
    carta.remetente = remetente;
    carta.title = title
    carta.generateToken();
    carta.generateId();
    try {
        await createCarta(carta);
        return new Response(JSON.stringify({ message: "Carta criada com sucesso!" }), { status: 201 });
    } catch (error) {
        return new Response(JSON.stringify({ error: "Erro ao criar carta" }), { status: 500 });
    }

}
export async function GET() {
    try {
        const cartas = await getCartas();
        return NextResponse.json(cartas);
    } catch (error) {
        return NextResponse.json({ error: "Erro ao buscar cartas" }, { status: 500 });
    }
}
export async function DELETE(req: NextRequest) {
    try {
        const { searchParams } = new URL(req.url);
        const id = searchParams.get('id');
        if (!id) {
            return new Response(JSON.stringify({ error: "ID da carta é necessário" }), { status: 400 });
        }
        await deleteCartaById(id);
        return new Response(JSON.stringify({ message: "Carta deletada com sucesso!" }), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ error: "Erro ao deletar carta" }), { status: 500 });
    }
}
export async function PUT(req: NextRequest){
    const body = await req.json();
    const parsed = cartaUpdateSchema.safeParse(body);
    if (!parsed.success) {
        return new Response(JSON.stringify({ error: parsed.error.message }), { status: 400 });
    }
    const { descricao, destinatario, remetente, title,id,token,urlQrCode } = parsed.data;
    const carta = new Carta()
    carta.id = id;
    carta.descricao = descricao;
    carta.destinatario = destinatario;
    carta.remetente = remetente;
    carta.title = title
    carta.token = token;
    carta.urlQrCode = urlQrCode;
    try {
        await updateCarta(carta);
        return new Response(JSON.stringify({ message: "Carta atualizada com sucesso!" }), { status: 201 });
    } catch (error) {
        return new Response(JSON.stringify({ error: "Erro ao atualizar carta" }), { status: 500 });
    }
}