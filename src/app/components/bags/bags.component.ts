import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {CookieService} from 'ngx-cookie-service';
import  {environment} from '../../../environments/environment'
@Component({
  selector: 'app-bags',
  templateUrl: './bags.component.html',
  styleUrls: ['./bags.component.css'],
})
export class BagsComponent implements OnInit {
  qua = 1;
  fake_data: any;
  total: any;
  subTotal: any;
  data:any; 
  data_list=[];
  Ordercards=[];

  constructor(private router: Router,private cookieService:CookieService) {}

  ngOnInit(): void {

    //this.data=environment.bag;    for getting bag array string from streaming page using environment variable
    this.data=this.cookieService.get('bag');
    this.data_list=this.data.split(',');

    this.data_list.forEach((x)=>{
      this.fake_data={
        id: x,
        count: 1,
        cost: 35,
      }
      this.Ordercards.push(this.fake_data)
    })

    
    // this.Ordercards = [
    //   {
    //     id: 'a',
    //     count: 1,
    //     cost: 35,
    //   },
    //   {
    //     id: 'b',
    //     count: 1,
    //     cost: 35,
    //   },
    // ];


    //for Calculation for first page load
    this.total = 0;
    this.subTotal = 0;
    this.Ordercards.forEach((x) => {
      x.newCost = x.cost;
      x.subCost = x.newCost + 10 * x.count;
      this.total = this.total + x.cost;
      this.subTotal = this.subTotal + x.subCost;
    });
  }

  wishes = [1, 2, 3].map((n) => `assets/model${n}.png`);

  onSubmit() {}

  sub(id: String) {
    this.total = 0;
    this.subTotal = 0;
    this.Ordercards.forEach((x) => {
      if (x.id == id ) {
        x.count = x.count - 1;
        
        if (x.count < 1){
          this.Ordercards=this.Ordercards.filter((Ordercard)=>Ordercard.id != id)
        }

      }
      x.newCost = x.cost * x.count;
      x.subCost = x.newCost + 10 * x.count;

      this.total = this.total + x.newCost;
      this.subTotal = this.subTotal + x.subCost;
    });
  }

  add(id: String) {
    this.total = 0;
    this.subTotal = 0;
    this.Ordercards.forEach((x) => {
      if (x.id == id) {
        x.count = x.count + 1;
      }
      x.newCost = x.cost * x.count;
      x.subCost = x.newCost + 10 * x.count;

      this.total = this.total + x.newCost;
      this.subTotal = this.subTotal + x.subCost;
    });
  }

  // overAll() {
  //   this.total = 0;
  //   this.subTotal = 0;
  //   this.Ordercards.forEach((x) => {
  //     this.total = this.total + x.newCost;
  //     this.subTotal = this.subTotal + x.subCost;
  //   });
  //   console.log('Total: ', this.total.toFixed(2));
  // }

  goThankyou() {
    this.router.navigate(['thankyou']);
  }
}
