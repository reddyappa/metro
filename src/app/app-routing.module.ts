import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { DatainfoComponent } from './datainfo/datainfo.component';
const routes: Routes = [
{path:'home', component:HomeComponent},
{path:'about', component:AboutComponent},
{path:'services', component:ServicesComponent},
{path:'datainfo', component:DatainfoComponent},
{ path: '', redirectTo: 'home', pathMatch: 'full' },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
