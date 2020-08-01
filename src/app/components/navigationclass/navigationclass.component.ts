import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navigationclass',
  templateUrl: './navigationclass.component.html',
  styleUrls: ['./navigationclass.component.css']
})
export class NavigationclassComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  stream() {
    this.router.navigate(['streaming']);
  }
}
