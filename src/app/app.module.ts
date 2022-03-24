import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PropertyComponent } from './modules/property/property.component';
import { HeaderComponent } from './modules/property/components/header/header.component';
import { PinDetailComponent } from './modules/property/components/pin-detail/pin-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    PropertyComponent,
    HeaderComponent,
    PinDetailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
