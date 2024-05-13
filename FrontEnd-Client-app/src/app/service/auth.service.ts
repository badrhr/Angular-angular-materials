import {Injectable} from '@angular/core';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public users: any = {
    admin: {password: "12345", roles: ['user', 'admin']},
    user: {password: "12345", roles: ['user']}
  }
  public username: any;
  public isauthenticated: boolean = false;
  public roles: string[] = [];


  constructor(private router: Router) {
  }

  login(login: string, passsword: string): boolean {
    if (this.users[login] && this.users[login]['password'] == passsword) {
      this.username = login;
      this.isauthenticated = true;
      this.roles = this.users[login]['roles'];
      return true;
    } else {
      return false;
    }
  }

  logout() {
    this.isauthenticated = false;
    this.roles = [];
    this.username = undefined;
    this.router.navigateByUrl("/login");

  }
}
