import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NavHeaderComponent } from './pages/nav-header/nav-header.component';
import { HttpClientModule } from '@angular/common/http';
import { DetailsComponent } from './pages/details/details.component';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';
import { TextInputAutocompleteModule } from 'angular-text-input-autocomplete';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { ReleventpublicationComponent } from './pages/releventpublication/releventpublication.component';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { FeaturedinfoComponent } from './pages/featuredinfo/featuredinfo.component';
import { LoginComponent } from './pages/login/login.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DpDatePickerModule} from 'ng2-date-picker';
import { ConfirmationDialogPipe } from './pages/confirmation-dialog.pipe';
import { ConfirmationDialogComponent } from './pages/confirmation-dialog/confirmation-dialog.component';
// import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
// import { JwtHelperService } from '@auth0/angular-jwt';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavHeaderComponent,
    DetailsComponent,
    AdminDashboardComponent,
    AboutusComponent,
    ReleventpublicationComponent,
    ContactusComponent,
    FeaturedinfoComponent,
    LoginComponent,
    ConfirmationDialogPipe,
    ConfirmationDialogComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DpDatePickerModule,
    AppRoutingModule,
    HttpClientModule,
    TextInputAutocompleteModule,
    FormsModule,
    // OwlDateTimeModule,
    // OwlNativeDateTimeModule,
    ToastrModule.forRoot(),
    // JwtHelperService,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
