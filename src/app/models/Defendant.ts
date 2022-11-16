import { Ville } from "./Ville";

      
      export class Defendant {
      id: Number;
      prenom: string;
      nom: string;
      sexe: string;
      datenaissance: Date;
      lieu_naissance: Ville;
      email: string;
      telephone: string;
      adresse: string;
      ville: Ville;
      environnement: string;
      nomperscontact: string; 
      telephoneperscontact: string; 
      perscontactlienaccuse:string;
      _alias: string;
      niveauetude: string;
      ageapproximatif: string;
      etatphysique: string;
      evaluationmental: string;
      estscolarise: boolean;
      esttravailleurjournalier: boolean;
      vitdanslesrues: boolean;
      vitchezsesparents: boolean;
      estencontactavecparentbiologique: boolean;
      estencontactavecparentelargi: boolean;
      estadopte: boolean;
      unparentvivant: boolean;

    constructor( ){
        this.id=0;
        this.prenom="",
        this.nom="",
        this.sexe="",
        this.datenaissance=new Date("1900-01-01");
        this.lieu_naissance=new Ville();
        this.email="";
        this.telephone="";
        this.adresse="",
        this.ville=new Ville();
        this.environnement="";
        this.nomperscontact="";
        this.telephoneperscontact="";
        this.perscontactlienaccuse=  "";
        this._alias="";
        this.niveauetude="";
        this.ageapproximatif="";
        this.etatphysique="";
        this.evaluationmental="";
        this.estscolarise=false;
        this.esttravailleurjournalier=false;
        this.vitdanslesrues=false;
        this.vitchezsesparents=false;
        this.estencontactavecparentbiologique=false;
        this.estencontactavecparentelargi=false;
        this.estadopte=false;
        this.unparentvivant=false;
    }

    
    }