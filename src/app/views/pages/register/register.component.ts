import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  user=new User();
  confirmedpassword="";
  API_URL=environment.API_ADDRESS+":"+environment.API_PORT;

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
      
  }

  soumettre(){
    if(this.user.email.trim().length==0 || this.user.firstname.trim().length==0
      || this.user.lastname.trim().length==0){
      alert("Préciser tous les champs requis !");
      return;

      }
      else if (this.user.password.trim().length<8)
      {
        alert("Veuiller entrer un mot de passe d'au moins 8 caractères !")
        return;
      }
      else if(this.user.password.trim().length!=this.confirmedpassword.trim().length || 
        this.user.password.trim()!=this.confirmedpassword.trim())
      alert("Les 2 mots de passe sont différents")
      else{
        this.http.post(this.API_URL+"/user", this.user, {withCredentials:true}).subscribe(
          {
            next:()=>{
              alert("Utilisateur "+this.user.lastname+" créé avec succès")
              this.resetForm();
            },
            error:()=>{alert("Impossible d'enregistrer")}
          }
        )
      }

  }

  resetForm(){
    this.user=new User();
    this.confirmedpassword=""
  }

}
