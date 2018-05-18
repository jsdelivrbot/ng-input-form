import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit  {
  name = 'Angular 6';
  myForm: FormGroup
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.myForm = this.formBuilder.group({
      myInput: new FormControl(
        123, [
          Validators.minLength(50),
        ]
      )
    });
  }

  onSubmit(e) {
    console.log(e)
  }
}
