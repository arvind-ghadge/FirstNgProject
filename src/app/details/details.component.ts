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
    {name:"Condo for Rent in City Center",address:"2643 W Chicago Ave, Chicago, IL, USA"},
    {tag:[{
      condo:"Condo",
      bed:"6 Beds",
      bathroom:"6 Baths",
      garage:"3 Garages",
      dimension:"1100 SqFt"}]
    },
    {propDetail:[
      {propertyID:"HI-IW-CO-88", propertyType:"Condo", propertyStatus:"For Rent", Bedrooms:4, Bathrooms:5}
    ]},
    {addDetail:[
      {Garage:6, AreaSize:"1200 SqFt", LandSize:"1600 SqFt", GarageSize:"300 SqFt", YearBuilt:2017}
    ]},
    {addDetails:[
      {Garage:6, AreaSize:"1200 SqFt", LandSize:"1600 SqFt", GarageSize:"300 SqFt", YearBuilt:2017}
    ]}
  ]

}
