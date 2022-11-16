import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudiencelistComponent } from './audiencelist.component';

describe('AudiencelistComponent', () => {
  let component: AudiencelistComponent;
  let fixture: ComponentFixture<AudiencelistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AudiencelistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AudiencelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
