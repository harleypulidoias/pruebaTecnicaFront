import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryDateComponentsComponent } from './delivery-date-components.component';

describe('DeliveryDateComponentsComponent', () => {
  let component: DeliveryDateComponentsComponent;
  let fixture: ComponentFixture<DeliveryDateComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeliveryDateComponentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeliveryDateComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
