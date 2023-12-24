      import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'usersearch'
})
export class UsersearchPipe implements PipeTransform {

  transform(value:number){
    return value*2
  }

}
