import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { ChatComponent } from './chat/chat.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'register'},
  { path: 'register', component: RegisterComponent },
  { path: 'chat', component: ChatComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
