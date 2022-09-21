import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  //-- image card -- //
  image1 = "https://images.unsplash.com/photo-1604999333679-b86d54738315?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&q=80";
  name1 = "Bali";
  price1 = 19000;

  image2 = "https://images.unsplash.com/photo-1590077211339-724573dc4121?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&q=80";
  name2 = "Mountain Province";
  price2 = 15000;

  image3 = "https://images.unsplash.com/photo-1526481280693-3bfa7568e0f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&q=80";
  name3 = "Fujiyoshida";
  price3 = 17000;

  image4 = "https://images.unsplash.com/photo-1542828810-3372a0020f50?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&q=80";
  name4 = "Paro Taktsang";
  price4 = 12000;

  //-- horizontal card --//
  image5 = "https://images.unsplash.com/photo-1508050919630-b135583b29ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80";
  name5 = "Paris";
  location5 = "France";
  price5 = 19000;

  image6 = "https://images.unsplash.com/photo-1604506341132-5b3f43009c3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";
  name6 = "Plaza Mayor";
  location6 = "Spain";
  price6 = 15000;

  image7 = "https://images.unsplash.com/photo-1556950961-8c092986258e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80";
  name7 = "Walt Disney";
  location7 = "United States";
  price7 = 17000;

  image8 = "https://images.unsplash.com/photo-1603120527222-33f28c2ce89e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=454&q=80";
  name8 = "Foribiden City";
  location8 = "China";
  price8 = 12000;

  image9 = "https://images.unsplash.com/photo-1519112232436-9923c6ba3d26?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";
  name9 = "Venice";
  location9 = "Italy";
  price9 = 12000;

  image10 = "https://images.unsplash.com/photo-1609527166729-9a37af65114d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80";
  name10 = "Changdeokgung Palace";
  location10 = "Korea";
  price10 = 12000;

  constructor() { }

  ngOnInit(): void {
  }

}
