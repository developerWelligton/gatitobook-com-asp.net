export interface Filme {
    titulo?: string | undefined;
    diretor?: string| undefined;
    genero?: string| undefined;
    duracao?:DoubleRange| undefined;
    classificacaoEtaria:DoubleRange | undefined;
}
