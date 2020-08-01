import { Component, OnInit } from '@angular/core';
import { Router, Data } from '@angular/router';
import { BannerModel } from '../../models/banner/bannerModel';
import { CardModel } from '../../models/banner/bannerCards';
import { BannerService } from '../../services/homeService/banner.service';
import { environment } from '../../../environments/environment';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent implements OnInit {
  banner: BannerModel;
  cards: CardModel[];
  base: String;

  constructor(
    private bannerService: BannerService,
    private router: Router,
    private cookieService: CookieService
  ) {}

  path = '/api/customer/HomeBanners';

  ngOnInit(): void {
    // environment.token=localStorage.getItem('localToken')
    environment.token = this.cookieService.get('token');
    this.base = environment.baseUrl;
    this.bannerService.getbanner(this.path).subscribe((bannerJson: any) => {
      this.banner = bannerJson;
      this.cards=this.banner.data.banners
    });
  }

  covers = [1, 2, 3].map((n) => `assets/${n}_mask.png`);
  images = [1, 2, 3].map((n) => `assets/${n}_pic.png`);

  onSubmit() {
    this.router.navigate(['streaming']);
  }
}

//Sample input for this  page bannerJson veriable
// {
//   "status": "success",
//   "message": "Contains data of Home screen banners",
//   "data": {
//       "banners": [
//           {
//               "event_id": "EVN200731000005",
//               "event_name": "M&S Exclusives",
//               "influencer_id": "INF200731000005",
//               "influencer_name": "Ross Geller",
//               "streaming_url": "https://www.youtube.com/watch?v=5yx6BWlEVcY",
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
