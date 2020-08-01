import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navgation',
  templateUrl: './navgation.component.html',
  styleUrls: ['./navgation.component.css']
})
export class NavgationComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  home() {
    this.router.navigate(['home']);
  }
  stream() {
    this.router.navigate(['streaming']);
  }
  goOrder(){
    this.router.navigate(['order']);
  }

  goBag(){
    this.router.navigate(['bags']);
  }
}
