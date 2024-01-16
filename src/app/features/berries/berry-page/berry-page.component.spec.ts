import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BerryPageComponent } from './berry-page.component';

describe('BerryPageComponent', () => {
  let component: BerryPageComponent;
  let fixture: ComponentFixture<BerryPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BerryPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BerryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
