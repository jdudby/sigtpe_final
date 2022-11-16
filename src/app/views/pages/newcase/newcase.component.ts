import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/User';
import { Ville} from 'src/app/models/Ville';
import { Dossier} from 'src/app/models/Dossier';
import { Document} from 'src/app/models/Document';
import { Juridiction} from 'src/app/models/Juridiction';
import { Defendant } from 'src/app/models/Defendant';
import { environment } from 'src/environments/environment';



@Component({
  selector: 'app-newcase',
  templateUrl: './newcase.component.html',
  styleUrls: ['./newcase.component.scss']
})
export class NewcaseComponent implements OnInit {
  API_ADDRESS_JUGES=environment.API_ADDRESS+":"+environment.API_PORT+"/user/juges";
  API_ADDRESS_COMMISSAIRES=environment.API_ADDRESS+":"+environment.API_PORT+"/user/commissaires";

  dossier: Dossier=new Dossier();
  jugeList:User[];
  juridictionList:Juridiction[];
  commissaireList:User[];
  villeList:Ville[];
  commissaire=new User();
  juge=new User();
  API_URL=environment.API_ADDRESS+":"+environment.API_PORT+"/dossier";
  API_URL_JURIDICTION=environment.API_ADDRESS+":"+environment.API_PORT+"/juridictions";


    

  constructor(private _router:Router, private http : HttpClient) {
   this.jugeList=[];
   this.commissaireList=[];
   this.villeList=[];
   this.juridictionList=[];
   this.dossier.juridiction=new Juridiction();
   }



  ngOnInit(): void {
    this.http.get(this.API_URL_JURIDICTION,{ withCredentials:true}).subscribe({
      next:data=>this.juridictionList=<Juridiction[]>data,
      error:()=>alert("Impossible de télécharger la liste de juridictions"),
      complete:()=>{return;}

    }
    );

    
this.http.get(this.API_ADDRESS_JUGES, {withCredentials:true}).subscribe(
  {
    next:data=>{this.jugeList=<User[]>data;},
    error:()=>alert("impossible de técharger la liste des juges"),
    complete:()=>{return;}

  }
);

this.http.get(this.API_ADDRESS_COMMISSAIRES, {withCredentials:true}).subscribe(
  {
    next:data=>{this.commissaireList=<User[]>data;},
    error:()=>alert("impossible de técharger la liste des commissaires"),
    complete:()=>{return;}

  }
);
  }

  submitData(){
   if(this.dossier.juridiction.id==0 || this.dossier.nomplaignant.trim().length==0||this.dossier.numerodossier.trim().length==0||this.dossier.statut.trim().length==0)
   alert("Veuiller renseigner tous les champs obligatoires");
   else{
    this.dossier.resumedossier.replace('/', '-');
    this.dossier.resumedossier.replace('\\', '-');
    this.dossier.users.push(this.juge);
    this.dossier.users.push(this.commissaire);
console.log(JSON.stringify(this.dossier));
    this.http.post(this.API_URL, this.dossier, {withCredentials:true}).subscribe(
      {
        next:data=>alert("Enregistrement réussi !"),
        error:()=>alert("une erreur s'est produite ! Réessayez !"),
        complete:()=>{return;}
      }
    )
    }
  }

  reset(){
    this.dossier.defense="";
    this.dossier.dirName="";
    this.dossier.documents=[];
    this.dossier.juridiction.id=0;
    this.dossier.temoins="";
    this.dossier.nomplaignant="";
    this.dossier.numerodossier="";
    this.dossier.path="";
    this.dossier.resumedossier="";
    this.dossier.statut="";
    this.dossier.temoins="";
    this.dossier.users=[];
  }

}


