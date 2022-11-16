import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {  Subject } from 'rxjs';
import { MatAccordion } from '@angular/material/expansion';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import {environment} from '../../../../environments/environment';
import { Dossier } from 'src/app/models/Dossier';
import { Casier } from 'src/app/models/Casier';
import {Audience} from 'src/app/models/Audience';
import { User } from 'src/app/models/User';
import {Document} from 'src/app/models/Document';
import {saveAs} from 'file-saver';

@Component({
  selector: 'app-viewdossier',
  templateUrl: './viewdossier.component.html',
  styleUrls: ['./viewdossier.component.scss']
})
export class ViewdossierComponent implements OnInit {
  documents:Document[];
  resLoaded=false;
  idDossier:Number;
  myForm:FormGroup;
  filetoupload:File=new File([],"");
  fichierAEnvoyer: File=new File([],"");
   
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();

  API_URL_DOSSIER=environment.API_ADDRESS+":"+environment.API_PORT;
  API_URL_DEFENDANT=environment.API_ADDRESS+":"+environment.API_PORT;
  API_URL_DOCUMENT=environment.API_ADDRESS+":"+environment.API_PORT;
  casierList:Casier[];
  dossier:Dossier;
  audiences:Audience[];
  description="";
  userList:User[];
  juge:User;

  @ViewChild(MatAccordion) accordion: MatAccordion;

  constructor(private http: HttpClient, private _route: ActivatedRoute, private _router: Router, private formBuilder:FormBuilder) { 
this.accordion=new MatAccordion();
this.myForm=new FormGroup([]);
this.idDossier = this._route.snapshot.params['id'];
this.dossier=new Dossier();
this.casierList=[];
this.audiences=[];
this.userList=[];
this.juge=new User();
this.documents=[];


  }

  ngOnInit(): void {
   this.myForm=this.formBuilder.group({
docs:['']
});

this.http.get(this.API_URL_DEFENDANT+"/audience/"+this.idDossier, {withCredentials:true}).subscribe(
  {
    next:data=>this.audiences=<Audience[]>data,
    error:()=>{return},
    complete:()=>{return}
  }
)
 
this.resLoaded=false;
    this.http.get(this.API_URL_DOSSIER+"/dossier/"+this.idDossier, {withCredentials:true}).subscribe(
      {
        next:data=>{
          this.dossier=<Dossier>data;
          this.dtTrigger.next;

        },
        error:()=>alert("Impossible de charger ce dossier"),
        complete:()=>{
        this.resLoaded=true;  
        }
      }

    );

    this.resLoaded=false;
    this.http.get(this.API_URL_DEFENDANT+"/casier/dossier/"+this.idDossier, {withCredentials:true}).subscribe(
      {
        next:data=>{
          this.casierList=<Casier[]>data;
          this.dtTrigger.next;

        },
        error:()=>alert("Impossible de charger la liste des enfants impliqués"),
        complete:()=>{
          this.resLoaded=true;  
        }
      }

    );

this.http.get(this.API_URL_DOCUMENT+"/document/dossier/"+this.idDossier, { withCredentials:true}).subscribe({
  next:data=>this.documents=<Document[]>data,
  error:()=>alert("Impossible de télécharger les documents du dossier"),
  complete:()=>{return}
}
)

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      retrieve: true
    };
  }


  gestion() {

    this._router.navigate(['dossier/nouvelleaudience', this.idDossier]);

  }


  juger() {

    this._router.navigate(['dossier/rendrejugement', this.idDossier]);

  }


editChild(idprevenu:Number):void{
  this._router.navigate(["dossier/editdefendant", idprevenu]);
  
}

editCase():void{
  this._router.navigate(["dossier/updatecase", this.idDossier]);
  
}

editAudience(idaudience:Number):void{
  this._router.navigate(["dossier/updateaudience", idaudience, this.idDossier]);
  
  
}


onFileSelected(event:any) {
 
const file:File[]=event.target.files;
this.filetoupload=file[0];
console.log(file);
}

onSubmit(){
  var formData = new FormData();
  formData.set('file', this.filetoupload, this.filetoupload.name);
 
  this.resLoaded=false;  
  this.http.post(this.API_URL_DOSSIER+"/dossier/upload?idDossier="+this.idDossier+"&description="+this.description,formData,{withCredentials:true}).subscribe(
    {
   next:data=>{
alert("fichier téléchargé");
this.reloadCurrentRoute();
   },
   error:()=>{
    alert("Impossible de télécharger le fichier ! ");
  this.resLoaded=true;
  },
   complete:()=>{
    this.resLoaded=true;  
   }  
  }
   )
this.ngOnInit();
  
}

download(doc:string){
this.http.get(this.API_URL_DOCUMENT+"/file/"+doc, {responseType:'blob', withCredentials:true} ).subscribe(
  {
    next:(response:any)=>{ 
        this.saveFile(response, doc);
    },
    error:()=>{alert("Erreur lors du téléchargement")},
    complete:()=>{return;}

}
)

}

saveFile(data: any, filename?: string) {
  const blob = new Blob([data], {type: 'application/octet-stream'});
  saveAs(blob, filename);
}



reloadCurrentRoute() {
  let currentUrl = this._router.url;
  this._router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
      this._router.navigate([currentUrl]);
      console.log(currentUrl);
  });
}

assigner(){
  this._router.navigate(["dossier/assignation",  this.idDossier]);

}

}
