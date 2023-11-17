import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './layout/principal/principal.component';
import { CotizacionComponent } from './layout/cotizacion/cotizacion.component';
import { SegurosComponent } from './layout/seguros/seguros.component';
import { NavbarComponent } from './components/navbar/navbar.component'
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { StepBoxComponent } from './components/step-box/step-box.component';
import { StringSinUnderscorePipe } from './pipes/string-sin-underscore.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    CotizacionComponent,
    SegurosComponent,
    NavbarComponent,
    StepBoxComponent,
    StringSinUnderscorePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
