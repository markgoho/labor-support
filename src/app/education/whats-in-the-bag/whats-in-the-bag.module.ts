import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WhatsInTheBagRoutingModule } from './whats-in-the-bag-routing.module';
import { WhatsInTheBagComponent } from './whats-in-the-bag.component';
import { TeacherComponent } from './teacher/teacher.component';
import { StudentComponent } from './student/student.component';
import { PhraseComponent } from './phrase/phrase.component';
import { FullScreenPhraseComponent } from './full-screen-phrase/full-screen-phrase.component';

@NgModule({
  imports: [
    CommonModule,
    WhatsInTheBagRoutingModule
  ],
  declarations: [WhatsInTheBagComponent, TeacherComponent, StudentComponent, PhraseComponent, FullScreenPhraseComponent]
})
export class WhatsInTheBagModule { }
