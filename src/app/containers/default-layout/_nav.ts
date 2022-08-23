import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Tableau de bord',
    url: '/dashboard',
    iconComponent: { name: 'cil-speedometer' },
    badge: {
      color: 'info',
      text: ''
    }
  },
  {
    title: true,
    name: 'Gestion des mineurs'
  },
  {
    name :'Récidivisme',
    children: [
      
      {
        name: 'Vérifier',
        url: "/searchdefendant",
      },
    ]
  },
  
  {
    name: 'Gestions des Dossiers',
    title: true
  },
  {
    name: 'Manipuler dossiers',
    iconComponent: { name: 'cil-puzzle' },
    children: [
      
      {
        name: 'Nouveau dossier',
        url: '/base/collapse'
      },
      {
        name: 'Consultation dossier',
        url: '/base/list-group'
      },
      {
        name: 'Consultation dossier',
        url: '/base/spinners'
      },
      {
        name: 'Nouvelle audience',
        url: '/base/tables'
      },
      {
        name: 'Dossiers en traitement',
        url: '/base/tabs'
      },
      {
        name: 'Dossiers en attente',
        url: '/base/tooltips'
      }
    ]
  },
 
 
  {
    title: true,
    name: 'Système'
  },
  {
    name: 'Utilisateurs',
     iconComponent: { name: 'cil-star' },
    children: [
      {
        name: 'Créer un utilisateur',
        url: '/register'
      },
      {
        name: 'Gestion des utilisateurs',
        url: '/register'
      }
    ]
  },

  {
    name: 'Droits, rôles et groupes',
     iconComponent: { name: 'cil-star' },
    children: [
      {
        name: 'Créer un droit',
        url: '/login'
      },
      {
        name: 'créer un rôle',
        url: '/register'
      },
      {
        name: 'créer un groupe',
        url: '/register'
      }
    ]
  },
];
