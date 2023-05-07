import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NaoEncontradoComponent } from './nao-encontrado/nao-encontrado.component';
import { MatSnackBarModule} from "@angular/material/snack-bar";
import { ContatoModule } from './contato/contato.module';
import { FormsModule } from '@angular/forms';

@NgModule( {
declarations: [
AppComponent,
HeaderComponent,
FooterComponent,
NaoEncontradoComponent,

],
  imports: [
     BrowserAnimationsModule,
     AppRoutingModule,
     BrowserAnimationsModule,
     MatSnackBarModule,
     ContatoModule,
     FormsModule,

      ],
      providers: [],
      bootstrap: [AppComponent]
    })
  export class AppModule { }

