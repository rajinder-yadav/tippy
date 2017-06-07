import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tooltip-button',
  templateUrl: './tooltip-button.component.html',
  styleUrls: ['./tooltip-button.component.css']
})
export class TooltipButtonComponent implements OnInit {

  @Input() tooltip = '';

  constructor() { }

  ngOnInit() {
  }

}
