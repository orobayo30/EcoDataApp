import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-habits',
  templateUrl: './habits.page.html',
  styleUrls: ['./habits.page.scss'],

  imports: [
    IonicModule, 
    CommonModule, 
    FormsModule,

  ]
})
export class HabitsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  habitActive = false;

divs: any[] = [
  {
    titulo: 'Exercise Daily',
    descripcion: 'Track your daily exercise routine to stay fit and healthy.',
    habitActive: false,
    editando: false
  }
];

agregarDiv() {
  this.divs.push({
    titulo: 'Nuevo hábito',
    descripcion: 'Descripción del nuevo hábito.',
    habitActive: false,
    editando: false
  });
}

activarEdicion(i: number) {
  this.divs[i].editando = true;
}

guardarEdicion(i: number) {
  this.divs[i].editando = false;
}

}

