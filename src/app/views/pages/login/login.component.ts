import { Component } from '@angular/core';
import {Loginservice} from '../../../services/loginservice.service';
import {User} from '../../../models/User';
import { Router } from '@angular/router';
import  {FLAG1, FLAG2, FLAG3, FLAG4} from '../../../../environments/environment'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public user=new User();
  public email:string;
  public password:string;
  public error1:string;
  public error2:string;


  
  constructor(private auth:Loginservice, private router:Router) { 
    this.email=this.password=this.error1=this.error2="";
    
  }


  onSubmit() { 
    this.error1=this.error2="";
    this.user.email=this.email;
    this.user.password=this.password;

    var validation1=this.email.match("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")
    if(!validation1)
    {
    this.error1=FLAG1;
    return;
    }

    if(this.email=="" || this.password==""){
    this.error2=FLAG2;
    return;
    }

    this.auth.validateLoginDetails(this.user).subscribe(
      responseData => {
        this.user = <User> responseData.body;
        this.user.authorized=true;
        this.user.password="";
        window.sessionStorage.setItem("sigtpeaccess",JSON.stringify(this.user));
        this.router.navigate(['dashboard']);
      }, 
      error => {
        if (error.status==401)
        this.error2=FLAG3;
        else
        this.error2=FLAG4;
 
      });

  }


}
