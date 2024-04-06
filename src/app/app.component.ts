import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pruebaTecnica';

  formAddress: FormGroup;

  constructor(private formBuilder: FormBuilder) {

    this.formAddress = this.formBuilder.group({
      streetOne: ['', Validators.required],
      numberrOne: ['', Validators.required],
      letterOne: ['', Validators.required],
      streetTwo: ['', Validators.required],
      numberrTwo: ['', Validators.required],
      letterTwo: ['', Validators.required],
      house: ['', Validators.required],
    })
  }

  onSubmit(){
    console.log(this.formAddress.controls['streetOne'].value)
  }

}

