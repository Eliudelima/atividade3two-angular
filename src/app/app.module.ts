import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DisciplinasDetailsComponent } from './disciplinas-details/disciplinas-details.component';
import { DisciplinasListComponent } from './disciplinas-list/disciplinas-list.component';




@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'disciplinas-details', component: DisciplinasDetailsComponent}, 
      {path: 'disciplinas-list', component: DisciplinasListComponent}, 
      {path: 'disciplina', component: DisciplinasListComponent}, 
      {path: 'disciplina/:index', component: DisciplinasDetailsComponent}   
       
    ])
  ],
  declarations: [ AppComponent, HelloComponent, HomeComponent, DisciplinasDetailsComponent, DisciplinasListComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
