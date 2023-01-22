export interface Cinemas  {
    id: string, 
    nome:string,
    endereco: {
        id: number,
        logradouro:string,
        bairro:string,
        numero:string
    },
    gerente: {
        id: number,
        nome:string
    },
    
} 

 