import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page404Component } from './page404/page404.component';
import { Page500Component } from './page500/page500.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {Routeguard} from '../../routeguard.guard';
import { DefaultLayoutComponent } from 'src/app/containers';
import { SearchdefendantComponent } from './searchdefendant/searchdefendant.component';

const routes: Routes = [
    {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Accueil'
    },
    children: [
      {
        path: 'searchdefendant',
        component: SearchdefendantComponent,
        data:{
          title:'Rechercher un enfant'
        },
        canActivate:[Routeguard]
       
      },

      {
        path: 'register',
        component: RegisterComponent,
        data:{
          title:'Créer un utilisateur'
        }
       
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
