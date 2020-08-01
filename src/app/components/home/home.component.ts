import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LiveModel } from '../../models/liveEventCard/liveEvent';
import { HomeService } from '../../services/homeService/live-card.service';
import { environment } from '../../../environments/environment';
import { CookieService } from 'ngx-cookie-service';
import * as moment from 'moment';
import { variable } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  Live: LiveModel;
  xyz: String;
  cards: [any];
  base: String;

  constructor(
    private homeService: HomeService,
    private router: Router,
    private cookieService: CookieService
  ) {}

  path = '/api/customer/LiveEvents';
  ngOnInit(): void {
    this.base = environment.baseUrl;

    this.homeService.getlive(this.path).subscribe((liveJson: any) => {
      this.Live = liveJson;
      this.cards = this.Live.data.liveEvents;

      this.cards.forEach((x) => {
        x.timeStart=moment(x.from_time).format('LT');
        x.timeEnd=moment(x.to_time).format('LT');
        x.date=moment(x.from_time).date();
        x.month=moment(x.from_time).format('MMM');
        x.day=moment(x.from_time).format('ddd');
      });
    });
  }

  normalImg(x) {
    x.style.transform = 'scale(1)';
    x.style.zIndex = '1';
  }
  onSubmit() {
    this.router.navigate(['streaming']);
  }
  goUpcoming() {
    this.router.navigate(['upcoming']);
  }
}


// Sample input for this home card screen liveJson variable

// {
//   "status": "success",
//   "message": "Contains data of live events",
//   "data": {
//       "liveEvents": [
//           {
//               "event_id": "EVN200731000001",
//               "event_name": "M&S Exclusives",
//               "influencer_id": "INF200731000001",
//               "influencer_name": "Joey Tribbiani",
//               "streaming_url": "https://www.youtube.com/watch?v=5yx6BWlEVcY",
//               "from_time": "2020-07-30T06:30:00.000Z",
//               "to_time": "2020-12-31T08:30:00.000Z",
//               "product_images": [
//                   "/images/products/PRD200723000001/Wine/IMG_01.jpg",
//                   "/images/products/PRD200723000002/Maroon/IMG_01.jpg",
//                   "/images/products/PRD200723000003/Eggplant Purple/IMG_01.jpg"
//               ]
//           }
//       ]
//   },
//   "error": null
// }