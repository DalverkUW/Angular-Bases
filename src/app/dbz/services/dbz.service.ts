import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from "uuid";

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  constructor() { }

  characters: Character[] = [{
    id: uuid(),
    name: "Krillin",
    power: 1000
  },{
    id: uuid(),
    name: "Goku",
    power: 9500
  },{
    id: uuid(),
    name: "Vegeta",
    power: 7500
  }]

  //Llama eventos que se generaron en list component
  onNewCharacter(character: Character){

    const newCharacter: Character = { id: uuid(), ...character };
    // {
    //   id: uuid(),
    //   name: character.name,
    //   power: character.power
    // }

    this.characters.push(newCharacter);
  }

  // onDeleteCharacter(index:number){
  //   this.characters.splice(index, 1)
  // }

  deleteById(id: string){
    this.characters = this.characters.filter(character => character.id !== id);
  }
}
