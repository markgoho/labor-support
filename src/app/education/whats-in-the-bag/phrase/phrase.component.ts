import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-phrase',
  styleUrls: ['./phrase.component.scss'],
  template: `{{phrase}}`
})
export class PhraseComponent {
  @Input() phrase: string;
}
