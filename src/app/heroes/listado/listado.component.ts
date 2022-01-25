import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {


  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor'];
  heroesBorrados: string[] = [];

  constructor() {
    console.log('constructor');
  }

  ngOnInit(): void {
    console.log('on init');
  }

  borrando() {
    this.heroesBorrados.push(this.heroes.shift() || '');
  }

}
