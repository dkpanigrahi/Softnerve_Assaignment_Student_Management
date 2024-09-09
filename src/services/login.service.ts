import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private url = 'http://localhost:8080/auth/login';

  constructor(private http: HttpClient) {}

  dologin(credentials: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post(this.url, credentials, { headers });
  }

  // Save token to local storage
  loginUser(token: string, username: string) {
    localStorage.setItem('token', token);
    localStorage.setItem('username', username);
    return true;
  }

  // Check if the user is logged in
  isLoggedIn(): boolean {
    let token = localStorage.getItem('token');
    if(token == undefined || token === '' || token == null){
      return false
    }else{
      return true
    }
  }

  // Logout the user
  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
  }

  // Get the stored token
  getToken(): string | null {
    return localStorage.getItem('token');
  }

  getUsername(): string | null {
    return localStorage.getItem('username');
  }
}
