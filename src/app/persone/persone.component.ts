import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-persone',
  templateUrl: './persone.component.html',
  styleUrls: ['./persone.component.css']
})
export class PersoneComponent implements OnInit {

  persone = [
    {nome: "luca", cognome: "rossi"},
    {nome: "marco", cognome: "verdi"},
    {nome: "anna", cognome: "neri"},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
