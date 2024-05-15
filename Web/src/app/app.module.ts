import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { RegisterDynamicComponent } from './register-dynamic/register-dynamic.component';
import { DynamicFormBaseComponent } from './dynamic-form-base/dynamic-form-base.component';
import { DynamicFormComponent } from './dynamic-form-base/dynamic-form/dynamic-form.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterDynamicComponent,
    DynamicFormBaseComponent,
    DynamicFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
