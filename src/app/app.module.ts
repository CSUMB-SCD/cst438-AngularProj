import { BrowserModule } from '@angular/platform-browser';
import {RouterModule, Router} from '@angular/router';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProdListComponent } from './prod-list/prod-list.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { SummaryComponent } from './summary/summary.component';

const appRoutes: Routes = [
 { path: 'list', component: ProdListComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ProdListComponent,
    CheckoutComponent,
    SummaryComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
