import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LifeAreas } from './life-areas';

describe('LifeAreas', () => {
  let component: LifeAreas;
  let fixture: ComponentFixture<LifeAreas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LifeAreas],
    }).compileComponents();

    fixture = TestBed.createComponent(LifeAreas);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
