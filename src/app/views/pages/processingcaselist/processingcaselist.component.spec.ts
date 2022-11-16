import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessingcaselistComponent } from './processingcaselist.component';

describe('ProcessingcaselistComponent', () => {
  let component: ProcessingcaselistComponent;
  let fixture: ComponentFixture<ProcessingcaselistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcessingcaselistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProcessingcaselistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
