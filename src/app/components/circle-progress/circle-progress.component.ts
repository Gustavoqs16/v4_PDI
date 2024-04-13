import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-circle-progress',
  templateUrl: './circle-progress.component.html',
  styleUrls: ['./circle-progress.component.scss'],
})
export class CircleProgressComponent implements OnChanges {
  @Input() sqSize: number = 200;
  @Input() percentage: number = 25;
  @Input() strokeWidth: number = 10;

  // Computed values based on inputs
  radius: number;
  viewBox: string;
  dashArray: number;
  dashOffset: number;
  transformString: string;

  ngOnChanges(changes: SimpleChanges): void {
    this.radius = (this.sqSize - this.strokeWidth) / 2;
    this.viewBox = `0 0 ${this.sqSize} ${this.sqSize}`;
    this.dashArray = this.radius * Math.PI * 2;
    this.dashOffset = this.dashArray - (this.dashArray * this.percentage) / 100;
    this.transformString = `rotate(-90 ${this.sqSize / 2} ${this.sqSize / 2})`;
  }
}
