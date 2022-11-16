import { Serializer } from "@angular/compiler";
import { Data } from "@angular/router";
import { Roles } from "./Roles";

export class User {
    id: number;
    firstname: string ;
    lastname: string;
    username="";
    phone: string;
    email: string;
    password : string;
    sexe: string;
    datenaissance: string;
    roles: Roles[];
    authorized:boolean;
    accountNonExpired=true;
    accountNonLocked=true;
    credentialsNonExpired=true;
    enabled=true;


    constructor(){
    this.id=0;
    this.firstname ="";
    this.lastname = "";
    this.phone="";
    this.email= "";
    this.sexe="";
    this.datenaissance="";
    this.roles = []; 
    this.password="";
    this.authorized=false;
    
}
public addRole(role:Roles):void{
    this.roles.push(role)
}

public removeRole(roleId:number):Roles[]{
    let i=0;
    this.roles.forEach(
        
        e=>{
            if(e.id==roleId){
            this.roles.splice(i,1);
            return;
            }
            i++;
        }
    )
return this.roles;
}


}

