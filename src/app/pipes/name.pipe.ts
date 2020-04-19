import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'name'
})
export class NamePipe implements PipeTransform {

  transform(name: string, length: number): string {
    console.log(length);
    return `Welcome ${name}`;
  }

}
