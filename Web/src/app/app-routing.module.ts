import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterDynamicComponent } from './register-dynamic/register-dynamic.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'dynamics'},
  { path: 'dynamics', component: RegisterDynamicComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
