import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewserviceService {

  constructor() { }
  display(){
    return 'eSolutions Group';
  }
}
