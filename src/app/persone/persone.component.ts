import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-persone',
  templateUrl: './persone.component.html',
  styleUrls: ['./persone.component.css']
})
export class PersoneComponent implements OnInit {

  persone = [
    {nome: "luca", cognome: "rossi", isOnline: true, color:'red'},
    {nome: "marco", cognome: "verdi", isOnline: true, color: 'green'},
    {nome: "anna", cognome: "neri", isOnline: false, color: 'orange'},
  ]

  numero = 3

  @Output() sendDataEvent = new EventEmitter<string>();
  nomignolo = 'Hood';

  constructor() { }

  ngOnInit(): void {
  }

  cliccato(){
    this.persone = [
      {nome: "Maria", cognome: "rossi", isOnline: true, color:'red'},
      {nome: "Susanna", cognome: "verdi", isOnline: true, color: 'green'},
      {nome: "Kaleb", cognome: "neri", isOnline: false, color: 'orange'},
    ]
  }

  sendData(){
    this.sendDataEvent.emit(this.nomignolo);
  }

  getColor(persona: any){
    if (persona.isOnline)
      return 'green'
     else
      return 'red'
  }
}
