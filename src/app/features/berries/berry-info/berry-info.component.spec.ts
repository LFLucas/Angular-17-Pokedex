import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BerryInfoComponent } from './berry-info.component';

describe('BerryInfoComponent', () => {
  let component: BerryInfoComponent;
  let fixture: ComponentFixture<BerryInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BerryInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BerryInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
