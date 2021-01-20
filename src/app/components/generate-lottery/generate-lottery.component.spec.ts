import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateLotteryComponent } from './generate-lottery.component';

describe('GenerateLotteryComponent', () => {
  let component: GenerateLotteryComponent;
  let fixture: ComponentFixture<GenerateLotteryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenerateLotteryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerateLotteryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
