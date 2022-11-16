import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import {Defendant}  from '../../../models/Defendant'
import {environment} from '../../../../environments/environment'
import { faCoffee, faFilePen, faEye } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { Ville } from 'src/app/models/Ville';


const RETURNING_DEFENDANT_ROUTE="/defendant/search/criteria";
@Component({
  selector: 'app-searchdefendant',
  templateUrl: './searchdefendant.component.html',
  styleUrls: ['./searchdefendant.component.scss']
})
export class SearchdefendantComponent implements OnInit {
  API_URL_VILLE=environment.API_ADDRESS+":"+environment.API_PORT+"/villes";
  faCoffee = faCoffee;
  faFilePen = faFilePen;
  faEye=faEye;

  firstname="";
  lastname="";
  _alias="";
  datenaissance="";
  lieunaissance=0;

  defendantList:Array<Defendant>=[];

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();

  villes:Ville[]= [];

  constructor(private http:HttpClient,private  _router:Router) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      retrieve:true
    };

    this.http.get(this.API_URL_VILLE,{withCredentials:true}).subscribe(
      {
        next:data=>{
          this.villes=<Ville[]>data;
        },
        error:()=>{return;},
        complete:()=>{return;}
      }
    )

  }

  addchild(){
this._router.navigate(['/adddefendant']);
  }
  editchild(id:Number){


  }

  gestion(id:Number){
    this._router.navigate(['viewchild', id]);

  }
  public checkreturningchild(){
   let criterias={
    nom:"",
    prenom:"",
    lieunaissance:0,
    _alias:"",
    datenaissance:""
    }

    criterias.prenom=this.firstname;
    criterias.nom=this.lastname;
    criterias._alias=this._alias;
    criterias.lieunaissance=this.lieunaissance;
    criterias.datenaissance=this.datenaissance;   

this.http.post(environment.API_ADDRESS+":"+environment.API_PORT+RETURNING_DEFENDANT_ROUTE, criterias, {withCredentials:true}).subscribe({
  next:(data)=> {this.defendantList=<Defendant[]> data
  },
  error:(e)=>alert(e.error.error),
  complete:()=> {
       if(this.defendantList==null)
       alert("Aucun enfant correspondant à ces critères ! ");
  }
  })

  }

  public reset(){

this._alias="";
this.firstname="";
this.lastname="";
this.lieunaissance=0;
this.datenaissance="";
  }

}
