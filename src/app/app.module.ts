import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProvaComponent } from './prova/prova.component';
import { EventComponent } from './event/event.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { MatSliderModule } from '@angular/material/slider';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { PersoneComponent } from './persone/persone.component';
import { ChildComponent } from './child/child.component';
import { HighlightDirective } from './drettive/highlight/highlight.directive';
import { ServizioProvaService } from './servizi/servizio-prova.service';


@NgModule({
  declarations: [
    AppComponent,
    ProvaComponent,
    EventComponent,
    PersoneComponent,
    ChildComponent,
    HighlightDirective
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
  ],
  providers: [ServizioProvaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
