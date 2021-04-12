import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { DataTableModule } from "angular-6-datatable";

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { CommanderComponent } from './components/commander/commander.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { FormRegisterComponent } from './components/form-register/form-register.component';
import { FormLoginComponent } from './components/form-login/form-login.component';
import { FormUsersComponent } from './components/form-users/form-users.component';
import { UsersComponent } from './components/users/users.component';
import { ProductsComponent } from './components/products/products.component';
import { OrdersComponent } from './components/orders/orders.component';
import { MyorderComponent } from './components/myorder/myorder.component';
import { TablesComponent } from './components/tables/tables.component';

const routes : Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full' },
  {path: 'home', component: HomeComponent },
  {path: 'commander', component: CommanderComponent },
  {path: 'aboutus', component: AboutusComponent },
  {path: 'myorder', component: MyorderComponent },  
  {path: 'users', component: UsersComponent },
  {path: 'products', component: ProductsComponent },
  {path: 'orders', component: OrdersComponent },
  {path: 'tables', component: TablesComponent },
  {path: 'register', component: FormRegisterComponent },
  {path: 'login', component: FormLoginComponent },
  {path: 'formusers', component: FormUsersComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    CommanderComponent,
    AboutusComponent,
    FormRegisterComponent,
    FormLoginComponent,
    FormUsersComponent,
    UsersComponent,
    ProductsComponent,
    OrdersComponent,
    MyorderComponent,
    TablesComponent
  ],
  imports: [
    BrowserModule,
    DataTableModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    //ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'}),
    RouterModule.forRoot(
      routes,
      {enableTracing : false}
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
