'use client';
import { ICarta } from "@/domains/interfaces/ICarta"
import { ITrecho } from "@/domains/interfaces/ITrecho"
import { useEffect, useState } from "react"
import { Ungroup } from 'lucide-react';
import { useRouter } from "next/navigation";
import Image from "next/image";
import { trechoCreateSchema, trechoUpdateSchema } from "@/schemas/trechos-schema";
import { Trecho } from "@/domains/models/Trecho";
import { createTrechoServices, deleteTrechoByIdServices, updateTrecho } from "@/services/trechoServices";
import { getCartaById, getCartaComTrechos } from "@/repositories/cartaRepository";
import { SquarePen } from 'lucide-react';
import { FileX } from 'lucide-react';
import { getCartaComTrechosServices } from "@/services/cartaServices";
interface TrechoEditorProps {
    carta: ICarta,
    initialTrechos: ITrecho[],
}
export default function TrechosEditor({ carta, initialTrechos }: TrechoEditorProps) {
    const router = useRouter();
    const [openModal, setOpenModal] = useState(false);
    const [cartaCurrent, setCartaCurrent] = useState<ICarta>()
    const [trechos, setTrechos] = useState<ITrecho[]>()
    const [trecho, setTrecho] = useState<ITrecho>({
        content: '',
        id: '',
        cartaId: '',
        imageUrl: ''
    })
    useEffect(() => {
        setTrechos(initialTrechos);
        setCartaCurrent(carta)
    }, [])
    const reloadDatas = async () => {
        const response = await getCartaComTrechosServices(carta.id);
        if(response.ok){
            const carta = await response.json();
            setCartaCurrent(carta);
            setTrechos(carta.trechos);
        }
    }
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Fazendo submit...")
        if (!cartaCurrent) {
            alert("Carta está indefinida");
            return;
        }
        if (!trecho) {
            alert("Trecho está indefinido");
            return;
        }

        const isUpdate = trecho.id && trecho.id.trim() !== "";
        if (isUpdate) {
            console.log("Atualizando trecho...");
            const result = trechoUpdateSchema.safeParse(trecho);
            if (!result.success) {
                alert("Erro ao atualizar trecho: " + result.error.message);
                return;
            }
            const { content, imageUrl, cartaId,id } = result.data;
            const response = await updateTrecho({ content, imageUrl, cartaId:cartaCurrent.id,id:trecho.id })
            if(response.ok){
                const data = await response.json()
                alert(data.message);
                await closeModal()
                await reloadDatas();
            } else {
                const data = await response.json()
                alert(data.message);
            }
        } else {
            const result = trechoCreateSchema.safeParse(trecho);
            if (!result.success) {
                alert("Erro ao criar trecho: " + result.error.message);
                return;
            }
            const { content, imageUrl, cartaId } = result.data;
            console.log("Criando novo trecho...");
            // sua função de create
            const response = await createTrechoServices({ content, imageUrl, cartaId: cartaCurrent.id })
            if (response.ok) {
                const data = await response.json()
                alert(data.message);
                await closeModal()
                await reloadDatas();
            } else {
                const data = await response.json()
                alert(data.message);
            }
        }
    }
    const closeModal = async () => {
        setOpenModal(false);
        setTrecho({
            content: '',
            id: '',
            cartaId: '',
            imageUrl: undefined
        })
    }
    const handleUpdate = async (trecho: ITrecho) => {
        setTrecho(trecho);
        setOpenModal(true);
    }
    const handleDelete = async (id: string) => {
        const response = await deleteTrechoByIdServices(id);
        if (response.ok) {
            const data = await response.json()
            alert(data.message);
            await reloadDatas();
        } else {
            const data = await response.json()
            alert(data.message);
        }
    }
    return (
        <>
            <dialog open={openModal}
                className="p-0 border-0 bg-transparent">
                <div className="fixed inset-0 flex items-center justify-center">
                    <div className='bg-blue-500 text-white p-6 rounded-lg shadow-lg max-w-md w-full'>
                        <h2 className="text-2xl font-bold">Criar Carta</h2>
                        <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-white">
                            <label>
                                Mensagem:
                                <input type="text" value={trecho.content} onChange={(e) => setTrecho({ ...trecho, content: e.target.value })} className="border rounded-md p-2 w-full" />
                            </label>
                            <label>
                                Url de imagem ou gif:
                                <input type="text" value={trecho.imageUrl ?? ""} onChange={(e) => setTrecho({ ...trecho, imageUrl: e.target.value })} className="border rounded-md p-2 w-full" />
                            </label>
                            <button type="submit" className="bg-blue-500 text-white rounded-md border-2 p-2 cursor-pointer">Criar</button>
                            <button type="button" onClick={closeModal} className="bg-red-500 text-white rounded-md p-2 cursor-pointer">Cancelar</button>
                        </form>
                    </div>
                </div>
            </dialog>
            <section className=" flex flex-col w-full p-4">
                <div className="flex flex-col items-center p-4 w-full">
                    <h1 className="text-2xl font-bold mb-4">Editar trechos da carta para {carta.destinatario}</h1>
                    <div className="flex flex-col w-full ">
                        <div className="flex w-full border-2 justify-end p-4">
                            <button onClick={() => setOpenModal(true)} className="flex border-2 rounded-md p-2 cursor-pointer gap-2">Criar trecho <Ungroup /></button>
                        </div>
                        <div className="flex flex-col gap-4">
                            {trechos && trechos.length > 0 ? <>{
                                trechos.map((trecho) => (
                                    <div key={trecho.id} className="border-2 p-4 rounded-md flex flex-col justify-between items-center">
                                        <div className="flex justify-end w-full">
                                            <button onClick={() => handleUpdate(trecho)} className="flex cursor-pointer border-2 gap-2 items-center p-2 rounded-sm">
                                                Editar
                                                <SquarePen />
                                            </button>
                                            <button onClick={() => handleDelete(trecho.id)} className="flex cursor-pointer border-2 gap-2 items-center p-2 rounded-sm">Excluir<FileX /></button>
                                        </div>
                                        <div className="flex flex-col items-center">
                                            <p><strong>Conteudo:</strong>{trecho.content}</p>
                                            {trecho.imageUrl ? <Image src={trecho.imageUrl} alt={"preview image"} width="50" height={50} /> : <></>}
                                        </div>
                                    </div>
                                ))
                            }
                            </> : <></>}
                        </div>
                    </div>
                </div>


            </section>
        </>)
}