import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { RegisterComponent } from './register/register.component';
import { RegisterLuxonComponent } from './register-luxon/register-luxon.component';
import { RegisterInterComponent } from './register-inter/register-inter.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { DatetimeComponent } from './datetime/datetime.component';
import { RegisterFormService } from './register/register-form.service';
import { DynamicFormControlService } from './dynamic-form/dynamic-form-control.service';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    RegisterLuxonComponent,
    RegisterInterComponent,
    DynamicFormComponent,
    DatetimeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatTabsModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    provideAnimationsAsync(),
    RegisterFormService,
    DynamicFormControlService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
