      
      export class Defendant {
      id: Number;
      prenom: string;
      nom: string;
      sexe: string;
      datenaissance: Date;
      lieunaissance: string;
      email: string;
      telephone: string;
      adresse: string;
      ville: string;
      environnement: string;
      nomperscontact: string; 
      telephonepersontact: string; 
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

    constructor(id:Number, prenom:string, nom:string, sexe:string, datenaissance:Date,lieunaissance:string, email:string,telephone:string, 
        adresse:string, ville:string, environnement:string,nomperscontact:string,telephoneperscontact:string, _alias:string,niveauetude:string,
       ageapproximatif:string, etatphysique:string,evaluationmental:string, estscolarise:boolean, esttravailleurjournalier:boolean,
       vitdanslesrues:boolean, vitchezsesparents:boolean, estencontactavecparentbiologique:boolean, estencontactavecparentelargi:boolean,
       estadopte:boolean, unparentvivant:boolean ){
        this.id=id;
        this.prenom=prenom,
        this.nom=nom,
        this.sexe=sexe,
        this.datenaissance=datenaissance;
        this.lieunaissance=lieunaissance;
        this.email=email;
        this.telephone=telephone;
        this.adresse=adresse,
        this.ville=ville,
        this.environnement=environnement,
        this.nomperscontact=nomperscontact,
        this.telephonepersontact=telephoneperscontact;
        this._alias=_alias;
        this.niveauetude=niveauetude;
        this.ageapproximatif=ageapproximatif;
        this.etatphysique=etatphysique;
        this.evaluationmental=evaluationmental;
        this.estscolarise=estscolarise;
        this.esttravailleurjournalier=esttravailleurjournalier;
        this.vitdanslesrues=vitdanslesrues;
        this.vitchezsesparents=vitchezsesparents;
        this.estencontactavecparentbiologique=estencontactavecparentbiologique;
        this.estencontactavecparentelargi=estencontactavecparentelargi;
        this.estadopte=estadopte;
        this.unparentvivant=unparentvivant;
    }

    
    }