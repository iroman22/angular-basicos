import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent implements OnInit {

  constructor() { }

  ngOnInit(){

  }

  heroes: string[] = ['Spiderman','Ironman', 'Hulk', 'Thor', 'Capitan America'];
  heroeB: string = '';

  borrarHeroe(){
    console.log("Borrando...");
    this.heroeB = this.heroes.shift() || '';
    console.log( this.heroes);
    console.log( this.heroeB);
  }

}
