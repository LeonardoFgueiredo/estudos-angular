import { Component } from '@angular/core';
import { Animal } from 'src/app/Animal';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent {
  constructor(private listService: ListService){}

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
  removeAnimal(animal:Animal){
    this.animals = this.listService.remove(this.animals, animal);
  }
  
}
