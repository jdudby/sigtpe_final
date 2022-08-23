import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanDeactivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from './models/User';

@Injectable({
  providedIn: 'root'
})
export class Routeguard implements CanActivate, CanActivateChild, CanDeactivate<unknown>, CanLoad {
  constructor(private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    var user:User= JSON.parse(<string>window.sessionStorage.getItem("sigtpeaccess"));
    
    if(user!=null&&user.authorized)
    {
      return true 
    }
    
     else{
      this.router.navigate(["/login"]);
      return false;
     }
  }
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      var user:User= JSON.parse(<string>window.sessionStorage.getItem("sigtpeaccess"));
      if(user!=null&&user.authorized)
      {
        return true 
      }
      
       else{
        this.router.navigate(["/login"]);
        return false;
       }
    }
   
  canDeactivate(
    component: unknown,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      var user:User= JSON.parse(<string>window.sessionStorage.getItem("sigtpeaccess")); 
      if(user!=null&&user.authorized)
      {
        return true 
      }
      
       else{
        this.router.navigate(["/login"]);
        return false;
       }
    }
  

  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      var user:User= JSON.parse(<string>window.sessionStorage.getItem("sigtpeaccess")); 
      if(user!=null&&user.authorized)
      {
        return true 
      }
      
       else{
        this.router.navigate(["/login"]);
        return false;
       }
    }
}
