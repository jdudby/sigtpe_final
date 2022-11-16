import { Defendant } from "./Defendant";
import { Dossier } from "./Dossier";
import { Ville } from "./Ville";

export class Casier{
    Id=0;
    defendant:Defendant;
    dossier:Dossier;
    lieudetention:Ville;
    datedetention:Date;
    dureepeine=0;
    assistancelegale="";
    faitsReproches="";

    constructor(){
        this.defendant=new Defendant();
        this.dossier=new Dossier();
        this.lieudetention=new Ville();
        this.datedetention=new Date();
    }
}