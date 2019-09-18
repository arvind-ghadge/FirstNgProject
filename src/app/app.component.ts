import { Component, OnInit } from '@angular/core';
import { NewserviceService } from './newservice.service';
import { HeroListService } from './services/herolist.service';
import { ContentListService } from './new-services/contentlist.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [NewserviceService, HeroListService, ContentListService]
})
export class AppComponent implements OnInit {
  title = 'app works';
  myTitle:any;
  text:any;
  heroes;
  contentList;
  constructor( private _newservice:NewserviceService, private herolistService:HeroListService, private contentlistService:ContentListService ){
    this.heroes = this.herolistService.getAllStudents();
    this.contentList = this.contentlistService.getData();
  }
  

  ngOnInit(){
  
    this.text=this._newservice.display();
  }

  outputMethod(){
    this.title = "My App";
  }
  
  
  
  



}
