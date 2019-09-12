import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class HeroListService{
    getData():string[]{
        return ["Ironman","Spiderman","Antman","Superman","Shaktiman"];
    }
}