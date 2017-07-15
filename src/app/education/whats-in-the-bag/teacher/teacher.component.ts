import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teacher',
  styleUrls: ['./teacher.component.scss'],
  template: `
    <app-phrase *ngFor="let situation of situations" [phrase]="situation"></app-phrase>
  `
})
export class TeacherComponent implements OnInit {
  situations = [
    'Wants to try different postions',
    'Her feet are cold',
    'Needs something for concentration',
    'She is discouraged',
    'Wants to freshen up',
    'She is too hot',
    'Hours of massaging',
    'Partner or mom is hungry',
    'Lips are getting chapped',
    'Lots of lower back pain',
    'She finds the hospital noises disturbing',
    'Wants the birth documented',
    'She just vomited',
    'Wants to walk'
  ];

  constructor() {}

  ngOnInit() {}
}
