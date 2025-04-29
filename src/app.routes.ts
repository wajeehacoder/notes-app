import { Routes } from '@angular/router';
import { AddNoteNewComponent } from './app/add-note-new/add-note-new.component';
import { NotesListComponent } from './app/notes-list/notes-list.component';
import { NoteDetailNewComponent } from './app/note-detail-new/note-detail-new.component';

export const routes: Routes = [
  { path: '', component: NotesListComponent },
  { path: 'new', component: AddNoteNewComponent },
  { path: 'notes/:id', component: NoteDetailNewComponent },
];
