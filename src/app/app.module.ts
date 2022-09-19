import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ImageCardComponent } from './components/image-card/image-card.component';
import { HorizontalCardComponent } from './components/horizontal-card/horizontal-card.component';
import { SideNavigationComponent } from './side-navigation/side-navigation.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SideBoardComponent } from './side-board/side-board.component';
import { BookingCardComponent } from './components/booking-card/booking-card.component';

@NgModule({
  declarations: [
    AppComponent,
    ImageCardComponent,
    HorizontalCardComponent,
    SideNavigationComponent,
    DashboardComponent,
    SideBoardComponent,
    BookingCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
