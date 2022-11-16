import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdddefendantComponent } from './adddefendant.component';

describe('AdddefendantComponent', () => {
  let component: AdddefendantComponent;
  let fixture: ComponentFixture<AdddefendantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdddefendantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdddefendantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
