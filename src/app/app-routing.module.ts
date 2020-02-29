import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';


const routes: Routes = [
  {
    path: '', component: MainComponent, children: [
      { path: '', redirectTo: '/', pathMatch: 'full' },
      { path: '', component: MainComponent }
    ]
  },
  {
    path: 'layout', loadChildren: './layout/layout.module#LayoutModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
