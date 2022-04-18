import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'base64'
})
export class Base64Pipe implements PipeTransform {

  transform(value: string, decode: boolean = false): string {
    return decode ? atob(value) : btoa(value);
  }
}
