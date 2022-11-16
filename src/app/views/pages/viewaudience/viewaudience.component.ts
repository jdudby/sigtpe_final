import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Audience } from 'src/app/models/Audience';
import { Casier } from 'src/app/models/Casier';
import { Dossier } from 'src/app/models/Dossier';
import { User } from 'src/app/models/User';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-viewaudience',
  templateUrl: './viewaudience.component.html',
  styleUrls: ['./viewaudience.component.scss']
})
export class ViewaudienceComponent implements OnInit {
  API_URL_AUDIENCE=environment.API_ADDRESS+":"+environment.API_PORT;
  API_URL_DEFENDANT=environment.API_ADDRESS+":"+environment.API_PORT;
audience :Audience;
newStatutDossier="";
idDossier=0;
juge=new User();
commissaire=new User();
users:User[]=[];
jugeList:User[]=[];
commissaireList:User[]=[];
audiences:Audience[]=[];
audienceid=0;
  constructor(private _router:Router, private activeroute:ActivatedRoute, private http:HttpClient) {
    this.audience=new Audience();

   }

  ngOnInit(): void {
    this._router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.idDossier=this.activeroute.snapshot.params['idDossier'];
    this.audienceid=this.activeroute.snapshot.params['id'];


    this.http.get(this.API_URL_DEFENDANT+"/audience/audience/"+this.audienceid, {withCredentials:true}).subscribe(
      {
        next:data=>this.audience=<Audience>data,
        error:()=>{return},
        complete:()=>{return}
      }
    )

    this.http.get(this.API_URL_DEFENDANT+"/audience/"+this.idDossier, {withCredentials:true}).subscribe(
      {
        next:data=>this.audiences=<Audience[]>data,
        error:()=>{return},
        complete:()=>{return}
      }
    )
    

  }


  refresh(lien1:any, lien2: any){
        this._router.navigate(['audience', lien1, lien2]);
        
   }

  }