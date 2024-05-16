import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { RegisterFormComponent } from './register-form/register-form.component';
import { DynamicFormBaseComponent } from './dynamic-form-base/dynamic-form-base.component';
import { DynamicFormComponent } from './dynamic-form-base/dynamic-form/dynamic-form.component';
import { DynamicRegisterComponent } from './dynamic-register/dynamic-register.component';
import { RegisterLocalizationComponent } from './register-localization/register-localization.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterFormComponent,
    DynamicFormBaseComponent,
    DynamicFormComponent,
    DynamicRegisterComponent,
    RegisterLocalizationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatButtonModule,
    MatCardModule,
    MatTabsModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDatepickerModule
  ],
  providers: [
    provideAnimationsAsync(),
    provideNativeDateAdapter()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
