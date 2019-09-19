import { Component, OnInit } from '@angular/core';
import { NewserviceService } from './newservice.service';
import { HeroListService } from './services/herolist.service';
import { ContentListService } from './new-services/contentlist.service';
import { StudentListService } from './services/studentslist.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [NewserviceService, HeroListService, ContentListService, StudentListService]
})
export class AppComponent implements OnInit {
  title = 'app works';
  myTitle:any;
  text:any;
  public students: any = [];
  heroes;
  contentList;
  constructor( private _newservice:NewserviceService, 
    private herolistService:HeroListService, 
    private contentlistService:ContentListService,
    private _studentListService:StudentListService ){
    this.heroes = this.herolistService.getAllStudents();
    this.contentList = this.contentlistService.getData();
    this.students = this._studentListService.getAllStudents();
  }
  
  
  ngOnInit(){
    this.students = this._studentListService.getAllStudents();
    this.text=this._newservice.display();
  }

  outputMethod(){
    this.title = "My App";
  }
  
  
  
  



}
