import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BerryContentComponent } from './berry-content.component';

describe('BerryContentComponent', () => {
  let component: BerryContentComponent;
  let fixture: ComponentFixture<BerryContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BerryContentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BerryContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
