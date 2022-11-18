import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ServizioProvaService } from 'src/app/servizi/servizio-prova.service';

@Component({
  selector: 'app-contatto',
  templateUrl: './contatto.component.html',
  styleUrls: ['./contatto.component.css']
})
export class ContattoComponent implements OnInit {
  id: number | undefined
  persona: any

  constructor(private route: ActivatedRoute, private servzioProva: ServizioProvaService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) =>{
      this.id= +params.get('id')!
      this.persona = this.servzioProva.getPersona(this.id)
    })
  }
}
