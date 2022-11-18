import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ContattiComponent } from './componenti/contatti/contatti.component';
import { ContattoComponent } from './componenti/contatto/contatto.component';
import { EventComponent } from './componenti/event/event.component';
import { HomeComponent } from './componenti/home/home.component';
import { NotfoundComponent } from './componenti/notfound/notfound.component';
import { PersoneComponent } from './componenti/persone/persone.component';
import { ProvaComponent } from './componenti/prova/prova.component';

const routes: Routes = [
  { path:'', component: HomeComponent },
  { path:'prova', component: ProvaComponent },
  { path:'event', component: EventComponent },
  { path:'persone', component: PersoneComponent },
  { path:'contatti', component: ContattiComponent, children: [
    { path:':id', component: ContattoComponent },
  ] },
  { path: '404', component: NotfoundComponent},
  { path: '**', redirectTo: '/404'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
