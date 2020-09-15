import { Component, OnInit } from '@angular/core';

import { disciplina } from '../disciplina'
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-disciplinas-details',
  templateUrl: './disciplinas-details.component.html',
  styleUrls: ['./disciplinas-details.component.css']
})
export class DisciplinasDetailsComponent implements OnInit {
  disciplinas;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.disciplinas = disciplina[params.get('index')];
    }
    );
  }

}