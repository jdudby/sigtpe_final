import { Route } from '@angular/router';
import { environment } from 'src/environments/environment';
import {Dossier} from '../../../src/app/models/Dossier';
import { User } from './User';

export class Audience{
id=0;
users:User[];
personneAuditionnee="";
lienAvecAccuse="";
assistanceLegale="";
temoins="";
tuteurLegal="";
chargesRetenues="";
decision="";
dommageInterets=false;
montantDommages=0;
emprisonnement=false;
dureeEmprisonnement=0;
interjetionAppel=false;
prochaineEtape="";
dateProchaineEtape=new Date();

constructor(){
this.users=[];
}



};