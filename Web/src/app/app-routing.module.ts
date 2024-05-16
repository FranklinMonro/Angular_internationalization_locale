import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterFormComponent } from './register-form/register-form.component';
import { DynamicRegisterComponent } from './dynamic-register/dynamic-register.component';
import { RegisterLocalizationComponent } from './register-localization/register-localization.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'dynamics'},
  { path: 'register', component: RegisterFormComponent },
  { path: 'dynamics', component: DynamicRegisterComponent },
  { path: 'localization', component: RegisterLocalizationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
