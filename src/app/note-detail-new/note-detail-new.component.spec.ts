import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteDetailNewComponent } from './note-detail-new.component';

describe('NoteDetailNewComponent', () => {
  let component: NoteDetailNewComponent;
  let fixture: ComponentFixture<NoteDetailNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoteDetailNewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoteDetailNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
