import { Trecho } from "@/domains/models/Trecho";
import { createTrecho, deleteTrecho, updateTrecho } from "@/repositories/trechosRepository";
import { trechoCreateSchema, trechoUpdateSchema } from "@/schemas/trechos-schema";
import { NextRequest } from "next/server";

export async function POST(req: Request) {
    const body = await req.json();
    console.log("Body: ", body)
    const result = trechoCreateSchema.safeParse(body);
    if (!result.success) {
        console.log(result.error.message);
        return new Response(JSON.stringify({ error: result.error.message }), { status: 400 });
    }
    const { content, cartaId, imageUrl } = result.data;
    console.log("Desestruturando objeto");
    const trecho = new Trecho();
    trecho.cartaId = cartaId;
    trecho.content = content;
    console.log("Construindo objeto modelo");
    if (imageUrl) trecho.imageUrl = imageUrl;
    console.log("Objeto construido: ", trecho);
    try {
        console.log("Salvando objeto!")
        await createTrecho(trecho);
        console.log("Objeto salvo!")
        return new Response(JSON.stringify({ message: "Trecho criado com sucesso!" }), { status: 201 });
    } catch (error) {
        return new Response(JSON.stringify({ error: "Erro ao criar trecho" }), { status: 500 });
    }

}
export async function DELETE(req: NextRequest) {
    try {
        const { searchParams } = new URL(req.url);
        const id = searchParams.get('id');
        if (!id) {
            return new Response(JSON.stringify({ error: "ID do trecho é necessário" }), { status: 400 });
        }
        await deleteTrecho(id);
        return new Response(JSON.stringify({ message: "Trecho deletado com sucesso!" }), { status: 201 });
    } catch (error) {
        return new Response(JSON.stringify({ error: "Erro ao deletar trecho" }), { status: 500 });
    }
}
export async function PUT(req: NextRequest) {
    const body = await req.json();
    const parsed = trechoUpdateSchema.safeParse(body);
    if (!parsed.success) {
        return new Response(JSON.stringify({ error: parsed.error.message }), { status: 400 });
    }
    const { cartaId, content, id, imageUrl } = parsed.data;
    const trecho = new Trecho();
    trecho.cartaId = cartaId;
    trecho.content = content;
    trecho.id = id;
    trecho.imageUrl = imageUrl;
    try {
        await updateTrecho(trecho);
        return new Response(JSON.stringify({ message: "Trecho atualizado com sucesso!" }), { status: 201 });
    } catch (error) {
        return new Response(JSON.stringify({ error: "Erro ao atualizar trecho" }), { status: 500 });
    }
}
