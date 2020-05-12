import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { runInThisContext } from 'vm';
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
    var data = {'client_id':this.login.name,
                'client_secret': this.login.senha,
                'grant_type': 'client_credentials',
                'access': 'Site'
              };
    this.loginService.doLogin(data);
  }

  evento(event: any){
    // console.log(event.target.value);
  }

}
