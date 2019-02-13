import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-nouveau-joueur',
  templateUrl: './nouveau-joueur.component.html',
  styleUrls: ['./nouveau-joueur.component.scss']
})
export class NouveauJoueurComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.loadForm();
  }

  loadForm() {
    this.form = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      birthdayDate: [''],
      social: this.fb.group({
        facebook: [''],
        twitter: [''],
        instagram: ['']
      })
    });
  }

  submit() {
    console.log('Valeur du formulaire: ', this.form.value);
  }
}
