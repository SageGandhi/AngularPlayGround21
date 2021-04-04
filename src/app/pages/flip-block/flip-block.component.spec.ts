import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlipBlockComponent } from './flip-block.component';

describe('FlipBlockComponent', () => {
  let component: FlipBlockComponent;
  let fixture: ComponentFixture<FlipBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlipBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlipBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
