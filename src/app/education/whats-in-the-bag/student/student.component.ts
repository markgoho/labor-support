import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  styleUrls: ['./student.component.scss'],
  template: `
    <app-phrase *ngFor="let item of items" [phrase]="item"></app-phrase>
  `
})
export class StudentComponent implements OnInit {
  items = [
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
  constructor() {}

  ngOnInit() {}
}
