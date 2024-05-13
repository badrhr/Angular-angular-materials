import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ProfileComponent} from "./profile/profile.component";
import {LoginComponent} from "./login/login.component";
import {ClientsComponent} from "./clients/clients.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {ManageComponent} from "./manage/manage.component";
import {AddClientComponent} from "./add-client/add-client.component";
import {AdminTemplateComponent} from "./admin-template/admin-template.component";
import {AuthGuard} from "./guards/auth.guard";

const routes: Routes = [
  {path: "", component: LoginComponent},
  {path: "login", component: LoginComponent},
  {
    path: "admin", component: AdminTemplateComponent,
    canActivate: [AuthGuard],
    children: [

      {path: "home", component: HomeComponent},
      {path: "profile", component: ProfileComponent},
      {path: "clients", component: ClientsComponent},
      {path: "dashboard", component: DashboardComponent},
      {path: "manage", component: ManageComponent},
      // { path: '', redirectTo: '/login', pathMatch: 'full'},
      {path: "addClient", component: AddClientComponent}
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
