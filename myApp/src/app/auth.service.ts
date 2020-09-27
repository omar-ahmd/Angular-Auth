import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {


  private _register_Url="http://localhost:3000/api/register"
  private _login_Url="http://localhost:3000/api/login"
  constructor(private http :HttpClient, private _router:Router ) { }

  registerUser(user){
    return this.http.post<any>(this._register_Url,user)
  }

  loginUser(user){
    return this.http.post<any>(this._login_Url,user)
  }
  logoutUser() {
    localStorage.removeItem('token')
    this._router.navigate(['/events'])
  }
  getToken() {
    return localStorage.getItem('token')
  }

  loggedIn(){
    return !!localStorage.getItem('token')
  }
}
