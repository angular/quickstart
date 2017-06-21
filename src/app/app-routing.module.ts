import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GoldPriceComponent} from "./goldprice.component";
import {HomeComponent} from "./home.component";
import {TableAComponent} from "./table-a.component";


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'goldprice',  component: GoldPriceComponent },
  { path: 'home',  component: HomeComponent },
  { path: 'tablea', component: TableAComponent },
//  { path: 'heroes',     component: HeroesComponent }
];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
