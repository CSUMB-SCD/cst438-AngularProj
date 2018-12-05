import { CheckoutComponent } from './checkout/checkout.component';
import { DetailsComponent } from './prod-list/details/details.component';
import { ListComponent } from './prod-list/list/list.component';
import { ProdListComponent } from './prod-list/prod-list.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [ {
  path: '',
  pathMatch: 'full',
  component: ProdListComponent
},
{
  path: 'details/:id',
  component: DetailsComponent
},
{
  path: 'checkout',
  component: CheckoutComponent
}
];

@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule {}
