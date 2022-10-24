import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-persone',
  templateUrl: './persone.component.html',
  styleUrls: ['./persone.component.css']
})
export class PersoneComponent implements OnInit, OnChanges {

  persone = [
    {nome: "luca", cognome: "rossi", isOnline: true, color:'red'},
    {nome: "marco", cognome: "verdi", isOnline: true, color: 'green'},
    {nome: "anna", cognome: "neri", isOnline: false, color: 'orange'},
  ]

  numero = 3

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
  }

  cliccato(){
    this.persone = [
      {nome: "Maria", cognome: "rossi", isOnline: true, color:'red'},
      {nome: "Susanna", cognome: "verdi", isOnline: true, color: 'green'},
      {nome: "Kaleb", cognome: "neri", isOnline: false, color: 'orange'},
    ]
  }

  getColor(persona: any){
    if (persona.isOnline)
      return 'green'
     else
      return 'red'
  }
}
