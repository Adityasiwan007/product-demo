import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  images=[1, 2, 3].map((n) => `assets/model${n}.png`);

  onSubmit() {
   
  }
}
