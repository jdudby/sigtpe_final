import { Serializer } from "@angular/compiler";
import { Data } from "@angular/router";
import { Roles } from "./Roles";

export class User {
    public id: number;
    public firstname: string ;
    public lastname: string;
    public phone: string;
    public email: string;
    public password : string;
    public sexe: string;
    public datenaissance: string;
    public roles: Roles[];
    public authorized:boolean;


    constructor(firstname:string, lastname:string,phone:string, email:string, password:string, sexe:string, datenaissance:string, roles:Roles[]){
    this.id=-1;
    this.firstname =firstname;
    this.lastname = lastname;
    this.phone=phone;
    this.email= email;
    this.sexe=sexe;
    this.datenaissance=datenaissance;
    this.roles = roles; 
    this.password=password;
    this.authorized=true;
    this.authorized=false;
}
public addRole(role:Roles):void{
    this.roles.push(role)
}

public removeRole(roleId:number):Roles[]{
    let i=0;
    this.roles.forEach(
        
        e=>{
            if(e.getId()==roleId){
            this.roles.splice(i,1);
            return;
            }
            i++;
        }
    )
return this.roles;
}


}

