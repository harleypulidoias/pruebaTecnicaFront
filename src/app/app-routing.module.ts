import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/components/home/home.component';

const routes: Routes = [

  {
    path: "",
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  { path: '', redirectTo: '/', pathMatch: 'full' }, // Redirecciona a /dashboard por defecto
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
