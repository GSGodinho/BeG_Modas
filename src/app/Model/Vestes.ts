import {Guid} from 'Guid-typescript';

export interface Vestes
{
    id:Guid;
    tamanho:string;
    cor :string;
    valor: number;
    condicao: string;/*CONDIÇÃO DA ROUPA ALGO COMO SUJA,LAVANDO,ALUGADA OU OCUPADA*/
    variedade: string;/*MASCULINA,FEMININA,GENDERLESS OU UNISSEX*/
}