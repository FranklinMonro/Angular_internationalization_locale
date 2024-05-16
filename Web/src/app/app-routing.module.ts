import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterDynamicComponent } from './register-dynamic/register-dynamic.component';
import { DynamicRegisterComponent } from './dynamic-register/dynamic-register.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'dynamics'},
  { path: 'register', component: RegisterDynamicComponent },
  { path: 'dynamics', component: DynamicRegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
