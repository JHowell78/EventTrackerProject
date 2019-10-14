import { Concert } from './../models/concert';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'show'
})
export class ShowPipe implements PipeTransform {
  transform(value: any, ...args: any[]) {
    throw new Error('Method not implemented.');
  }

  // transform(concerts: Concert[]): Concert[] {
  //   // tslint:disable-next-line: prefer-for-of
  //   for (let i = 0; i < concerts.length; i++) {

  //     if(concerts[i].artist === concerts[i].artist) {

  //     }
  //     const numSeen = concerts[i];

  //   }
  //   return concerts.filter(concert => concert.);

}
