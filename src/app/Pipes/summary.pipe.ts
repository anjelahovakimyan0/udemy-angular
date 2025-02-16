import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summary',
  standalone: true
})
export class SummaryPipe implements PipeTransform {


  transform(value: string, length?: number): unknown {
    // Եթե length չեն տվել` defauklt 20 դիր
    if (!length) {
      length = 20
    }

    return value.substring(0, length);
  }

}
