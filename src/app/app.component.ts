import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app works';
  myTitle:any;
  constructor(){
    
  }

  outputMethod(){
    this.title = "My App";
  }
  
  ngOnInit(){
  
    
  }
  
  



}
