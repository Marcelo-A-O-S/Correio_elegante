
import { ICarta } from "../interfaces/ICarta";
import { v4 as uuidv4 } from 'uuid';
export class Carta implements ICarta {
    id: string;
    title: string;
    descricao: string;
    destinatario: string;
    remetente?: string | undefined;
    token: string;
    urlQrCode: string | undefined;
    constructor(){
        this.id = "";
        this.title = ""
        this.descricao = "";
        this.destinatario = "";
        this.remetente = undefined;
        this.token = "";
        this.urlQrCode = undefined;
    }

    
    generateToken(){
        this.token = uuidv4();
    }
    generateId(){
        this.id = uuidv4();
    }

}