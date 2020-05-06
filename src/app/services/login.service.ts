import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private headers: HttpHeaders;
  private local = "http://localhost:8080/";
  private loginURL = 'oauth';
  constructor(private http: HttpClient) { }
  doLogin(login){
    this.headers = this.getHeaders();
    return this.post("oauth", login)
      .toPromise()
      .then(
        response => {
          console.log(response);
          console.log('logou')
          // this.router.navigate(["home"]);
        },
        error => {
          console.log(error);
        }
      );
  }
  get = (URL: string, params = null): Observable<Object> => {
    return this.http.get(this.local + this.loginURL, {
      headers: this.getHeaders(),
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
}
