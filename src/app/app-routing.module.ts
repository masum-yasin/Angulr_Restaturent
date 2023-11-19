import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BookingComponent } from './booking/booking.component';
import { ServiceComponent } from './service/service.component';
import { ContactComponent } from './contact/contact.component';
import { MenuComponent } from './menu/menu.component';
import { CartproductDetailsComponent } from './cartproduct-details/cartproduct-details.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path:'about', component:AboutComponent},
  {path:'booking', component:BookingComponent},
  {path:'service', component:ServiceComponent},
  {path:'contact',component:ContactComponent},
  {path:'menu',component:MenuComponent},
 { path:'cartproduct',component: CartproductDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
