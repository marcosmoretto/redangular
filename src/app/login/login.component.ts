import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public login;
  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
    this.login = {};
  }

  loginF(){
    // console.log(this.login);
    // console.log(this.login.name);
    // console.log(this.login.senha);
    this.loginService.doLogin(this.login);
  }

  evento(event: any){
    // console.log(event.target.value);
  }

}
