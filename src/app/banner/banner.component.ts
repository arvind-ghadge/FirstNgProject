import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  bannerDetail = [
    {numbertext:'1/1', src:'assets/images/banner/1.jpg', caption:"Caption One"},
    {numbertext:'1/2', src:'assets/images/banner/2.jpg', caption:"Caption Two"},
    {numbertext:'1/3', src:'assets/images/banner/3.jpg', caption:"Caption Three"} 
  ];

  arr = [1,2,3,5,];

  myObj = {
    name:"ALex",
    Address:"London"
  }

  constructor() { }

  ngOnInit() {
  }

}
