import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  firstname:string;
  lastname:string;
  password:any;
  email:any;
  phoneno:number;
  
  requiredForm: FormGroup;
  constructor(private fb: FormBuilder) { 
    this.requiredForm =fb.group({
      firstname: ['', [Validators.required, Validators.pattern("[a-zA-Z][a-zA-Z ][a-zA-Z]+")]],
      lastname: ['', [Validators.required, Validators.pattern("[a-zA-Z][a-zA-Z ][a-zA-Z]+")]],
      email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
      phoneno: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      password: ['', [Validators.required, Validators.pattern('(?=.*[A-Za-z])(?=.*[0-9])(?=.*[$@$!#^~%*?&,.<>"\'\\;:\{\\\}\\\[\\\]\\\|\\\+\\\-\\\=\\\_\\\)\\\(\\\)\\\`\\\/\\\\\\]])[A-Za-z0-9\d$@].{7,}')]],
    })
  }
  get m() {
    return this.requiredForm.controls;
  }
  ngOnInit(): void {
    
  }
  regForm(){
    this.requiredForm = this.fb.group({
      firstname: ['', 
      Validators.required]
    })
  }
}
