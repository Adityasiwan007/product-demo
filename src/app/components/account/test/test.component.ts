import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  isCollapsed1:boolean=true;
  isCollapsed2:boolean=true;
  constructor() { }

  ngOnInit(): void {
  }

  collapsed1() {
    this.isCollapsed1=!this.isCollapsed1;
  }
  collapsedText1() {
    if(this.isCollapsed1==true) {
    this.isCollapsed1=!this.isCollapsed1;
    }
  }
  collapsed2() {
    this.isCollapsed2=!this.isCollapsed2;
  }
  collapsedText2() {
    if(this.isCollapsed2==true) {
    this.isCollapsed2=!this.isCollapsed2;
    }
  }
}
