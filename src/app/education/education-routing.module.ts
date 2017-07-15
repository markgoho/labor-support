import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EducationComponent } from './education.component';

const routes: Routes = [
  { path: '', component: EducationComponent },
  {
    path: 'whats-in-the-bag',
    loadChildren:
      'app/education/whats-in-the-bag/whats-in-the-bag.module#WhatsInTheBagModule'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EducationRoutingModule {}
