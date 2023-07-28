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
import { LoginComponent } from './views/admin/components/login/login.component';
import { LoginPageComponent } from './views/admin/pages/login-page/login-page.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { HttpClientModule } from '@angular/common/http';
import { HomeInfoComponent } from './views/admin/components/home/home-info/home-info.component';
import { HomeFavoritesComponent } from './views/components/home-favorites/home-favorites.component';
import { HomeFilterBasicComponent } from './views/components/home-filter-basic/home-filter-basic.component';
import { HomeAllComponent } from './views/components/home-all/home-all.component';
import { FavoriteComponent } from './views/components/home-favorites/favorite/favorite.component';
import { ContentTestsComponentsComponent } from './views/content-tests-components/content-tests-components.component';
import { FilterComponent } from './views/components/filter/filter.component';
import { MenuSecondaryComponent } from './views/components/menu-secondary/menu-secondary.component';
import { HomePageFilterBasicComponent } from './views/public/pages/home-page-filter-basic/home-page-filter-basic.component';
import { HomePageFilterAdvancedComponent } from './views/public/pages/home-page-filter-advanced/home-page-filter-advanced.component';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    CategoriesComponent,
    NavDashboardComponent,
    LoginPageComponent,
    LoginComponent,
    EditHomeComponent,
    CreateHomeComponent,
    HomeManagmentComponent,
    HomeInfoComponent,
    HomeFavoritesComponent,
    HomeFilterBasicComponent,
    HomeAllComponent,
    FavoriteComponent,
    ContentTestsComponentsComponent,
    FilterComponent,
    MenuSecondaryComponent,
    HomePageFilterBasicComponent,
    HomePageFilterAdvancedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    NgxSpinnerModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
