import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProdListComponent } from './prod-list/prod-list.component';
import { HomeComponent } from './home/home.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { FinalpageComponent } from './finalpage/finalpage.component';

const appRoutes: Routes = [
 { path: 'list', component: ProdListComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ProdListComponent,
    HomeComponent,
    SignInComponent,
    FinalpageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
