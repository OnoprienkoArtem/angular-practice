import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';

import { HomePageComponent } from '../home-page/home-page.component';
import { AboutPageComponent } from '../about-page/about-page.component';
import { LayoutComponent } from './layout/layout.component';

@NgModule({
  declarations: [LayoutComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '', component: LayoutComponent, children: [
          { path: '', redirectTo: '/home', pathMatch: 'full' },
          { path: 'home', component: HomePageComponent },
          { path: 'about', component: AboutPageComponent }
        ]
      }
    ])
  ],
  exports: [RouterModule]
})
export class LayoutModule { }
