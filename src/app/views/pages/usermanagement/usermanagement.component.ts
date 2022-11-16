import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { cibNextJs } from '@coreui/icons';
import { Roles } from 'src/app/models/Roles';
import { User } from 'src/app/models/User';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-usermanagement',
  templateUrl: './usermanagement.component.html',
  styleUrls: ['./usermanagement.component.scss']
})
export class UsermanagementComponent implements OnInit {
  API_URL=environment.API_ADDRESS+":"+environment.API_PORT;
  users:User[]=[];
  user2=new User();
  role=new Roles();
  roles:Roles[]=[];
  dtOptions: DataTables.Settings = {};

  constructor(private http:HttpClient, private _router:Router) { }

  ngOnInit(): void {

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
    lengthMenu : [5, 10, 25],
      processing: true
    };

    this.http.get(this.API_URL+"/users", {withCredentials:true}).subscribe(
      {
        next:data=>this.users=<User[]>data,
        error:()=>{return},
        complete:()=>{}


      }
    )

    this.http.get(this.API_URL+"/roles", {withCredentials:true}).subscribe(
      {
        next:data=>this.roles=<Roles[]>data,
        error:()=>{return},


      }
    )
  }

  reloadCurrentRoute() {
    let currentUrl = this._router.url;
    this._router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this._router.navigate([currentUrl]);
        console.log(currentUrl);
    });
  }

  gestion(e:User){
    this._router.navigate(['theme/edituser', 'id']);
    }
  
    switchAccountStatus(e:User){
              this.http.put(this.API_URL+"/user/"+e.id, e, {withCredentials:true}).subscribe(
                {
                  next:()=>{
                    return;},
                  error:()=>{
                    alert("Mise à jour échouée !")
                  },
                                  
                }
              )
              //  this.reloadCurrentRoute();
      }

      assigner(){
        let  o:Object="";
        this.http.put(this.API_URL+"/user/"+this.user2.id+"/role/"+this.role.id,o, {withCredentials:true}).subscribe(
          {
            next:()=>alert("succès"),
            error:(e)=>alert("erreur"),
            complete:()=>{return;}
    
    
          }
        )
      }

}
