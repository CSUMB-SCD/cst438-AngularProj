import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CheckoutComponent } from './checkout/checkout.component';
import { SummaryComponent } from './summary/summary.component';
const routes: Routes = [
    {
        path: 'checkout',
        component: CheckoutComponent
    },
    {
        path: 'summary',
        component: SummaryComponent

    }
];

@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule {}
