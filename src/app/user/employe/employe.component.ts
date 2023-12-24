import { Component, OnInit } from '@angular/core';
import { ObservableserviceService } from 'src/app/service/observableservice.service';

@Component({
  selector: 'app-employe',
  templateUrl: './employe.component.html',
  styleUrls: ['./employe.component.css']
})
export class EmployeComponent implements OnInit {
 

  constructor(private service:ObservableserviceService){}
  ngOnInit() {
    // this.service.sub().subscribe((res)=>{
    //   console.log(res)
    // })
    this.service.emitobservable().subscribe((res)=>{
      console.log(res)
    },(error)=>{
      console.log(error)
    },()=>{
      console.log("observable as completed")
    })
   }
}
