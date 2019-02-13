import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material';

import { ApiModule } from './../../modules';
import { NouveauJoueurComponent } from './nouveau-joueur.component';

@NgModule({
  declarations: [NouveauJoueurComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,

    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,

    ApiModule,
  ],
  exports: [NouveauJoueurComponent]
})
export class NouveauJoueurModule { }
