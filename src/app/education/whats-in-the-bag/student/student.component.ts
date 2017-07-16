import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  styleUrls: ['./student.component.scss'],
  template: `
    <div class="phrases-container">
      <app-phrase
        class="phrase"
        *ngFor="let item of items; let i = index" 
        [phrase]="item" 
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
export class StudentComponent {
  selected = false;
  selectedPhrase: string;
  items: string[] = [
    'Birth Ball, The Rope, Rebozo, Gardener knee pad, Yoga mat, etc.',
    'Socks',
    'Focal Point / Picture / LED candle / Something for the baby',
    'Affirmations',
    'Toothbrush / paste, hairbrush',
    'Fan, cool cloth',
    'Oil, lotion, massage tools',
    'Light snacks',
    'Lip gloss',
    'Hot/Cold Packs, massager (tennis ball)',
    'Music player with earbuds',
    'Camera',
    'Cloth, mouthwash',
    'Comfy shoes / slippers'
  ];
  setPhrase(index: number) {
    this.selected = true;
    this.selectedPhrase = this.items[index];
  }
}
