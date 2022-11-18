import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  sottoscrizione: any | undefined

  constructor() { }

  ngOnDestroy(): void {
    this.sottoscrizione.unsubscribe()
  }

  ngOnInit(): void {
    this.sottoscrizione = interval(1000).subscribe(numero =>{
      console.log(numero)
    })
  }
}
