import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OdamComponent } from './odam.component';

describe('OdamComponent', () => {
  let component: OdamComponent;
  let fixture: ComponentFixture<OdamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OdamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OdamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
