import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './views/main/main.component';
import { DashboardComponent } from './views/admin/dashboard/dashboard.component';
import { AdminGuard } from './shared/guards/admin.guard';
import { HomeManagmentComponent } from './views/admin/pages/home-managment/home-managment.component';
import { CreateHomeComponent } from './views/admin/pages/create-home/create-home.component';
import { EditHomeComponent } from './views/admin/pages/edit-home/edit-home.component';
import { LoginPageComponent } from './views/admin/pages/login-page/login-page.component';
import { ContentTestsComponentsComponent } from './views/content-tests-components/content-tests-components.component';
import { HomesFilterAdvancedComponent } from './views/public/pages/homes-filter-advanced/homes-filter-advanced.component';

const routes: Routes = [
  {path:'', redirectTo:'main', pathMatch:'full'},
  {path:'main', component:MainComponent},
  {path:'login', component:LoginPageComponent},
  {path:'tests', component:ContentTestsComponentsComponent},
  {path:'avanzado', component:HomesFilterAdvancedComponent},
  {path:'avanzado/:filter', component:HomesFilterAdvancedComponent},
  {
    path:'dashboard',
    component: DashboardComponent,
    canActivate: [AdminGuard],
    children: [
      { path: 'homeManagment', component: HomeManagmentComponent },
      { path: 'createHome', component: CreateHomeComponent },
      { path: 'editHome/:id', component: EditHomeComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [MainComponent, DashboardComponent,HomeManagmentComponent,CreateHomeComponent,EditHomeComponent]
