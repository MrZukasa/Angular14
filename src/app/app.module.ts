import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProvaComponent } from './componenti/prova/prova.component';
import { EventComponent } from './componenti/event/event.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { MatSliderModule } from '@angular/material/slider';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { PersoneComponent } from './componenti/persone/persone.component';
import { ChildComponent } from './componenti/child/child.component';
import { HighlightDirective } from './drettive/highlight/highlight.directive';
import { ServizioProvaService } from './servizi/servizio-prova.service';
import { ContattiComponent } from './componenti/contatti/contatti.component';
import { ContattoComponent } from './componenti/contatto/contatto.component';
import { NotfoundComponent } from './componenti/notfound/notfound.component';
import { HomeComponent } from './componenti/home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'


@NgModule({
  declarations: [
    AppComponent,
    ProvaComponent,
    EventComponent,
    PersoneComponent,
    ChildComponent,
    HighlightDirective,
    ContattiComponent,
    ContattoComponent,
    NotfoundComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [ServizioProvaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
