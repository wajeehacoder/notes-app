import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter, Routes } from '@angular/router';
import { NotesListComponent } from './app/notes-list/notes-list.component';
import { AddNoteNewComponent } from './app/add-note-new/add-note-new.component';
import { NoteDetailNewComponent } from './app/note-detail-new/note-detail-new.component';

const routes: Routes = [
  { path: '', component: NotesListComponent },
  { path: 'new', component: AddNoteNewComponent },
  { path: 'notes/:id', component: NoteDetailNewComponent },
];

bootstrapApplication(AppComponent, { providers: [provideRouter(routes)] });