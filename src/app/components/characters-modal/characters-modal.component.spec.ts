import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharactersModalComponent } from './characters-modal.component';

describe('CharactersModalComponent', () => {
  let component: CharactersModalComponent;
  let fixture: ComponentFixture<CharactersModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharactersModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharactersModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
