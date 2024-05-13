import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {AuthService} from "../service/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{

  public loginForm!: FormGroup;
  constructor( private formBuilder : FormBuilder,
               private router:Router,
               private authService: AuthService) {
  }
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      login:this.formBuilder.control(''),
      password:this.formBuilder.control('')
    });

  }

  login() {
    let login = this.loginForm.value.login;
    let password = this.loginForm.value.password;
    let auth: boolean = this.authService.login (login, password);
    if(auth){
        this.router.navigateByUrl("/admin");
    }
  }
}
