import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {CookieService} from 'ngx-cookie-service';
import  {environment} from '../../../environments/environment'

@Component({
  selector: 'app-streaming',
  templateUrl: './streaming.component.html',
  styleUrls: ['./streaming.component.css']
})
export class StreamingComponent implements OnInit {
  data=[];
  images:any[];
  interestname:any;
  sizes:string[];
  color_selected:string;
  size_selected:string;

  constructor(private router:Router,private toastr:ToastrService,private cookieService:CookieService) {
    this.images=[
      {
        name:"M&S Exclusive Today's Highlihts",
        cost:"35.00",
        mrp:"45.00",
        rating:3,
        color:["white","blue","yellow"],
        img:"assets/1_pic_stream.png"
      },
      {
        name:"M&S Exclusive Today's Highlihts",
        cost:"35.00",
        mrp:"45.00",
        rating:4,
        color:["white","blue","yellow"],
        img:"assets/2_pic_stream.png"
      },
      {
        name:"M&S Exclusive Today's Highlihts",
        cost:"35.00",
        mrp:"45.00",
        rating:2,
        color:["white","blue","yellow"],
        img:"assets/3_pic_stream.png"
      }
    ];
    this.interestname=this.images[0];
    this.sizes=["S","M","L","XL","XXL"];
   }


   selInterest(interest:any) {
    this.interestname=interest;
  }

  checkRating(rating:number,interest:any) {
    //console.log(rating);
    //console.log(interest.rating);
    if(rating<=interest.rating) {
     //console.log("True");
     return true;
    }
    else {
      //console.log("False");
      return false;
    }
  }

 selColor(color:string) {
   this.color_selected=color;
   console.log("Color selected is "+this.color_selected);
 }

 selSize(size:string) {
   this.size_selected=size;
   console.log("Size selected is "+this.size_selected);    
 }

 isSelSize(size:string) {
   if(this.size_selected==size) {
     return true;
   }
   else {
     return false;
   }
 
 }




  ngOnInit(): void {
  }

  goHome(){
    this.router.navigate(['home']);
  }

  addToBag(pro:any,event:any){
    event.stopPropagation();
    this.toastr.success(`Adding this product in your bag`,'',{
      timeOut:1500,
      positionClass:'toast-top-right',
      progressBar:true,
    });
    this.data.push(pro.img);
    this.data=Array.from(new Set(this.data));
    environment.bag=`${this.data}`;
    this.cookieService.set('bag', `${this.data}`);   //cookie saving the data
  }
 
}
