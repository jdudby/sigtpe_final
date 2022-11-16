import { Juridiction } from "./Juridiction";
import { User } from "./User";
import { Document } from "./Document";

export class Dossier{
    "id": 0;
    "numerodossier": "";
    "temoins":"";
    "resumedossier": "";
    "path": "";
    "dirName": "";
    "statut": "";
    "juridiction": Juridiction;
    "nomplaignant":"";
    "defense":"";
    "users":User[];
    documents:Document[];
    
    constructor(){
        this.documents=[];
        this.users=[];
       
    }
    
  };