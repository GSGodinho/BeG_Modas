import {Guid} from 'guid-typescript';

export interface Vestes
{
    id:Guid;
    nome: string;
    tamanho:string;
    modelo:string;
    cor :string;
    valor: number;
    condicao: string;/*CONDIÇÃO DA ROUPA ALGO COMO SUJA,LAVANDO,ALUGADA OU OCUPADA*/
    variedade: string;/*MASCULINA,FEMININA,GENDERLESS OU UNISSEX*/
}