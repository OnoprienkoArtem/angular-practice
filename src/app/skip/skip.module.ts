import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkipComponent } from './skip.component';
import {A11yModule} from '@angular/cdk/a11y';


@NgModule({
  declarations: [SkipComponent],
  imports: [
    CommonModule,
    A11yModule
  ],
  exports: [SkipComponent]
})
export class SkipModule { }
