import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  images=[1, 2, 3].map((n) => `assets/model${n}.png`);

  datas=[
    {
      image:`assets/model1.png`,
      status:"Your order is processing",
      name:"Pure Cotton Polka Dot Regular",
      day:"2 min ago"
    },
    {
      image:`assets/model2.png`,
      status:"Your order is processing…",
      name:"Pure Cotton Polka Dot Regular",
      day:"4 hrs ago"
    },
    {
      image:`assets/model3.png`,
      status:"Your order is processing…",
      name:"Pure Cotton Polka Dot Regular",
      day:"2 days ago"
    }
  ]


  onSubmit() {
   
  }
}
