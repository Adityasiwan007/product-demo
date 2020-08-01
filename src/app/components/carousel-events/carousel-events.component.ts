import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-carousel-events',
  templateUrl: './carousel-events.component.html',
  styleUrls: ['./carousel-events.component.css']
})
export class CarouselEventsComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
covers = [1, 2, 3].map((n) => `assets/${n}_mask.png`);
images=[1, 2, 3].map((n) => `assets/${n}_pic.png`);

onSubmit() {
  this.router.navigate(['streaming']);
}
}
