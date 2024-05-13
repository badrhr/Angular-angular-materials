import { Component } from '@angular/core';
import {AuthService} from "../service/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-admin-template',
  templateUrl: './admin-template.component.html',
  styleUrl: './admin-template.component.css'
})
export class AdminTemplateComponent {

  constructor(public authService: AuthService,
              private router: Router) {
  }

  logout() {
    this.authService.logout();
  }

  addClient() {
    this.router.navigateByUrl("/admin/addClient");
  }
}
