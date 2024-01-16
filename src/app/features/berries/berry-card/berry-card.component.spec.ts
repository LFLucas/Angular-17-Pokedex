import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BerryCardComponent } from './berry-card.component';

describe('BerryCardComponent', () => {
  let component: BerryCardComponent;
  let fixture: ComponentFixture<BerryCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BerryCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BerryCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
