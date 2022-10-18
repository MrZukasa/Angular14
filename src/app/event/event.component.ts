import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})

export class EventComponent implements OnInit {

  title = "Titolo Placeholder";
  constructor() { }

  ngOnInit(): void {
  }
  onClick(e: Event){
    console.log((<HTMLInputElement>e.target).value);
    this.title=(<HTMLInputElement>e.target).value;
  }
  onClick2(e: Event){
    this.title = 'Ho cliccato!';
  }
}
