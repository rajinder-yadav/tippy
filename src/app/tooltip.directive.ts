import {
  Directive,
  ElementRef,
  Renderer2,
  HostListener
} from '@angular/core';

@Directive({
  selector: '[appTooltip]'
})
export class TooltipDirective {

  target: any;
  state = false;

  constructor( private elementRef: ElementRef, private render: Renderer2) {
  }

  @HostListener('window:click', ['$event'])
  onWindowClick(event: MouseEvent): void {
    // console.log('2> ', this.state, event);
    if (this.state && event.target !== this.elementRef.nativeElement) {
      this.render.removeClass(this.target, 'tooltip-show');
      this.state = false;
      this.target = undefined;
    }
  }

  @HostListener('window:keyup', ['$event'])
  onKeyUp(event: KeyboardEvent): void {
    if (event.key === 'Escape' && this.target) {
      this.render.removeClass(this.target, 'tooltip-show');
      this.state = false;
      this.target = undefined;
      // console.log('3> ', this.state, event);
    }
  }

  @HostListener('click', ['$event'])
  onClick(event: any): void {
    // console.log('1> ', this.state, event);
    this.target = (<HTMLElement>event.target).children[0];
    if ( ! this.state) {
      this.render.addClass(this.target, 'tooltip-show');
    } else {
      this.render.removeClass(this.target, 'tooltip-show');
      this.target = undefined;
    }
    this.state = ! this.state;
  }

}
