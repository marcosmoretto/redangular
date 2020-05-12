import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private headers: HttpHeaders;
  private local = "http://localhost:8080/";
  private loginURL = 'oauth';
  private access_token: string = null;
  constructor(private http: HttpClient, private router: Router) { }
  doLogin(login){
    // this.headers = this.getHeaders();
    return this.post("oauth", login)
      .toPromise()
      .then(
        response => {
          //rotina de acesso ao sistema
          console.log(response);
          console.log('logou');
          this.access_token = response['access_token'];
          this.setToken(response['access_token']);
          // this.router.navigate(["home"]);
        },
        error => {
          //rotina de aviso de credenciais inválidas
          console.log('error');
          console.log(error);
        }
      );
  }
  get = (URL: string, params = null): Observable<Object> => {
    this.headers = this.getHeaders();
    this.headers.append("Authorization", `Bearer ${this.getToken()}`);
    return this.http.get(this.local + this.loginURL, {
      headers: this.headers,
      params
    });
  };

  post = (URL: string, data: any): Observable<Object> => {
    return this.http.post(this.local + this.loginURL, data, { headers: this.getHeaders() });
  };

  delete = (URL: string): Observable<Object> => {
    return this.http.delete(this.local + this.loginURL, { headers: this.getHeaders() });
  };

  patch = (URL: string, data: any): Observable<Object> => {
    return this.http.patch(this.local + this.loginURL, data, {
      headers: this.getHeaders()
    });
  };

  put = (URL: string, data: any): Observable<Object> => {
    return this.http.put(this.local + this.loginURL, data, { headers: this.getHeaders() });
  };
  getHeaders() {
    return (this.headers = new HttpHeaders()
      .set("Content-Type", "application/json")
      .set("Accept", "application/json")
      // .append("Authorization", `Bearer ${this.getToken()}`)
      );
  }

  setToken(token) {
    localStorage.setItem("token", token);
  }

  getToken() {
    if (!localStorage.getItem("token")) {
      this.redirectLogin();
    }
    return this.access_token
      ? this.access_token
      : localStorage.getItem("token");
  }

  redirectLogin(){
    if(this.router.url == '/') return;
    window.location.href = 'localhost:4200'
  }

}
