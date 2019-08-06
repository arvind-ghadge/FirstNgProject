import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-sidebar',
  templateUrl: './left-sidebar.component.html',
  styleUrls: ['./left-sidebar.component.scss']
})
export class LeftSidebarComponent implements OnInit {

  categoryDetail =
  [
    {categorylist:"Houses for rent in Croydon"},
    {categorylist:"Apartment for rent in Kent"},
    {categorylist:"Houses for rent in Streatham"},
    {categorylist:"Apartment for rent in Surrey"},
    {categorylist:"Houses for rent in Croydon"},
    {categorylist:"Houses for rent in Kent"},
    {categorylist:"Apartment for rent in Streatham"},
    {categorylist:"Houses for rent in Surrey"},
    {categorylist:"Apartment for rent in London"}
  ]
  constructor() { }

  ngOnInit() {
  }

}
