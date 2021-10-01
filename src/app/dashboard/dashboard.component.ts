import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../_service/authentication.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor(private router: Router, private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
  }
  logout(){
    this.authenticationService.logout();
    this.router.navigate(['']);
  }

}
