import { Component, OnInit, AfterContentChecked, AfterContentInit, AfterViewInit, AfterViewChecked, DoCheck, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-prova',
  templateUrl: './prova.component.html',
  styleUrls: ['./prova.component.css']
})
export class ProvaComponent implements OnInit, AfterContentChecked, AfterContentInit, AfterViewInit, AfterViewChecked, DoCheck, OnDestroy {

  constructor() {
    console.log("costruttore")
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }
  ngDoCheck(): void {
    console.log('ngDoCheck');
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }

  ngOnInit(): void {
    console.log("ngOnInit")
  }
}
