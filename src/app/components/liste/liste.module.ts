import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListeComponent } from './liste.component';
import { DetailsModule } from './details/details.module';

@NgModule({
  imports: [
    CommonModule,

    DetailsModule
  ],
  declarations: [ListeComponent],
  exports: [ListeComponent]
})
export class ListeModule { }
