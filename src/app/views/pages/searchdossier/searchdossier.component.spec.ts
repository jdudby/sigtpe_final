import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchdossierComponent } from './searchdossier.component';

describe('SearchdossierComponent', () => {
  let component: SearchdossierComponent;
  let fixture: ComponentFixture<SearchdossierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchdossierComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchdossierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
