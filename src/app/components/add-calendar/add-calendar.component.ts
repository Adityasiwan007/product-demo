import { Component, OnInit,EventEmitter } from '@angular/core';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';


@Component({
  selector: 'app-add-calendar',
  templateUrl: './add-calendar.component.html',
  styleUrls: ['./add-calendar.component.css']
})
export class AddCalendarComponent implements OnInit {
   
  constructor(private router:Router,private toastr:ToastrService) { }

  ngOnInit(): void {
  }

  images=[1, 2, 4].map((n) => `assets/${n}_pic.png`);

  cardimages=[
    {
      name:'M&S Exclusives',
      img:'assets/model1.png'
    },
    {
      name:'H&M Exclusives',
      img:'assets/model2.png'
    },
    {
      name:'M&S Exclusives',
      img:'assets/model3.png'
    }
  ]
  // cardimages=[1, 2, 3].map((n) => `assets/model${n}.png`);

  onSubmit(){
    this.toastr.info
    ('You have been successfully registered for the event','INFO:',{
      timeOut:1500,
      positionClass:'toast-top-right',
      progressBar:true,
    });
    
  }
  
  goUpcoming(){
    this.router.navigate(['upcoming']);
  }
}
