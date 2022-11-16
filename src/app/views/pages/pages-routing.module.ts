import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page404Component } from './page404/page404.component';
import { Page500Component } from './page500/page500.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {Routeguard} from '../../routeguard.guard';
import { DefaultLayoutComponent } from 'src/app/containers';
import { SearchdefendantComponent } from './searchdefendant/searchdefendant.component';
import { AdddefendantComponent } from './adddefendant/adddefendant.component';
import { NewcaseComponent } from './newcase/newcase.component';
import { SearchdossierComponent } from './searchdossier/searchdossier.component';
import { ViewdefendantComponent } from './viewdefendant/viewdefendant.component';
import { ViewdossierComponent } from './viewdossier/viewdossier.component';
import { AudiencelistComponent } from './audiencelist/audiencelist.component';
import { WaitingcaselistComponent } from './waitingcaselist/waitingcaselist.component';
import { ProcessingcaselistComponent } from './processingcaselist/processingcaselist.component';
import { AudienceComponent } from './audience/audience.component';
import { AssignationComponent } from './assignation/assignation.component';
import { ViewaudienceComponent } from './viewaudience/viewaudience.component';
import { UsermanagementComponent } from './usermanagement/usermanagement.component';

const routes: Routes = [
    {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Accueil'
    },
    canActivate:[Routeguard],
    children: [
      {
        path: 'audience/:id/:idDossier',
        component: ViewaudienceComponent,
        data:{
          title:'Visualiser une audience'
        },
        canActivate:[Routeguard]
       
      },
      {
        path: 'dossier/assignation/:idDossier',
        component: AssignationComponent,
        data:{
          title:'Assigner un dossier'
        },
        canActivate:[Routeguard]
       
      },
      {
        path: 'dossier/rendrejugement/:idDossier',
        component: AudienceComponent,
        data:{
          title:'Compléter un jugement'
        },
        canActivate:[Routeguard]
       
      },
      {
        path: 'dossier/nouvelleaudience/:idDossier',
        component: AudienceComponent,
        data:{
          title:'Créer une nouvelle audience'
        },
        canActivate:[Routeguard]
       
      },

      {
        path: 'processingcaselist',
        component: ProcessingcaselistComponent,
        data:{
          title:'Liste des dossiers en cours de traitement'
        },
        canActivate:[Routeguard]
       
      },
      {
        path: 'waitingcaselist',
        component: WaitingcaselistComponent,
        data:{
          title:'Liste des dossiers en attentes'
        },
        canActivate:[Routeguard]
       
      },
      {
        path: 'audiencelist',
        component: AudiencelistComponent,
        data:{
          title:'Liste des audiences déjà tenues'
        },
        canActivate:[Routeguard]
       
      },
      {
        path: 'searchdefendant',
        component: SearchdefendantComponent,
        data:{
          title:'Rechercher un enfant'
        },
        canActivate:[Routeguard]
       
      },
      {
        path: 'adddefendant',
        component: AdddefendantComponent,
        data:{
          title:'Ajouter un enfant'
        },
        canActivate:[Routeguard]
       
      },
      {
        path: 'register',
        component: RegisterComponent,
        data:{
          title:'Créer un utilisateur'
        },
        canActivate:[Routeguard]
       
      },

      {
        path: 'usersmanagement',
        component: UsermanagementComponent,
        data:{
          title:'Gestion de profil des utilisateurs'
        },
        canActivate:[Routeguard]
       
      },

      {
        path: 'newcase',
        component: NewcaseComponent,
        data:{
          title:'Ajouter un enfant'
        },
        canActivate:[Routeguard]
       
      },

      {
        path: 'searchdossier',
        component: SearchdossierComponent,
        data:{
          title:'Rechercher un dossier'
        },
        canActivate:[Routeguard]
       
      },

      {
        path: 'viewchild/:id',
        component: ViewdefendantComponent,
        data:{
          title:'Visualiser l\'histoire judiciaire d\'un enfant'
        },
        canActivate:[Routeguard]
       
      },
 
      {
        path: 'dossier/:id',
        component: ViewdossierComponent,
        data:{
          title:'Visualiser un dossier'
        },
        canActivate:[Routeguard]
       
      },
    ]
  },
  {
    path: '404',
    component: Page404Component,
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    component: Page500Component,
    data: {
      title: 'Page 500'
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Page de connexion'
    }
  }
]
;

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {
}
