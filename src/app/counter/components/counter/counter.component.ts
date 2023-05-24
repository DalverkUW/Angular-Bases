import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  contador: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  aumentar(){
    this.contador += 1;
  }

  disminuir(){
    this.contador --;
  }

  reset(){
    this.contador = 0;
  }
}
