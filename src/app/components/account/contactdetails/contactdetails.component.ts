import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contactdetails',
  templateUrl: './contactdetails.component.html',
  styleUrls: ['./contactdetails.component.css']
})
export class ContactdetailsComponent implements OnInit {
  details: any;
  no_of_contacts:number;

  constructor() { 
    this.details=["Tata Consultancy Services, TCS Center, Infopark, Kochi, Kerala 682042 India",
    "Tata Consultancy Services, TCS Center, Infopark, Kochi, Kerala 682042 India",
    "Tata Consultancy Services, TCS Center, Infopark, Kochi, Kerala 682042 India",
    "TCS, Bangalore","TCS, Bangalore"];
    this.no_of_contacts=this.details.length;
  }

  ngOnInit(): void {
  }

}
