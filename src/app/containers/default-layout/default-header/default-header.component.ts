import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { faPowerOff} from '@fortawesome/free-solid-svg-icons';
import { ClassToggleService, HeaderComponent } from '@coreui/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-default-header',
  templateUrl: './default-header.component.html',
})
export class DefaultHeaderComponent extends HeaderComponent {
  faPowerOff=faPowerOff;
  @Input() sidebarId: string = "sidebar";

  public newMessages = new Array(4)
  public newTasks = new Array(5)
  public newNotifications = new Array(5)

  constructor(private classToggler: ClassToggleService, private _router:Router) {
    super();
  }

  logout(){
    sessionStorage.removeItem("sigtpeaccess");
    this._router.navigate(["/login"]);

  }
}
