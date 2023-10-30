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
import { HomePageFilterAdvancedComponent } from './views/public/pages/home-page-filter-advanced/home-page-filter-advanced.component';
import { HomeDetailComponent } from './views/admin/pages/home-detail/home-detail.component';
import { NosotrosComponent } from './views/public/pages/nosotros/nosotros.component';
import { HomesServicesComponent } from './views/public/pages/homes-services/homes-services.component';
import { AppraisalsComponent } from './views/public/pages/homes-services/sub-pages/appraisals/appraisals.component';
import { SalesAndLeaseComponent } from './views/public/pages/homes-services/sub-pages/sales-and-lease/sales-and-lease.component';
import { ProjectsComponent } from './views/public/pages/homes-services/sub-pages/projects/projects.component';
import { JuridicalConsultingComponent } from './views/public/pages/homes-services/sub-pages/juridical-consulting/juridical-consulting.component';
import { ContactComponent } from './views/public/pages/contact/contact.component';
import { AdviserComponent } from './views/admin/pages/adviser/adviser.component';

const routes: Routes = [
  {path:'', redirectTo:'main', pathMatch:'full'},
  {path:'main', component:MainComponent},
  {path:'nosotros', component:NosotrosComponent},
  {path:'servicios-inmobiliarios', component:HomesServicesComponent},
  {path:'avaluos', component:AppraisalsComponent},
  {path:'ventasyarriendos', component:SalesAndLeaseComponent},
  {path:'gerencia-y-venta-de-proyectos', component:ProjectsComponent},
  {path:'consultoria-juridica', component:JuridicalConsultingComponent},
  {path:'contacto', component:ContactComponent},
  {path:'login', component:LoginPageComponent},
  {path:'tests', component:ContentTestsComponentsComponent},
  {path:'avanzado', component:HomePageFilterAdvancedComponent},
  {path:'avanzado/:filter', component:HomePageFilterAdvancedComponent},
  {path:'detail/:id', component:HomeDetailComponent},
  {
    path:'dashboard',
    component: DashboardComponent,
    canActivate: [AdminGuard],
    children: [
      { path: 'homeManagment', component: HomeManagmentComponent },
      { path: 'createHome', component: CreateHomeComponent },
      { path: 'editHome/:id', component: EditHomeComponent },
      { path: 'agente', component: AdviserComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [MainComponent, DashboardComponent,HomeManagmentComponent,CreateHomeComponent,EditHomeComponent,HomeDetailComponent]
