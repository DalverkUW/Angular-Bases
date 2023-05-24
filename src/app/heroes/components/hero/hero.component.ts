import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  public name:string = 'Ironman';
  edad:number = 45;

  get capitalaizedName(){
    return this.name.toUpperCase();
  }

  heroDescription(){
    return `${this.name} - ${this.edad}`
  }

  changeHero(){
    this.name = 'Spiderman';
  }

  changeAge(){
    this.edad = 25;
  }

  resetForm(){
    this.name= 'Ironman';
    this.edad = 45;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
