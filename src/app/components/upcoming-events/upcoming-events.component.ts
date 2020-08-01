import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UpcomingModel } from '../../models/upcomingEventCard/upcomingEvent';
import { UpcomingService } from '../../services/upcomingService/upcoming-card.service';
import { environment } from '../../../environments/environment';
import { CookieService } from 'ngx-cookie-service';
import * as moment from 'moment';
import { VariableAst } from '@angular/compiler';

@Component({
  selector: 'app-upcoming-events',
  templateUrl: './upcoming-events.component.html',
  styleUrls: ['./upcoming-events.component.css'],
})
export class UpcomingEventsComponent implements OnInit {
  Upcome: UpcomingModel;
  xyz: String;
  cards: [any];
  base: String;

  constructor(
    private upcomingService: UpcomingService,
    private router: Router,
    private cookieService: CookieService 
  ) {}

  path = '/api/customer/UpcomingEvents';
  ngOnInit(): void {
    this.base = environment.baseUrl;

    this.upcomingService.getupcoming(this.path).subscribe((upcominJson: any) => {
      this.Upcome = upcominJson;
      this.cards = this.Upcome.data.upcomingEvents;
      console.log("Upcoming: ",this.cards.length)

      this.cards.forEach((x) => {
        x.timeStart=moment(x.from_time).format('LT');
        x.timeEnd=moment(x.to_time).format('LT');
        x.date=moment(x.from_time).date();
        x.month=moment(x.from_time).format('MMM');
        x.day=moment(x.from_time).format('ddd');
      });
    });
  }


  onSubmit() {
    this.router.navigate(['addCalendar']);
  }
  goHome() {
    this.router.navigate(['home']);
  }
}


// Sample data for upcoming page upcominJson Variable

// {
//   "status": "success",
//   "message": "Contains data of upcoming events.",
//   "data": {
//       "upcomingEvents": [
//           {
//               "event_id": "EVN200728000001",
//               "event_name": "M&S Exclusives",
//               "influencer_id": "INF200707000005",
//               "influencer_name": "Sri",
//               "streaming_url": "https://www.youtube.com/watch?v=5yx6BWlEVcY",
//               "from_time": "2020-08-14T18:30:00.000Z",
//               "to_time": "2020-08-29T18:30:00.000Z",
//               "product_images": [
//                   "/images/products/PRD200723000011/Brown/IMG_01.jpg",
//                   "/images/products/PRD200723000012/Astronaut Blue/IMG_01.jpg",
//                   "/images/products/PRD200723000013/Maroon/IMG_01.jpg"
//               ]
//           }
//       ]
//   },
//   "error": null
// }