import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewdefendantComponent } from './viewdefendant.component';

describe('ViewdefendantComponent', () => {
  let component: ViewdefendantComponent;
  let fixture: ComponentFixture<ViewdefendantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewdefendantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewdefendantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
