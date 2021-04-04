import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-flip-block',
  templateUrl: './flip-block.component.html',
  styleUrls: ['./flip-block.component.css']
})
export class FlipBlockComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Input() value = 0;
  numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  currentValue: number;
  previousValue: number;

  ngOnChanges(changes: SimpleChanges): void {
    this.currentValue = changes.value.currentValue;
    this.previousValue = changes.value.previousValue;
  }

  IsActive(number) {
    return this.currentValue === number;
  }

  IsBefore(number) {
    return this.previousValue !== this.currentValue && number === this.previousValue;
  }

  IsAnimated() {
    return this.previousValue !== this.currentValue;
  }

}
