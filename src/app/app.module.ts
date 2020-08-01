import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { NavgationComponent } from './components/navgation/navgation.component';
import {NgbPaginationModule, NgbAlertModule, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ToastrModule} from 'ngx-toastr';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { CarouselComponent } from './components/carousel/carousel.component';
import { StreamingComponent } from './components/streaming/streaming.component';
import { UpcomingEventsComponent } from './components/upcoming-events/upcoming-events.component';
import { FlickityModule } from 'ngx-flickity';
import { OrdersComponent } from './components/orders/orders.component';
import { AddCalendarComponent } from './components/add-calendar/add-calendar.component';
import { BagsComponent } from './components/bags/bags.component';
import { NavigationclassComponent } from './components/navigationclass/navigationclass.component';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { EventsComponent } from './components/events/events.component';
import { ArtistprefComponent } from './components/account/artistpref/artistpref.component';
import { ContactdetailsComponent } from './components/account/contactdetails/contactdetails.component';
import { MyaccountComponent } from './components/account/myaccount/myaccount.component';
import { PreferenceComponent } from './components/account/preference/preference.component';
import { SavedcardsComponent } from './components/account/savedcards/savedcards.component';
import { TestComponent } from './components/account/test/test.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { ThankyouComponent } from './components/thankyou/thankyou.component';
import { NotificationComponent } from './components/notification/notification.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { CarouselEventsComponent } from './components/carousel-events/carousel-events.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavgationComponent,
    CarouselComponent,
    StreamingComponent,
    UpcomingEventsComponent,
    OrdersComponent,
    AddCalendarComponent,
    BagsComponent,
    NavigationclassComponent,
    EventsComponent,
    ArtistprefComponent,
    ContactdetailsComponent,
    MyaccountComponent,
    PreferenceComponent,
    SavedcardsComponent,
    TestComponent,
    CalendarComponent,
    ThankyouComponent,
    NotificationComponent,
    CarouselEventsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbPaginationModule,
    NgbAlertModule, 
    NgbModule,
    BrowserAnimationsModule,
    CarouselModule,
    FlickityModule,
    MatToolbarModule,
    MatButtonModule,
    CalendarModule.forRoot({ provide: DateAdapter, useFactory: adapterFactory }),
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
