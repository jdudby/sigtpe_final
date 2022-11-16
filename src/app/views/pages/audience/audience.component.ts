import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { Audience } from 'src/app/models/Audience';
import { Defendant } from 'src/app/models/Defendant';
import { environment } from 'src/environments/environment';
import { Casier } from 'src/app/models/Casier';
import { Dossier } from 'src/app/models/Dossier';
import { User } from 'src/app/models/User';


@Component({
  selector: 'app-audience',
  templateUrl: './audience.component.html',
  styleUrls: ['./audience.component.scss']
})
export class AudienceComponent implements OnInit {
  API_URL_AUDIENCE=environment.API_ADDRESS+":"+environment.API_PORT;
  API_URL_DEFENDANT=environment.API_ADDRESS+":"+environment.API_PORT;
audience :Audience;
newStatutDossier="";
casierList:Casier[];
dossier:Dossier;
idDossier=0;
juge=new User();
commissaire=new User();
users:User[]=[];
jugeList:User[]=[];
commissaireList:User[]=[];
audiences:Audience[]=[];

  constructor(private _router:Router, private activeroute:ActivatedRoute, private http:HttpClient) {
    this.audience=new Audience();
    this.casierList=[];
    this.dossier=new Dossier();
   }

  ngOnInit(): void {
    this.idDossier=this.activeroute.snapshot.params['idDossier'];

    this.http.get(this.API_URL_DEFENDANT+"/users", {withCredentials:true}).subscribe(
      {
        next:data=>this.users=<User[]>data,
        error:()=>{return},
        complete:()=>{
          this.users.forEach(e => {
           e.roles.forEach(r=>{
            if(r.rolename=="JUGE")
            this.jugeList.push(e);

            if(r.rolename=="COMMISSAIRE")
            this.commissaireList.push(e);

           }) 

          });
        }
      }
    )

    this.http.get(this.API_URL_DEFENDANT+"/dossier/"+this.idDossier, {withCredentials:true}).subscribe(
      {
        next:data=>this.dossier=<Dossier>data,
        error:()=>{return},
        complete:()=>{return}
      }
    )

    this.http.get(this.API_URL_DEFENDANT+"/casier/dossier/"+this.idDossier, {withCredentials:true}).subscribe(
      {
        next:data=>this.casierList=<Casier[]>data,
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

  submitdata(){
    this.audience.users.push(this.juge);
    this.audience.users.push(this.commissaire);
   this.http.post(this.API_URL_AUDIENCE+"/audience/"+this.idDossier, this.audience, {withCredentials:true}).subscribe
  (
    {
      next:data=>{
        this.refresh();
        alert("Audience enregistrée");
      },
      error:()=>{alert("Erreur à l'enregistrement de l'audience");},
      complete:()=>{return}
    }
  )
  }

  reset()
  {

  }

  refresh(){
    let currentUrl = this._router.url;
    this._router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this._router.navigate([currentUrl]);
        console.log(currentUrl);
    });
  }

}
