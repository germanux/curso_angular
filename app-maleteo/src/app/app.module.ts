import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { RegistroComponent } from './registro/registro.component';
import { ListadoComponent } from './listado/listado.component';

const appRoutes: Routes = [
  { path: 'registro', component: RegistroComponent},
  { path: 'listado', component: ListadoComponent},
  { path: '', redirectTo: "/registro", pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent,
    ListadoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot( appRoutes, {enableTracing: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
