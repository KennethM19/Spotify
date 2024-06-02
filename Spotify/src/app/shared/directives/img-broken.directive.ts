import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appImgBroken]',
})
export class ImgBrokenDirective {
  @Input() customImg:string = ''
  @HostListener('error') handleError(): void {
    const elNative = this.elHost.nativeElement;
    console.log('esta imagen reventó -->',this.elHost);
    // elNative.src = '../../../assets/images/angular.jpg';
    elNative.src = this.customImg;

  }
  constructor(private elHost: ElementRef) {
    console.log(this.elHost);
  }
}
