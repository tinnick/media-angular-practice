import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[random-background]'
})
export class RandomBackgroundDirective {
  @HostBinding('style.background-color')
  public backgroundColor?: string = 'red';
}