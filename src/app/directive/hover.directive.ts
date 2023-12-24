import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {

  constructor(private element:ElementRef,private render:Renderer2) { }

  @HostListener('mouseenter') mouseenter(){
    this.render.setStyle(this.element.nativeElement,"color","red")
  }
  @HostListener('mouseleave') mouseleave(){
    this.render.setStyle(this.element.nativeElement,'color' ,"")
  }
  

}
