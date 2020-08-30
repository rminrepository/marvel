import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharaterDescriptionModalComponent } from './charater-description-modal.component';

describe('CharaterDescriptionModalComponent', () => {
  let component: CharaterDescriptionModalComponent;
  let fixture: ComponentFixture<CharaterDescriptionModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharaterDescriptionModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharaterDescriptionModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
