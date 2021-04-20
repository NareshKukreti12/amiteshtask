import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'confirmationDialog'
})
export class ConfirmationDialogPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
