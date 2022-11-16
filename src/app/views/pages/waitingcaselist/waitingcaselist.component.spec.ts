import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaitingcaselistComponent } from './waitingcaselist.component';

describe('WaitingcaselistComponent', () => {
  let component: WaitingcaselistComponent;
  let fixture: ComponentFixture<WaitingcaselistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WaitingcaselistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WaitingcaselistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
