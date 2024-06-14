import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { NgxMaskModule } from 'ngx-mask';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClienteCreateComponent } from './views/cliente/cliente-create/cliente-create.component';
import { ClienteListComponent } from './views/cliente/cliente-list/cliente-list.component';
import { ClienteDepositoComponent } from './views/cliente/cliente-deposito/cliente-deposito.component';

import { ModalVisualizarComponent } from './components/modal/modal-visualizar/modal-visualizar.component';

import { CurrencyMaskModule } from "ng2-currency-mask";
import { ClienteDebitoComponent } from './views/cliente/cliente-debito/cliente-debito.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { ClienteExtratoComponent } from './views/cliente/cliente-extrato/cliente-extrato.component';

@NgModule({
  declarations: [
    AppComponent,
    ClienteCreateComponent,
    ClienteListComponent,
    ClienteDepositoComponent,
    ModalVisualizarComponent,
    ClienteDebitoComponent,
    HomeComponent,
    HeaderComponent,
    NavComponent,
    ClienteExtratoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    RouterLink,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(),
    NgbModule,
    NgbAlertModule,
    CurrencyMaskModule,
  ],
  providers: [RouterLink],
  bootstrap: [AppComponent]
})
export class AppModule { }
