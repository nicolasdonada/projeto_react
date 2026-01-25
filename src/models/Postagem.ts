import type Tema from "./Tema";
import type Usuario from "./Usuario";

export default interface Postagem{
    id: number;
    titulo: string;
    usuario?: Usuario;
    texto: string;
    data: string;
    tema?: Tema;
}