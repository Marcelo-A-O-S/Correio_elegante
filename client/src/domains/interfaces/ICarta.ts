

export interface ICarta {
    id: string;
    title: string;
    descricao: string;
    destinatario: string;
    urlQrCode?: string | null;
    remetente?: string | null;
    token: string;
}