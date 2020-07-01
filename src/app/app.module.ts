import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SelectorNoticiasComponent } from './noticias/selector-noticias/selector-noticias.component';
import { SelectorHerramientasComponent } from './herramientas/selector-herramientas/selector-herramientas.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SelectorNoticiasComponent,
    SelectorHerramientasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
