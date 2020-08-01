import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-savedcards',
  templateUrl: './savedcards.component.html',
  styleUrls: ['./savedcards.component.css']
})
export class SavedcardsComponent implements OnInit {
  carddetails: any;
  no_of_cards:number;
  constructor() {
    this.carddetails=[[1234,"NAME","11/2025"],[4321,"NAME","11/2025"]];
    this.no_of_cards=this.carddetails.length;
   }

  ngOnInit(): void {
  }

}
