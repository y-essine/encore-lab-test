import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transpose'
})
export class TransposePipe implements PipeTransform {
  transform(items: any[], columns: number): any[][] {
    if (!items || items.length === 0 || columns <= 0) {
      return [];
    }

    const transposedMatrix = [];

    for (let columnIndex = 0; columnIndex < columns; columnIndex++) {
      const newRow = [];

      for (let rowIndex = columnIndex; rowIndex < items.length; rowIndex += columns) {
        newRow.push(items[rowIndex]);
      }

      transposedMatrix.push(newRow);
    }

    return transposedMatrix;
  }
}
