import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'app-dashboard', loadChildren: () => import('./app-dashboard/app-dashboard.module').then(m => m.AppDashboardModule)},

  { path: 'employee', loadChildren: () => import('./employee/employee.module').then(m => m.EmployeeModule)},

  { path: 'designation', loadChildren: () =>import('./designation/designation.module').then(m=> m.DesignationModule)},

  { path: 'dashboard', redirectTo:'app-dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
