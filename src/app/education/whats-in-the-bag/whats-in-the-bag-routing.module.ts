import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WhatsInTheBagComponent } from './whats-in-the-bag.component';

const routes: Routes = [{ path: '', component: WhatsInTheBagComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WhatsInTheBagRoutingModule {}
