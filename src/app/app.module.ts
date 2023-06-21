import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './views/main/main.component';
import { DashboardComponent } from './views/admin/dashboard/dashboard.component';
import { MaterialModule } from './utils/material/material.module';
import { CategoriesComponent } from './views/admin/components/categories/categories.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    MainComponent,
    DashboardComponent,
    CategoriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
