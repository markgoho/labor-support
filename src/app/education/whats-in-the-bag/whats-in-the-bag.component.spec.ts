import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatsInTheBagComponent } from './whats-in-the-bag.component';

describe('WhatsInTheBagComponent', () => {
  let component: WhatsInTheBagComponent;
  let fixture: ComponentFixture<WhatsInTheBagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhatsInTheBagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatsInTheBagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
