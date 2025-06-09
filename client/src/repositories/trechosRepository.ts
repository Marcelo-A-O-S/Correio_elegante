import { prisma } from "@/data/prisma"


export const createTrecho = async ({
    cartaId,
    content,
    imageUrl,
}: {
    cartaId: string,
    content: string,
    imageUrl?: string,
}) => {
    const trecho = await prisma.trecho.create({
        data: {
            content,
            cartaId,
            imageUrl
        }
    })
    return trecho
}
export const updateTrecho = async ({
    cartaId,
    content,
    imageUrl,
    id,
}: {
    cartaId: string,
    content: string,
    imageUrl?: string,
    id: string
}) => {
    const trecho = await prisma.trecho.update({
        where: {
            id
        },
        data: {
            cartaId,
            content,
            imageUrl,
            id,

        }
    })
}
export const deleteTrecho = async(id:string)=>{
    await prisma.trecho.delete({
        where:{
            id
        }
    })
}