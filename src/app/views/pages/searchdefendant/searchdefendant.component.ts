import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import {Defendant}  from '../../../models/Defendant'
import {environment} from '../../../../environments/environment'
const RETURNING_DEFENDANT_ROUTE="/defendant/search/criteria";
@Component({
  selector: 'app-searchdefendant',
  templateUrl: './searchdefendant.component.html',
  styleUrls: ['./searchdefendant.component.scss']
})
export class SearchdefendantComponent implements OnInit {

  firstname="";
  lastname="";
  _alias="";
  datenaissance="";
  lieunaissance="";

  defendantList:Array<Defendant>=[];

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      retrieve:true
    };
  }

  addchild(){

  }
  editchild(id:Number){


  }

  gestion(id:Number){

  }
  public checkreturningchild(){
   let criterias={
    nom:"",
    prenom:"",
    lieunaissance:"",
    _alias:"",
    datenaissance:""
    }

    criterias.prenom=this.firstname;
    criterias.nom=this.lastname;
    criterias._alias=this._alias;
    criterias.lieunaissance=this.lieunaissance;
    criterias.datenaissance="2012-12-12";

this.http.post(environment.API_ADDRESS+":"+environment.API_PORT+RETURNING_DEFENDANT_ROUTE, JSON.stringify(criterias) ).subscribe({
  next:(data)=>this.defendantList=<Defendant[]> data,
  error:(e)=>console.log(e),
  complete:()=>console.log("completed !")
  })

  }

  public reset(){

  }

}
