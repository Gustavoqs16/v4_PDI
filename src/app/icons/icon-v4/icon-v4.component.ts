import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'icon-v4',
  templateUrl: './icon-v4.component.html',
  styleUrls: ['./icon-v4.component.scss'],
})
export class IconV4Component implements OnInit {
  @Input() name = '';
  constructor() { }

  ngOnInit() {}
}
