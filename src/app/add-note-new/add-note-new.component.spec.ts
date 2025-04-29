import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNoteNewComponent } from './add-note-new.component';

describe('AddNoteNewComponent', () => {
  let component: AddNoteNewComponent;
  let fixture: ComponentFixture<AddNoteNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddNoteNewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddNoteNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
