import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class HeroListService{
    getAllStudents(){
        return [{
            id: 1,
            Name: "Mahesh",
            Address: "Thane",
            Gender: "Male"
        },
        {
            id: 2,
            Name: "Arvind",
            Address: "Thane",
            Gender: "Male"
        },
        {
            id: 3,
            Name: "Manisha",
            Address: "Vashi",
            Gender: "Female"
        },
        {
            id: 4,
            Name: "Aabid",
            Address: "Koparkhairane",
            Gender: "Male"
        },
        {
            id: 5,
            Name: "Vanaja",
            Address: "Bhiwandi",
            Gender: "Female"
        }
    ];
    }
}