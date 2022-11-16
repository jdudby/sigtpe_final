import { HttpClient } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Defendant } from 'src/app/models/Defendant';
import {environment} from '../../../../environments/environment';
import {Ville} from '../../../models/Ville';

@Component({
  selector: 'app-adddefendant',
  templateUrl: './adddefendant.component.html',
  styleUrls: ['./adddefendant.component.scss']
})
export class AdddefendantComponent implements OnInit {
  API_URL=environment.API_ADDRESS+":"+environment.API_PORT+"/defendant";
  API_URL_VILLE=environment.API_ADDRESS+":"+environment.API_PORT+"/villes";
  error=false;
  datenaissance="";
  userData:Defendant = {
    id: 0,
    prenom: "",
    nom: "",
    sexe: "",
    datenaissance: new Date("1900-01-01"),
    lieu_naissance:{
      id:0,
      ville:"",
      arrondissement:""
    },
    email: "",
    telephone: "",
    adresse: "",
    ville: {
      id:0,
      ville:"",
      arrondissement:""
    },
    environnement: "",
    nomperscontact: "", 
    telephoneperscontact: "",
    perscontactlienaccuse:"",
    _alias: "",
    niveauetude: "",
    ageapproximatif: "",
    etatphysique: "",
    evaluationmental: "",
    estscolarise: false,
    esttravailleurjournalier: false,
    vitdanslesrues: false,
    vitchezsesparents: false,
    estencontactavecparentbiologique: false,
    estencontactavecparentelargi: false,
    estadopte: false,
    unparentvivant: false
  }

  villes:Ville[]= [];

  constructor(private http:HttpClient, private _router: Router) {

  }

  ngOnInit(): void {
    this.http.get(this.API_URL_VILLE,{withCredentials:true}).subscribe(
      {
        next:data=>{
          this.villes=<Ville[]>data;
        },
        error:()=>alert("Impossible de télécharger la liste de villes"),
        complete:()=>{return;}
      }
    )
  }


  submitdata() {
    if (this.userData.prenom == "")
      this.error = true;
    if (this.userData.nom == "")
      this.error = true;
    if (this.userData.sexe == "")
      this.error = true;

      if(this.datenaissance!="")
      {
        this.userData.datenaissance=new Date(this.datenaissance);

      }
      else
      this.userData.datenaissance=new Date("1900-01-02");
 
      if (this.error == true) {
      alert("Veuiller vérifier que les informations telles que Nom, Prénom ou sexe soient remplies !");
      this.error=false;
    }

    else{
      

   
      this.userData.datenaissance.setDate(this.userData.datenaissance.getDate()+1);
      this.http.post(this.API_URL, this.userData, {withCredentials:true}).subscribe(
        {
            next:()=>alert("Enfant enregistré avec succès"),
            error:()=>alert("Enregistrement échoué. Prière de revérifier les données"),
            complete:()=>{return;}

        }
      );
    
      }
  }

  reset() {
    this.userData.lieu_naissance.id= 0;
    this.userData.datenaissance = new Date();
    this.userData.prenom = "";
    this.userData.environnement = "";
    this.userData.nom= "";
    this.userData.telephoneperscontact="";
    this.userData=new Defendant();
  }

  gestionstatutparental() {

    

}

}
