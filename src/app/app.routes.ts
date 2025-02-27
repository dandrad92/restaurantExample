import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { MenuComponent } from './features/menu/menu.component';
import { ReservasComponent } from './features/reservas/reservas.component';
import { ContactoComponent } from './features/contacto/contacto.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'menu', component: MenuComponent },
    { path: 'reservas', component: ReservasComponent },
    { path: 'contacto', component: ContactoComponent },
  ];
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
  })
  export class AppRoutingModule {}