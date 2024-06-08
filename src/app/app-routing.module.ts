import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteCreateComponent } from './views/cliente/cliente-create/cliente-create.component';
import { ClienteListComponent } from './views/cliente/cliente-list/cliente-list.component';
import { ClienteDepositoComponent } from './views/cliente/cliente-deposito/cliente-deposito.component';
import { ClienteDebitoComponent } from './views/cliente/cliente-debito/cliente-debito.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  { path: 'home',    component: HomeComponent   },
  { path: 'create',    component: ClienteCreateComponent   },
  { path: 'list',      component: ClienteListComponent     },
  { path: 'depositar/:agencia/:numeroConta', component: ClienteDepositoComponent },
  { path: 'debitar/:agencia/:numeroConta',   component: ClienteDebitoComponent   },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
