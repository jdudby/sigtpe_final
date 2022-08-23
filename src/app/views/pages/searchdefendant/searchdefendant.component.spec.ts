import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchdefendantComponent } from './searchdefendant.component';

describe('SearchdefendantComponent', () => {
  let component: SearchdefendantComponent;
  let fixture: ComponentFixture<SearchdefendantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchdefendantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchdefendantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
