import { prisma } from "../data/prisma";
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
export const createCarta = async ({
    descricao,
    destinatario,
    remetente,
    token,
    title
}: {
    descricao: string,
    destinatario: string,
    remetente?: string,
    token: string,
    title: string,
}) => {
    if (!baseUrl) {
        throw new Error("Variável de ambiente NEXT_PUBLIC_BASE_URL não está definida.");
    }
    const carta = await prisma.carta.create({
        data: {
            descricao,
            destinatario,
            remetente,
            token,
            title

        }
    })
    const qrCodeUrl = `${baseUrl}/carta/${carta.id}?token=${carta.token}`;


    const cartaAtualizada = await prisma.carta.update({
        where: { id: carta.id },
        data: { urlQrCode: qrCodeUrl },
    });

    return cartaAtualizada;
}
export const updateCarta = async (
    {
        descricao,
        destinatario,
        id,
        title,
        token,
        urlQrCode,
        remetente
    }: {
        descricao: string,
        destinatario: string,
        id: string,
        title: string,
        token: string,
        urlQrCode?: string,
        remetente?: string
    }) => {

    const carta = await prisma.carta.update({
        where: {
            id,
            token,
        },
        data: {
            descricao,
            destinatario,
            id,
            title,
            token,
            urlQrCode,
            remetente
        }
    })
    return carta;
}
export const getCartas = async () => {
    const cartas = await prisma.carta.findMany();
    return cartas;
}
export const getCartaById = async (id: string) => {
    const carta = await prisma.carta.findUnique({
        where: { id }
    })
    return carta;
}
export const deleteCartaById = async (id: string) => {
    await prisma.carta.delete({
        where: { id }
    });
}
export const getCartaByIdAndToken = async (id: string, token: string) => {
    const carta = await prisma.carta.findUnique({
        where: { id },
        include: {
            trechos: true
        }
    });

    if (!carta || carta.token !== token) return null;
    return carta;
};

export const getCartaComTrechos = async (id: string) => {
    const carta = await prisma.carta.findFirst({
        where: {
            id
            ,
        },
        include: {
            trechos: true
        }
    })
    return carta;
}
