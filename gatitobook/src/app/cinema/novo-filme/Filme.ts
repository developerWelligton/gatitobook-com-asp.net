export interface Filme {
    id?: Int16Array | any;
    titulo?: string | undefined;
    diretor?: string| undefined;
    genero?: string| undefined;
    duracao?:DoubleRange| undefined;
    classificacaoEtaria:DoubleRange | undefined; 
    dataCriacao?:string | undefined;
    
}
