import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // @ViewChild('f') signupform: NgForm;
 defaultQuestion='teacher';
  onSubmit(form:NgForm){
    console.log(form);
  }
  // onSubmit(){
  //   console.log(this.signupform);
  // }
}
