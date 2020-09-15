import { Component, OnInit } from '@angular/core';

import { disciplina } from '../disciplina'

@Component({
  selector: 'app-disciplinas-list',
  templateUrl: './disciplinas-list.component.html',
  styleUrls: ['./disciplinas-list.component.css']
})
export class DisciplinasListComponent implements OnInit {

  list = disciplina;

  constructor() { }

  ngOnInit() {
  }

}