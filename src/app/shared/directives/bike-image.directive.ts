import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[fahBikeImage]'
})
export class BikeImageDirective {
  @Input()
  set fahBikeImage(url: string | undefined) {
    if (url) {
      console.log('');
      this.el.nativeElement.style.backgroundImage = `url(${url})`;
    }
  }

  constructor(private el: ElementRef) {}
}
