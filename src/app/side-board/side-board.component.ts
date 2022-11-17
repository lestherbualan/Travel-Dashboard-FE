import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-side-board',
  templateUrl: './side-board.component.html',
  styleUrls: ['./side-board.component.css']
})
export class SideBoardComponent implements OnInit {

  url1 = "https://images.unsplash.com/photo-1565565915331-293fd8113954?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80";
  name1 = 'Siargao';
  
  url2 = "https://images.unsplash.com/photo-1495031451303-d8ab59c8df37?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";
  name2 = 'Boracay';

  url3 = "https://images.unsplash.com/photo-1613190151853-3a11f605f4cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";
  name3 = 'Bohol';
  constructor() { }

  ngOnInit(): void {
  }

}
