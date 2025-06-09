export const createCarta = async (carta: any) => {
    const response = await fetch('/api/carta', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(carta),
    });
    return response;
}
export const deleteCartaById = async (id: string) => {
    const response = await fetch(`/api/carta?id=${id}`, {
        method: 'DELETE'
    })
    return response;
}
export const updateCarta = async (carta: any) => {
    const response = await fetch(`/api/carta`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(carta),
    })
    return response;
}
export const getCartaComTrechosServices = async(id:string)=>{
    const response = await fetch(`/api/carta/${id}`)
    return response;
}