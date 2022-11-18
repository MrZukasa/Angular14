import { Component, OnInit } from '@angular/core';
import { interval, Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

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

  ngOnInit(): void {
    // interval(1000).subscribe(numero =>{
    //   console.log('Numero in Observable '+numero)
    // })
    //* Observable Homemade!
    // new Observable(observer => {
    //   let count = 0
    //   setInterval(()=>{
    //     observer.next(count)
    //     count++
    //   },1000)
    // }).subscribe((numero)=>{
    //   console.log('Observable homemade: '+numero)
    // })
  }
}
