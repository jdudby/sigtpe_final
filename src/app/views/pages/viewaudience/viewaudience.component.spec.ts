import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewaudienceComponent } from './viewaudience.component';

describe('ViewaudienceComponent', () => {
  let component: ViewaudienceComponent;
  let fixture: ComponentFixture<ViewaudienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewaudienceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewaudienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
