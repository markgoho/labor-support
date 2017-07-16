import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teacher',
  styleUrls: ['./teacher.component.scss'],
  template: `
    <div class="phrases-container">
      <app-phrase 
        class="phrase"
        *ngFor="let situation of situations; let i = index"
        [phrase]="situation" 
        (click)="setPhrase(i)">
      </app-phrase>
    </div>
    <app-full-screen-phrase 
      (click)="selected = false"
      *ngIf="selected" 
      class="selected-phrase">{{selectedPhrase}}
    </app-full-screen-phrase>
  `
})
export class TeacherComponent {
  selected = false;
  selectedPhrase: string;
  situations: string[] = [
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
  setPhrase(index: number) {
    this.selected = true;
    this.selectedPhrase = this.situations[index];
  }
}
