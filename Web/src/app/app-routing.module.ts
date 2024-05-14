import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { RegisterInterComponent } from './register-inter/register-inter.component';
import { RegisterLuxonComponent } from './register-luxon/register-luxon.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'register'},
  { path: 'register', component: RegisterComponent },
  { path: 'luxon', component: RegisterLuxonComponent },
  { path: 'internalization', component: RegisterInterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
