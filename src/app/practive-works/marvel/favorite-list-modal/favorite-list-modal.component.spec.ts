import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteListModalComponent } from './favorite-list-modal.component';

describe('FavoriteListModalComponent', () => {
  let component: FavoriteListModalComponent;
  let fixture: ComponentFixture<FavoriteListModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavoriteListModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoriteListModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
