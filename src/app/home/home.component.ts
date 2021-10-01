import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../_service/authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  username: string;
  password: string;

  constructor(private _auth: AuthenticationService, private _router: Router) {
    if (this._auth.userlist) {
      this._router.navigate(['']);
    }
  }

  //find,filter,findIndex etc
//let const 
  login() {
  const  data= this._auth.userlist.find(c => c.username == this.username && c.password == this.password);
  if(data){
    this._router.navigate([""])
  }else{
    alert("Wrong username or password")
  }
  }

  //  login(): void {
  //    if(this.username != '' && this.password != ''){
  //      if(this._auth.login(this.username, this.password)){
  //        this._router.navigate(["dashboard"])
  //      }
  //      else
  //      alert("Wrong username or password")
  //    }
  //  }

  ngOnInit(): void {
  }

  //fname,last ,middle,email,phone,password ,dateofbieth,address,country,state,city

  //registration
}
