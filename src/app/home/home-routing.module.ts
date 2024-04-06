import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DeliveryComponentsComponent } from './components/delivery-components/delivery-components.component';
import { DeliveryDateComponentsComponent } from './components/delivery-date-components/delivery-date-components.component';

const routes: Routes = [

  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'direccionEntrega',
    component: DeliveryComponentsComponent
  },
  {
    path: 'fechaEntrega',
    component: DeliveryDateComponentsComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
