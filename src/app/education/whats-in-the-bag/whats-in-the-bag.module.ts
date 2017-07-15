import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WhatsInTheBagRoutingModule } from './whats-in-the-bag-routing.module';
import { WhatsInTheBagComponent } from './whats-in-the-bag.component';

@NgModule({
  imports: [
    CommonModule,
    WhatsInTheBagRoutingModule
  ],
  declarations: [WhatsInTheBagComponent]
})
export class WhatsInTheBagModule { }
