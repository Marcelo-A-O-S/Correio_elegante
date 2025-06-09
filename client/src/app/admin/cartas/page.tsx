'use client';
import { ICarta } from '@/domains/interfaces/ICarta';
import { Plus } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { cartaCreateSchema, cartaUpdateSchema } from '@/schemas/carta-schema';
import { createCarta, deleteCartaById, updateCarta } from '@/services/cartaServices';
import { MailPlus } from 'lucide-react';
import { MailX } from 'lucide-react';
import { MailOpen } from 'lucide-react';
import { Ungroup } from 'lucide-react';
import { FilePenLine } from 'lucide-react';
import { set } from 'zod';
export default function CartasPage() {
    const router = useRouter();
    const [openModal, setOpenModal] = useState(false);
    const [cartas, setCartas] = useState<ICarta[]>([]);
    const [carta, setCarta] = useState<ICarta>({
        descricao: '',
        destinatario: '',
        remetente: '',
        token: '',
        title: '',
        id: '',
    });
    useEffect(() => {
        getCartas();
    }, [])
    const cartaUpdate = (carta: ICarta) => {
        setCarta(carta);
        setOpenModal(true);
    }
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const isUpdate = carta.id && carta.id.trim() !== "";
        if (isUpdate) {
            const parsed = cartaUpdateSchema.safeParse(carta);
            if(!parsed.success){
                alert("Erro ao atualizar carta: " + parsed.error.message);
                return;
            }
            const {descricao,destinatario,id,title,token,urlQrCode,remetente} = parsed.data;
            const response = await updateCarta({descricao,destinatario,id,title,token,urlQrCode,remetente})
            if (response.ok) {
                alert("Carta atualizada com sucesso!");
                await closeModal();
                await reloadCartas();
            } else {
                const errorData = await response.json();
                alert("Erro ao atualizar carta: " + errorData.error);
            }
        } else {
            const parsed = cartaCreateSchema.safeParse(carta);
            if (!parsed.success) {
                alert("Erro ao criar carta: " + parsed.error.message);
                return;
            }
            const { descricao, destinatario, remetente, title } = parsed.data;
            const response = await createCarta({ descricao, destinatario, remetente, title })
            if (response.ok) {
                alert("Carta criada com sucesso!");
                await closeModal();
                await reloadCartas();
            } else {
                const errorData = await response.json();
                alert("Erro ao criar carta: " + errorData.error);
            }
        }
    }
    const closeModal = async () => {
        setOpenModal(false);
        setCarta({
            descricao: '',
            destinatario: '',
            remetente: '',
            token: '',
            title: '',
            id: '',
        });
    }
    const handleDelete = async (id: string) => {
        const response = await deleteCartaById(id);
        if (response.ok) {
            alert("Carta deletada com sucesso!");
            await closeModal();
            await reloadCartas();
        } else {
            const errorData = await response.json();
            alert("Erro ao deletar carta: " + errorData.error);
        }
    }
    const getCartas = async () => {
        const response = await fetch('/api/carta');
        if (!response.ok) {
            throw new Error('Erro ao buscar cartas');
        }
        const cartas = await response.json();
        console.log('Cartas recebidas:', cartas);
        setCartas(cartas);
    }
    const addTrechos = (id: string) => {
        router.push(`/admin/trechos/${id}`);
    }
    const reloadCartas = async () => {
        await getCartas()
    }
    return (
        <>
            <main className="container mx-auto">
                <dialog open={openModal}
                    className="p-0 border-0 bg-transparent">
                    <div className="fixed inset-0 flex items-center justify-center">
                        <div className='bg-blue-500 text-white p-6 rounded-lg shadow-lg max-w-md w-full'>
                            <h2 className="text-2xl font-bold">Criar Carta</h2>
                            <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-white">
                                <label>
                                    Titulo:
                                    <input type="text" value={carta.title} onChange={(e) => setCarta({ ...carta, title: e.target.value })} className="border rounded-md p-2 w-full" />
                                </label>
                                <label>
                                    Descrição:
                                    <input type="text" value={carta.descricao} onChange={(e) => setCarta({ ...carta, descricao: e.target.value })} className="border rounded-md p-2 w-full" />
                                </label>
                                <label>
                                    Destinatário:
                                    <input type="text" value={carta.destinatario} onChange={(e) => setCarta({ ...carta, destinatario: e.target.value })} className="border rounded-md p-2 w-full" />
                                </label>
                                <label>
                                    Remetente:
                                    <input type="text" value={carta.remetente ?? ""} onChange={(e) => setCarta({ ...carta, remetente: e.target.value })} className="border rounded-md p-2 w-full" />
                                </label>
                                <button type="submit" className="bg-blue-500 text-white rounded-md border-2 p-2 cursor-pointer">Criar</button>
                                <button type="button" onClick={() => closeModal()} className="bg-red-500 text-white rounded-md p-2 cursor-pointer">Cancelar</button>
                            </form>
                        </div>
                    </div>
                </dialog>
                <section className="w-full flex flex-col p-4">
                    <div className="flex flex-col items-center">
                        <h1 className="text-3xl font-bold text-center my-4">Cartas</h1>
                        <p className="text-center">Aqui você pode visualizar e gerenciar as cartas enviadas pelos usuários.</p>
                    </div>
                    <div className="flex flex-col w-full ">
                        <div className="flex w-full border-2 justify-end p-4">
                            <button onClick={() => setOpenModal(true)} className="flex border-2 rounded-md p-2 cursor-pointer gap-2">Create <MailPlus /></button>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        {cartas.map((carta) => (
                            <div key={carta.id} className="border-2 p-4 rounded-md">
                                <div className='flex justify-between p-2 items-center'>
                                    <h2 className="text-xl font-bold">{carta.title}</h2>
                                    <div className='flex gap-2'>
                                        {carta.urlQrCode ? <a href={carta.urlQrCode} target="_blank" rel="noopener noreferrer" className='flex gap-2 border-2 rounded-sm p-2 cursor-pointer'>Abrir <MailOpen /></a> : <></>}
                                        <button onClick={() => cartaUpdate(carta)} className='flex gap-2 border-2 rounded-sm p-2 cursor-pointer'>Editar <FilePenLine /></button>
                                        <button onClick={() => handleDelete(carta.id)} className='flex gap-2 border-2 rounded-sm p-2 cursor-pointer'>Deletar  <MailX /></button>
                                    </div>
                                </div>
                                <p><strong>Descrição:</strong>{carta.descricao}</p>
                                <p><strong>Destinatário:</strong>{carta.destinatario}</p>
                                <p><strong>Remetente:</strong> {carta.remetente}</p>
                                <p className='break-words'><strong>UrlQrCode: </strong> {carta.urlQrCode} </p>
                                <div className="flex justify-end border-2 p-2">
                                    <button onClick={() => addTrechos(carta.id)} className='flex cursor-pointer gap-2 border-2 rounded-sm p-2'>Adicionar trechos <Ungroup /></button>
                                </div>
                            </div>
                        ))}
                    </div>

                </section>

            </main>
        </>
    )
}