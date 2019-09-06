import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuItemComponent } from './components/menu-item/menu-item.component';
import { AppConstants } from './constants/AppConstants'; 


const routes: Routes = [ 
  {path:'menu1', component:MenuItemComponent},
  {path:'menu2', component:MenuItemComponent},
  {path:'menu3', component:MenuItemComponent},
  {path:'menu4', component:MenuItemComponent},
  {path:'menu5', component:MenuItemComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
