import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { StorageServiceModule} from 'angular-webstorage-service';
import { AppComponent } from './app.component';
import { ProdListComponent } from './prod-list/prod-list.component';
import { ItemComponent } from './prod-list/item/item.component';
import { ListComponent } from './prod-list/list/list.component';
import { DetailsComponent } from './prod-list/details/details.component';
import { ModalComponent } from './prod-list/modal/modal.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';


const appRoutes: Routes = [
 { path: 'list', component: ProdListComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ProdListComponent,
    ItemComponent,
    ListComponent,
    DetailsComponent,
    ModalComponent,
    CartComponent,
    CheckoutComponent,
  ],
  imports: [
    BrowserModule,
    StorageServiceModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    StorageServiceModule,
    RouterModule.forRoot(
      appRoutes,
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


