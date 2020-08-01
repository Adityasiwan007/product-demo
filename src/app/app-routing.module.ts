import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { StreamingComponent } from './components/streaming/streaming.component';
import { UpcomingEventsComponent } from './components/upcoming-events/upcoming-events.component';
import { OrdersComponent } from './components/orders/orders.component';
import { AddCalendarComponent } from './components/add-calendar/add-calendar.component';
import { BagsComponent } from './components/bags/bags.component';
import { EventsComponent } from './components/events/events.component';
import { ThankyouComponent } from './components/thankyou/thankyou.component';
import { NotificationComponent } from './components/notification/notification.component';

import { TestComponent } from './components/account/test/test.component';
import { ContactdetailsComponent } from './components/account/contactdetails/contactdetails.component';
import { SavedcardsComponent } from './components/account/savedcards/savedcards.component';
import { PreferenceComponent } from './components/account/preference/preference.component';
import { ArtistprefComponent } from './components/account/artistpref/artistpref.component';




const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'',component:LoginComponent},  //login page
  {path:'streaming',component:StreamingComponent},
  {path:'upcoming',component:UpcomingEventsComponent},
  {path:'order',component:OrdersComponent},
  {path:'addCalendar',component:AddCalendarComponent},
  {path:'bags',component:BagsComponent},
  {path:'events',component:EventsComponent},
  {path:'profile', component:TestComponent},
  {path:'contactdetails',component:ContactdetailsComponent},
  {path:'savedcards',component:SavedcardsComponent},
  {path:'preference',component:PreferenceComponent},
  {path:'artist-preference',component:ArtistprefComponent},
  {path:'thankyou',component:ThankyouComponent},
  {path:'notification',component:NotificationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
