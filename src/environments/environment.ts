// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  API_ADDRESS:"http://localhost",
  API_PORT: "8080",
  LOGIN:"/user",
};

export const FLAG1="Mauvais format d'email";
export const FLAG2="Veuiller renseigner l'email et le mot de passe";
export const FLAG3="Tentative échouée ! Vérifier l'email ou le mot de passe";
export const FLAG4="Erreur inconnue !";
 
 
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
