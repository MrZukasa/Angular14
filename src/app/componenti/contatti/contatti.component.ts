import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServizioProvaService } from 'src/app/servizi/servizio-prova.service';

@Component({
  selector: 'app-contatti',
  templateUrl: './contatti.component.html',
  styleUrls: ['./contatti.component.css']
})
export class ContattiComponent implements OnInit {
  persone: any
  isProfile: boolean | undefined
  constructor(private servizioProva: ServizioProvaService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.persone = this.servizioProva.getPersone()
    // this.isProfile = !this.route.snapshot.paramMap.get('id') ? false : true
    // console.log('ID selezionato: '+ this.isProfile +' '+ this.route.snapshot.paramMap.get('id'))
    // if(this.route.snapshot.paramMap.get('id')){
    //   this.persone = this.servizioProva.getPersona(parseInt(this.route.snapshot.paramMap.get('id')!))
    // }
  }
}
