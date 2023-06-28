import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './utils/material/material.module';
import { CategoriesComponent } from './views/admin/components/categories/categories.component';
import { NavDashboardComponent } from './views/admin/dashboard/components/nav-dashboard/nav-dashboard.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeManagmentComponent } from './views/admin/pages/home-managment/home-managment.component';
import { FormsModule } from '@angular/forms';
import { CreateHomeComponent } from './views/admin/pages/create-home/create-home.component';
import { EditHomeComponent } from './views/admin/pages/edit-home/edit-home.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    CategoriesComponent,
    NavDashboardComponent,
    HomeManagmentComponent,
    CreateHomeComponent,
    EditHomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
