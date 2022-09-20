import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-horizontal-card',
  templateUrl: './horizontal-card.component.html',
  styleUrls: ['./horizontal-card.component.css']
})
export class HorizontalCardComponent implements OnInit {

  @Input() url: String = '';
  @Input() name: String = '';
  @Input() location: string = '';
  @Input() price: any;

  constructor() { }

  ngOnInit(): void {
  }

}
