export const createTrechoServices = async(trecho:any)=>{
    const response = await fetch('/api/trecho',{
        method:'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(trecho),
    })
    return response;
}
export const deleteTrechoByIdServices = async(id:string)=>{
    const response = await fetch(`/api/trecho?id=${id}`, {
        method: 'DELETE'
    })
    return response;
}
export const updateTrecho = async(trecho:any)=>{
    const response = await fetch(`/api/trecho`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(trecho),
    })
    return response;
}
