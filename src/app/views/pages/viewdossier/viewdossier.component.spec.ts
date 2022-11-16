import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewdossierComponent } from './viewdossier.component';

describe('ViewdossierComponent', () => {
  let component: ViewdossierComponent;
  let fixture: ComponentFixture<ViewdossierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewdossierComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewdossierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
