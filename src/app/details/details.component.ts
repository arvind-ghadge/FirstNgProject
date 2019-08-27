import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  propertyDetail:any = [
    {name:"Condo for Rent in City Center"},
    {address:"Property Detail"},
    {tag:["Condo","6 Beds","6 Baths","3 Garages","1100 SqFt"]},
    {propDetail:[
      {propertyID:"HI-IW-CO-88",propertyType:"Condo", propertyStatus:"For Rent"}
    ]},
    {addDetail:[
      {propertyID:"HI-IW-CO-88",propertyType:"Condo", propertyStatus:"For Rent"}
    ]}
  ]

}
