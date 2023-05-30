import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TablasComponent } from './tablas/tablas.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { VenderComponent } from './vender/vender.component';
import { FormsModule }   from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    TablasComponent,
    CabeceraComponent,
    VenderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
