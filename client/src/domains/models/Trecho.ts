import { ITrecho } from "../interfaces/ITrecho";
import { v4 as uuidv4 } from 'uuid';
export class Trecho implements ITrecho{
    id: string;
    content: string;
    imageUrl?: string | undefined;
    cartaId: string;
    constructor(){
        this.id = '';
        this.content = '';
        this.cartaId = '';
    }
    generateId(){
        this.id = uuidv4();
    }
}