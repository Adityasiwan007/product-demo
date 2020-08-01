import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  images=[1, 2, 3].map((n) => `assets/${n}_pic_stream.png`);
  
  onSubmit() {
    this.router.navigate(['streaming']);
  }
}
