import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { birthdayValidator } from '../../validators';
import { ApiService } from './../../services';
import { Joueur } from './../../models';
@Component({
  selector: 'app-nouveau-joueur',
  templateUrl: './nouveau-joueur.component.html',
  styleUrls: ['./nouveau-joueur.component.scss']
})
export class NouveauJoueurComponent implements OnInit {
  form: FormGroup;
  @Input() joueur: Joueur;

  constructor(private fb: FormBuilder, private apiService: ApiService) { }

  ngOnInit() {
    this.loadForm();
  }

  loadForm() {
    this.form = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      birthdayDate: ['', birthdayValidator()],
      social: this.fb.group({
        facebook: [''],
        twitter: [''],
        instagram: ['']
      })
    });

    if (this.joueur) {
      this.form.patchValue(this.joueur);
    }

  }

  submit() {
    if (this.joueur) {
      this.apiService.updatePlayer(this.joueur.id, this.form.value).subscribe(res => {
        console.log('Updated succeed', res);
      });
    } else {
      this.apiService.addPlayer(this.form.value).subscribe(res => {
        console.log('succeed', res);
      });
    }
  }
}
