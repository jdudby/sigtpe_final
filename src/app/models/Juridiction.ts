import {Ville} from './Ville';
import {Dossier} from './Dossier';

export class Juridiction{
    id:0;
    juridiction: "";   
    ville:Ville[];
    dossiers: Dossier[];

    constructor(){
this.id=0;
this.juridiction="";
this.ville=[];
this.dossiers=[];

    }
}