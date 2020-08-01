import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-preference',
  templateUrl: './preference.component.html',
  styleUrls: ['./preference.component.css']
})
export class PreferenceComponent implements OnInit {
  interests:string[];
  
  constructor() {
    this.interests=["Fashion","Gadgets","DIY Home","Make-Up","Cooking","Electronics"];
   }

  ngOnInit(): void {
  }

}
