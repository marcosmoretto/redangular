import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public login;
  constructor() { }

  ngOnInit(): void {
    this.login = {};
  }

  loginF(){
    console.log(this.login);
    console.log(this.login.name);
    console.log(this.login.senha);
  }

  evento(event: any){
    console.log(event.target.value);
  }

}
