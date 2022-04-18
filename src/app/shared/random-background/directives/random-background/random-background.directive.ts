import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[random-background]'
})
export class RandomBackgroundDirective {
  @HostBinding('style.background-color')
  public backgroundColor: string = this.getRandomBackgroundColor();

  @HostListener('click')
  public onClick(): void {
    this.backgroundColor = this.getRandomBackgroundColor();
  }

  private getRandomBackgroundColor(): string {
    return `rgb(${ this.getRandomColorScale() }, ${ this.getRandomColorScale() }, ${ this.getRandomColorScale() })`;
  }

  private getRandomColorScale(): number {
    return Math.round( Math.random() * 255 );
  }
}