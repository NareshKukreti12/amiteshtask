import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';
import { DetailsComponent } from './pages/details/details.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { ReleventpublicationComponent } from './pages/releventpublication/releventpublication.component'
import { FeaturedinfoComponent } from './pages/featuredinfo/featuredinfo.component'
import { LoginComponent } from './pages/login/login.component'

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'details', component: DetailsComponent },
  { path: 'admin-dashboard', component: AdminDashboardComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'contactus', component: ContactusComponent },
  { path: 'featuredinfo', component: FeaturedinfoComponent },
  { path: 'releventpublication', component: ReleventpublicationComponent },
  { path: 'login', component: LoginComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
