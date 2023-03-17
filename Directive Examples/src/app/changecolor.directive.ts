import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appChangecolor]'
})
export class ChangecolorDirective {

  constructor(elem: ElementRef, renderer: Renderer2) { 

        renderer.setStyle(elem.nativeElement, 'color', 'red'); 
    
      }

}
