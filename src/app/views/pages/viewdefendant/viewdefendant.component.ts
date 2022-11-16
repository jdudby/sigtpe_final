import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Route, Router, RouterState, RouterStateSnapshot } from '@angular/router';
import { Defendant } from 'src/app/models/Defendant';
import {environment} from '../../../../environments/environment';
import { Subject } from 'rxjs';
import { Casier } from 'src/app/models/Casier';
import { Dossier } from 'src/app/models/Dossier';


@Component({
  selector: 'app-viewdefendant',
  templateUrl: './viewdefendant.component.html',
  styleUrls: ['./viewdefendant.component.scss']
})
export class ViewdefendantComponent implements OnInit {
  API_URL_DEFENDANT=environment.API_ADDRESS+":"+environment.API_PORT+"/defendant";
  API_URL_DOSSIER=environment.API_ADDRESS+":"+environment.API_PORT+"/dossier";
  API_URL_CASIER=environment.API_ADDRESS+":"+environment.API_PORT+"/casier";


  dossier=new Dossier();
  casier=new Casier();

  child : Defendant;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  casierList:Casier[];
  numerodossier_defendant="";

  constructor(private http:HttpClient, private _router:Router, private rr:ActivatedRoute) {
    this.child=new Defendant();
    this.casierList=[];
   }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      retrieve:true
    };


const id=this.rr.snapshot.params['id'];
  this.http.get(this.API_URL_DEFENDANT+"/"+id, {withCredentials:true}).subscribe(
{
  next:data=>this.child=<Defendant>data,
  error:()=>alert("Impossible de charger les informations pour cet enfant"),
  complete:()=>{return}
}

  )

  this.http.get(this.API_URL_CASIER+"/defendant/"+id, {withCredentials:true}).subscribe(
    {
      next:data=>{
        this.casierList=<Casier[]>data;

      },
      error:(e)=>{
         },
      complete:()=>{
        
      }
    }
  )


  }

  voirDossier(id:Number){

  }

  ajouterDossier(){
if(this.numerodossier_defendant.trim().length==0)
alert("Veuiller renseigner un numéro de dossier");
else{

  this.http.post(this.API_URL_DOSSIER+"/searchdossier/"+this.numerodossier_defendant.trim(),{}, {withCredentials:true}).subscribe(
    {
      next:data=>{
        this.dossier=<Dossier>data; 
             },
      error:()=>alert("Ce dossier n'existe pas !"),
      complete:()=>{
          this.casier=new Casier();
          this.casier.dossier =this.dossier;
          this.casier.defendant.id=this.child.id;
        this.http.post(this.API_URL_CASIER, this.casier, {withCredentials:true}).subscribe({
          next:data=>{alert(this.child.prenom+" "+this.child.nom+" a été attaché au dossier "+this.numerodossier_defendant)},
          error:()=>{alert("Impossible d'attacher "+this.child.prenom+" "+this.child.nom+" au dossier "+this.numerodossier_defendant);},
          complete:()=>{
            this.dossier.id=0;
          }
           }
           )


      }
    }
  )
 
  }
}


}


