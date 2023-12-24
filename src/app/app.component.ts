import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private toaster:ToastrService){

  }
  title = 'I am a mean stack developer';
  sub(na:string){
    alert(na)
  }
  submit(){
    this.toaster.error("error","")
  }
}
