import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CityServiceService } from '../../services/city-service.service';
import { Departament } from '../../models/departament';
import { City } from '../../models/city';

@Component({
  selector: 'app-delivery-components',
  templateUrl: './delivery-components.component.html',
  styleUrls: ['./delivery-components.component.css']
})
export class DeliveryComponentsComponent implements OnInit {

  formAddress: FormGroup;
  completeAddress: string = '';
  departaments: Departament[] = [];
  cities: City[]=[];

  constructor(private formBuilder: FormBuilder,
    private cityService: CityServiceService
  ) {

    this.formAddress = this.formBuilder.group({
      departament: ['', Validators.required],
      streetOne: ['', Validators.required],
      numberrOne: ['', Validators.required],
      letterOne: ['', Validators.required],
      numberrTwo: ['', Validators.required],
      letterTwo: ['', Validators.required],
      house: ['', Validators.required],
    })
  }

  ngOnInit(): void {
    this.cityService.getDepartament().subscribe(
      response => {
        response.forEach(
          dep => {
            const {id, name} = dep;
            const departament = {id, name};
            this.departaments.push(departament);
          }
        )
      }
    );
  }

  onSubmit(){
    console.log(this.concatAddress())


  }

  concatAddress(): string{
    const address = this.formAddress.get('streetOne')?.value + " " +
    this.formAddress.get('numberrOne')?.value + " " +
    this.formAddress.get('letterOne')?.value + " # " +
    this.formAddress.get('numberrTwo')?.value + " " +
    this.formAddress.get('letterTwo')?.value + " " +
    this.formAddress.get('house')?.value + " " ;

    return address;
  }

  searchCity(){
    const dep = this.formAddress.get('departament')?.value
    this.cityService.getCities(dep).subscribe(response => {
      response.forEach(
        dep => {
          const {id, name} = dep;
          const city:City = {id, name};
          this.cities.push(city);
        }
      )
    })
  }

}
