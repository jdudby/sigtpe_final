export class Roles{
private id:number;
private rolename: string;
private description:string;

constructor(rolename:string, description:string){
this.id=-1;
this.rolename=rolename;
this.description=description;
}

public getId():number{
    return this.id;
}

public setId(id:number):void{
    this.id=id;
}

public getRolename():string {
return this.rolename;
}

public setRolename(rolename:string):void{
    this.rolename=rolename;
}

public getDescription():string {
    return this.description;
    }
    
public setDescription(description:string):void{
    this.description=description;
    }


}