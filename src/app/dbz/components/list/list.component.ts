import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Output()
  onDelete = new EventEmitter<string>()
  
  @Input()
  CharacterList: Character[]=[{
    name: "Trunks",
    power: 10
  }]

  //Se emite un evento nuevo
  onDeleteCharacter(id?: string){
    if(!id) return
    console.log(id);
    this.onDelete.emit(id)
  }
}
