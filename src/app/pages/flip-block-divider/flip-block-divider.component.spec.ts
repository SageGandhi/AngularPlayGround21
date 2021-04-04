import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlipBlockDividerComponent } from './flip-block-divider.component';

describe('FlipBlockDividerComponent', () => {
  let component: FlipBlockDividerComponent;
  let fixture: ComponentFixture<FlipBlockDividerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlipBlockDividerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlipBlockDividerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
