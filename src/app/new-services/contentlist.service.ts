import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ContentListService{
    getData():string[]{
        return ["Aeronautics", " Banking & Finance", " Construction", " Diversity", " Education", " Entertainment"]
    }
}