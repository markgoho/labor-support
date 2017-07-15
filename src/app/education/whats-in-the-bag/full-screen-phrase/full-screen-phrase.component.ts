import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-full-screen-phrase',
  styleUrls: ['./full-screen-phrase.component.scss'],
  template: `
    <div>{{phrase}}</div>
  `
})
export class FullScreenPhraseComponent implements OnInit {
  @Input() phrase: string;
  constructor() {}

  ngOnInit() {}
}
