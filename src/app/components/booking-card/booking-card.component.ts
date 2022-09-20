import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-booking-card',
  templateUrl: './booking-card.component.html',
  styleUrls: ['./booking-card.component.css']
})
export class BookingCardComponent implements OnInit {
  
  @Input() url: String = '';
  @Input() name: String = '';
  
  constructor() { }

  ngOnInit(): void {
  }

}
