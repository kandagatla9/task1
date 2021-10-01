import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuardService } from './_service/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: {
      title: 'Home'
    }
  },
  {path:'dashboard', 
  component:DashboardComponent,
  
  data: {
    title: 'Dashboard'
  }
},
{
  path: 'register',
  component: RegisterComponent,
  data: {
    title: 'register'
  }
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

//canActivate: [AuthGuardService],