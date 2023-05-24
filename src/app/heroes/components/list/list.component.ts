import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  heroNames:string[] = ["Spiderman", "Ironman", "Hulk", "Thor", "Hawkeye", "Moon Knight"];
  deletedHero?:string;

  removeLastHero(){
    this.deletedHero = this.heroNames.pop();
  }

  constructor() { }

  ngOnInit(): void {
  }

}
