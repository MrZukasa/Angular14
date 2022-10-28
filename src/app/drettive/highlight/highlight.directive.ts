import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input() appHighlight = ''
  @Input() defaultColor = ''

  constructor(private element: ElementRef) {

  }

@HostListener('mouseenter') onMouseEnter(){
  this.cambiacolore(this.appHighlight || this.defaultColor)
}

@HostListener('mouseleave') onMouseLeave(){
  this.cambiacolore('transparent')
}

cambiacolore(colore: string){
  this.element.nativeElement.style.backgroundColor = colore
}

}
