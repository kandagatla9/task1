import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  userlist=[
    {username:'sandeep',password:'Abcd@1234'},
    {username:'srinath',password:'Abcd@1234'}
  ]

/*
  login(username: string, password: string){
    if(username == "sandeep" && password == "sandeep") {
      localStorage.setItem('currentUser', "loggedin");
      return true;
    }
    if(username == "srinath" && password == "srinath") {
      localStorage.setItem('currentUser', "loggedin");
      return true;
    }
  }*/
  logout() {
    localStorage.removeItem('currentUser');
  }
  public get loggedIn(): boolean {
    return (localStorage.getItem('currentUser') !== null);
  }
  constructor() { }
}
