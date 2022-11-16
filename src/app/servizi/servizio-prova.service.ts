import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServizioProvaService {

  persone = [
    {nome: 'Luca', cognome: 'Rossi', isOnline: true, color: 'blue'},
    {nome: 'Marco', cognome: 'Verdi', isOnline: false, color: 'red'},
    {nome: 'Anna', cognome: 'Neri', isOnline: false, color: 'yellow'},
    {nome: 'Leonardo', cognome: 'Rossqwerty', isOnline: true, color: 'green'},
    {nome: 'Pannocchia', cognome: 'babbo', isOnline: false, color: 'purple'}
  ]

  constructor() { }
}
