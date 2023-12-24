import { Injectable } from '@angular/core';
import { AsyncSubject, BehaviorSubject, Observable, ReplaySubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObservableserviceService {

  constructor() { }


  emitobservable():Observable<string>{
    return new Observable((observe)=>{
      observe.next("hii")
      observe.next("bii")
      // observe.error(new Error("something has went wrong"))
      observe.complete()
    })
  }



  subjects=new ReplaySubject <number>(2)
    
  
  


newsub(){

  this.subjects.next(89)
  this.subjects.next(90)
  // const subject = new AsyncSubject<number>() //keep the previous emitted value in the memory
  // return this.subjects
}
}

  

// }
// sub(){
//   // const subject = new AsyncSubject<number>() //keep the previous emitted value in the memory
//   // this.subjects.next(21);
//   //  this.subjects.next(7);
//   this.subjects.next(78)
// }
