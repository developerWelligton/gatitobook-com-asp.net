export interface Sessoes{
    id: string, 
    cinema:{
        id: number,
        nome:string,
        endereco: {
            id: number,
            logradouro:string,
            bairro:string,
            numero:string
        },
        enderecoId:string
    },
    filme:{
        id: number,
        titulo:string, 
        diretor:string,
        genero:string,
        duracao:string,
        classificacaoEtaria:string
    }, 
    filmeId: string, 
    cinemaId: string, 
    horarioDeEncerramento: string 
} 

 