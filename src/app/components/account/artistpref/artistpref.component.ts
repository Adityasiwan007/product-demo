import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-artistpref',
  templateUrl: './artistpref.component.html',
  styleUrls: ['./artistpref.component.css']
})
export class ArtistprefComponent implements OnInit {
  artistname:string[];
  constructor() { 
    this.artistname=["ABC","DEF","GHI"];
  }
  
  ngOnInit(): void {
  }

}
