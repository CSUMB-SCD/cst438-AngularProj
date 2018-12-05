import { CheckoutComponent } from './checkout/checkout.component';
import { DetailsComponent } from './prod-list/details/details.component';
import { ListComponent } from './prod-list/list/list.component';
import { ProdListComponent } from './prod-list/prod-list.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent} from './home/home.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { FinalpageComponent } from './finalpage/finalpage.component';

const routes: Routes = [ {
  path: '',
  pathMatch: 'full',
  component: HomeComponent
},
{
path: 'shop',
component: ProdListComponent
},
{
  path: 'details/:id',
  component: DetailsComponent
},
{
  path: 'checkout',
  component: CheckoutComponent
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
