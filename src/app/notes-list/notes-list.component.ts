import { Component } from '@angular/core';
import { NOTES } from '../notes';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.css'],
  imports: [RouterModule],
})
export class NotesListComponent {
  notes = NOTES;

  show(title: string) {
    alert(title);
  }
}
