import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

import { Joueur } from './../../../models';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  @Input() joueurSelectionne: Joueur;
  @Output() changeState: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  public toggleState() {
    this.joueurSelectionne.absent = !this.joueurSelectionne.absent;
  }
}
