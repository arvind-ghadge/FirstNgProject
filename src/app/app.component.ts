import { Component, OnInit } from '@angular/core';
import { NewserviceService } from './newservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [NewserviceService]
})
export class AppComponent implements OnInit {
  title = 'app works';
  myTitle:any;
  text:any;
  constructor( private _newservice:NewserviceService ){
    
  }

  ngOnInit(){
  
    this.text=this._newservice.display();
  }

  outputMethod(){
    this.title = "My App";
  }
  
  
  
  



}
