import { Cinema } from "../novo-cinema/Cinema";
import { Gerente } from "../novo-gerente/Gerente";

  
export interface Sessao { 
    Id:string | any; 
    GerenteId:Gerente | any;
    CinemaId: Cinema | any;
}
