import { Component, OnInit } from '@angular/core';

import { Joueur } from './../../models';
import { Logs } from 'selenium-webdriver';
@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.scss']
})
export class ListeComponent implements OnInit {
  public joueurs: Joueur[] = [];
  public selected: Joueur;
  public openDetail = false;

  constructor() { }

  ngOnInit() {
    this.loadJoueurs();
  }

  loadJoueurs() {
    this.joueurs.push(
      {
        id: 'j1',
        firstName: 'Levani',
        lastName: 'BOTIA',
        poste: '3eme ligne',
        taille: '1m60',
        birthdayDate: '1990-10-12',
        absent: true
      },
      {
        id: 'j2',
        firstName: 'Mike',
        lastName: 'CORBEL',
        poste: 'Pillier',
        taille: '1m80',
        birthdayDate: '1989-03-30',
        absent: false
      },
      {
        id: 'j2',
        firstName: 'Mohamed',
        lastName: 'BOUGHANMI',
        poste: 'Pillier',
        taille: '1m94',
        birthdayDate: '1985-06-18',
        absent: false
      }
    );
  }

  public select(j: Joueur) {
    this.openDetail = this.openDetail && this.selected !== j ? this.openDetail : !this.openDetail;
    this.selected = j;
  }

  public setPresentState(event) {
    const id = this.joueurs.findIndex(j => j.id === this.selected.id);
    this.joueurs[id].absent = event;
  }
}
