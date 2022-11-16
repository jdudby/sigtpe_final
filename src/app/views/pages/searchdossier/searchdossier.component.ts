import { Component, OnInit } from '@angular/core';
import { Dossier } from 'src/app/models/Dossier';
import { Juridiction } from 'src/app/models/Juridiction';
import { User } from 'src/app/models/User';
import { faCoffee, faFilePen, faEye } from '@fortawesome/free-solid-svg-icons';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-dossier',
  templateUrl: './searchdossier.component.html',
  styleUrls: ['./searchdossier.component.scss']
})
export class SearchdossierComponent implements OnInit {
  numerodossier="";
  nomplaignant="";
  commissaire=new User();
  juge=new User();
  jugeList:User[];
  dossierList:Dossier[];
  commissaireList:User[];
  juridictionList:Juridiction[];
  juridiction=new Juridiction();

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();

  faCoffee = faCoffee;
  faFilePen = faFilePen;
  faEye=faEye;
  API_ADDRESS_JUGES=environment.API_ADDRESS+":"+environment.API_PORT+"/user/juges";
  API_ADDRESS_COMMISSAIRES=environment.API_ADDRESS+":"+environment.API_PORT+"/user/commissaires";
  API_ADDRESS_JURIDICTIONS=environment.API_ADDRESS+":"+environment.API_PORT+"/juridictions";
  API_ADDRESS_SEARCHDOSSIER=environment.API_ADDRESS+":"+environment.API_PORT+"/dossier/search";



  constructor(private http:HttpClient, private _router:Router) { 
    this.jugeList=[];
    this.commissaireList=[];
    this.juridictionList=[];
    this.dossierList=[];
  }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      retrieve:true
  };
this.http.get(this.API_ADDRESS_JUGES, {withCredentials:true}).subscribe(
  { 
    next:data=>{this.jugeList=<User[]>data;},
    error:()=>{return;},
    complete:()=>{return;}

  }
);

this.http.get(this.API_ADDRESS_COMMISSAIRES, {withCredentials:true}).subscribe(
  {
    next:data=>{this.commissaireList=<User[]>data;},
    error:()=>{return;},
    complete:()=>{return;}

  }
);

this.http.get(this.API_ADDRESS_JURIDICTIONS, {withCredentials:true}).subscribe(
  {
    next:data=>{this.juridictionList=<Juridiction[]>data;},
    error:()=>{return;},
    complete:()=>{return;}

  }
);

}

  checkdossier(){

   let  criterias={
      jugeId:this.juge.id,
      commissaireId:this.commissaire.id,
      numerodossier:this.numerodossier,
      nomplaignant:this.nomplaignant,
      juridictionId:this.juridiction.id
    }
    this.dossierList=[];
   this.http.post(this.API_ADDRESS_SEARCHDOSSIER,criterias,{withCredentials:true}).subscribe(
    {
      next:data=>this.dossierList=<Dossier[]>data,
      error:()=>alert("Délai expiré. Si le problème persiste, contactez l'administrateur système."),
      complete:()=>{return;}
    }
   )

  }

  reset(){
    this.commissaire.id=0;
    this.juge.id=0;
    this.juridiction.id=0;
    this.nomplaignant="";
    this.numerodossier="";

  }

  editdossier(idDossier:Number){


  }

  gestion(idDossier:Number){
    this._router.navigate(["/dossier/"+idDossier]);
  }

}
