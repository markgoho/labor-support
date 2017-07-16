import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-full-screen-phrase',
  styleUrls: ['./full-screen-phrase.component.scss'],
  template: `
    <div class="full-screen">
      <ng-content></ng-content>
    </div>
  `
})
export class FullScreenPhraseComponent {}
