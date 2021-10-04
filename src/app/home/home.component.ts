import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
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
  email:any;

  requiredForm: FormGroup;
  constructor(private fb: FormBuilder,
    private _auth: AuthenticationService, private _router: Router) {
    this.requiredForm = fb.group({
      email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
      password: ['', [Validators.required, Validators.pattern('(?=.*[A-Za-z])(?=.*[0-9])(?=.*[$@$!#^~%*?&,.<>"\'\\;:\{\\\}\\\[\\\]\\\|\\\+\\\-\\\=\\\_\\\)\\\(\\\)\\\`\\\/\\\\\\]])[A-Za-z0-9\d$@].{7,}')]],
    })
  }

  get m() {
    return this.requiredForm.controls;
  }
  //find,filter,findIndex etc
//let const 
  login() {
  const  data= this._auth.userlist.find(c => c.username == this.email && c.password == this.password);
  if(data){
    this._router.navigate(["/dashboard"])
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
