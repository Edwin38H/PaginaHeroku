import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TablasComponent } from './tablas/tablas.component';
import { VenderComponent } from './vender/vender.component';

const routes: Routes = [
  { path: 'Productos', component: TablasComponent },
  { path: 'vender', component: VenderComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }