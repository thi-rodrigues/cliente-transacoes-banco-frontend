import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteCreateComponent } from './views/cliente/cliente-create/cliente-create.component';
import { ClienteListComponent } from './views/cliente/cliente-list/cliente-list.component';
import { ClienteDepositoComponent } from './views/cliente/cliente-deposito/cliente-deposito.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'create',
    pathMatch: 'full'
  },
  { path: 'create',    component: ClienteCreateComponent   },
  { path: 'list',      component: ClienteListComponent     },
  { path: 'depositar/:agencia/:numeroConta', component: ClienteDepositoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
