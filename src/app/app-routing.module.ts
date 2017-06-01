import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GoldPriceComponent} from "./goldprice.component";


const routes: Routes = [
  { path: '', redirectTo: '/goldprice', pathMatch: 'full' },
  { path: 'goldprice',  component: GoldPriceComponent }//,
//  { path: 'detail/:id', component: HeroDetailComponent },
//  { path: 'heroes',     component: HeroesComponent }
];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
