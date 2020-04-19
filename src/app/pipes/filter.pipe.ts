import { Pipe, PipeTransform } from '@angular/core';
import { Department } from '../department/department';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(depList: Department[], count: number): Department[] {
    // console.log(depList, count);
    return depList.filter((dept) => dept.empCount > count);
  }

}
