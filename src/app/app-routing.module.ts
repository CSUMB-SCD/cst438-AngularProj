import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent} from './home/home.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { FinalpageComponent } from './finalpage/finalpage.component';


const routes: Routes = [
  {
  path: '',
  component: HomeComponent
},
{
  path: 'sign-in',
  component: SignInComponent
},
{
  path: 'finalpage',
  component: FinalpageComponent
},
];

@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule {}
