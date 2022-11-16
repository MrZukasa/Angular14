import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular14';
  colore ='';
  numero = 5.324;
  oggi = Date.now()

  onReceiveData(value: string){
    console.log(value)
  }

  cambiacoloreevidenziatore(colore: string){
    this.colore = colore
  }

}
