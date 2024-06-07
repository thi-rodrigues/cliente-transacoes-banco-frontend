import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

// import { NgxMaskModule } from 'ngx-mask';

// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClienteCreateComponent } from './views/cliente/cliente-create/cliente-create.component';

@NgModule({
  declarations: [
    AppComponent,
    ClienteCreateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    RouterLink,
    ReactiveFormsModule,
    // NgxMaskModule.forRoot(),
    // NgbModule,
    // NgbAlertModule,
  ],
  providers: [RouterLink],
  bootstrap: [AppComponent]
})
export class AppModule { }
