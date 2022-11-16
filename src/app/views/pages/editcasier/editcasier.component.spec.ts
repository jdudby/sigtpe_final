import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditcasierComponent } from './editcasier.component';

describe('EditcasierComponent', () => {
  let component: EditcasierComponent;
  let fixture: ComponentFixture<EditcasierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditcasierComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditcasierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
