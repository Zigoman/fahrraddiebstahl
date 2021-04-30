import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[fahBikeImage]'
})
export class BikeImageDirective {
  @Input()
  set fahBikeImage(url: string | undefined) {
    if (url) {
      this.el.nativeElement.style.backgroundImage = `url(${url})`;
      this.el.nativeElement.style.backgroundColor = '#fff';
    }
  }

  constructor(private el: ElementRef) {}
}
