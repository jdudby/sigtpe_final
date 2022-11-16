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
        name: 'Rechercher un enfant',
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
        name: 'Rechercher dossier',
        url: '/searchdossier'
      },
      
      {
        name: 'Nouveau dossier',
        url: '/newcase'
      },

     
      {
        name: 'Liste des  audiences tenues',
        url: '/audiencelist'
      },
      {
        name: 'Dossiers en traitement',
        url: '/processingcaselist'
      },
      {
        name: 'Dossiers en attente',
        url: '/waitingcaselist'
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
        url: '/usersmanagement'
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
