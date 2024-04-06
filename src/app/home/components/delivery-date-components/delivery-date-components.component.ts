import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-delivery-date-components',
  templateUrl: './delivery-date-components.component.html',
  styleUrls: ['./delivery-date-components.component.css']
})
export class DeliveryDateComponentsComponent implements OnInit {

  formDate: FormGroup;


  constructor(private formBuilder: FormBuilder, private datePide: DatePipe) {

    this.formDate = this.formBuilder.group({
      date: [new Date()] // Puedes inicializar el valor del campo de fecha si lo deseas
    });
  }

  ngOnInit(): void {
  }

  onSubmit(){
    const dateForm = this.formDate.get('date')?.value;
    const dateFormat = this.datePide.transform(dateForm, "dd/MM/YY HH:MM");
    console.log(dateFormat)
  }

}
