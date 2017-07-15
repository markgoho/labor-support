import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-phrase',
  styleUrls: ['./phrase.component.scss'],
  template: `
    <div>{{phrase}}</div>
  `
})
export class PhraseComponent implements OnInit {
  @Input() phrase: string;
  constructor() {}

  ngOnInit() {}
}
