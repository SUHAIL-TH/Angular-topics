import { Component ,EventEmitter,Input,OnInit,Output} from '@angular/core';
import { ObservableserviceService } from '../service/observableservice.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  constructor(private servive:ObservableserviceService){}
  numbers:number=10
  ngOnInit(): void {
    // this.servive.obs().subscribe((Res)=>{
    //   console.log(Res)
    // },(error)=>{
    //   console.log(error)
    // },()=>{
    //   alert("completed")
    //   console.log("completed")
    // })
    this.servive.subjects.subscribe((res)=>{
   
      console.log(res +"subject value is added here")
     },(err)=>{
      console.log(err)
     })

  }
  @Input() value:string=""
  @Output() emitter=new EventEmitter()
  

  inputtext:string=''
  submit(){
    this.emitter.emit(this.inputtext)
  }
  newsubmit(){
    this.servive.newsub()
  }


}
