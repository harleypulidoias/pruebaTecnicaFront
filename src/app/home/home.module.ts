import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { DeliveryComponentsComponent } from './components/delivery-components/delivery-components.component';
import { DisplayComponentsComponent } from './components/display-components/display-components.component';
import { DeliveryDateComponentsComponent } from './components/delivery-date-components/delivery-date-components.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    DeliveryComponentsComponent,
    DisplayComponentsComponent,
    DeliveryDateComponentsComponent,
    HomeComponent
  ],
  imports: [
    HomeRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    DatePipe
  ],
  bootstrap: [HomeComponent]
})
export class HomeModule { }
