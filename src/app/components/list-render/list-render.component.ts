import { Component } from '@angular/core';
import { Animal } from 'src/app/Animal';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent {

  animals: Animal[] = [
    {name: "Tobias",  type: 'Cachorro', age: 5},
    {name: "Lisa",    type: 'Gato',     age: 6},
    {name: "Carlos",  type: 'Cachorro', age: 3},
    {name: "Nina",    type: 'Gato',     age: 4},
  ];
  animalDetails = '';
  ShowAge(animal:Animal){
    this.animalDetails = `-> ${animal.name} tem ${animal.age} anos`
  }
  
}
