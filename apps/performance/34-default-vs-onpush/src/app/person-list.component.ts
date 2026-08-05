import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { TitleCasePipe } from '@angular/common';
import { MatChipsModule } from '@angular/material/chips';
import { MatListModule } from '@angular/material/list';
import { InputFieldComponent } from './input-field.component';
import { PersonRowComponent } from './person-row.component';

@Component({
  selector: 'app-person-list',
  imports: [
    MatListModule,
    MatChipsModule,
    TitleCasePipe,
    InputFieldComponent,
    PersonRowComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <h1 class="text-center font-semibold" title="Title">
      {{ title() | titlecase }}
    </h1>

    <input-field (emitName)="processName($event)" />

    <mat-list class="flex w-full">
      @if (names()?.length === 0) {
        <div class="empty-list-label">Empty list</div>
      }
      @for (name of names(); track name) {
        <person-row [name]="name" />
      }
      @if (names()?.length !== 0) {
        <mat-divider></mat-divider>
      }
    </mat-list>
  `,
  host: {
    class: 'w-full flex flex-col items-center',
  },
})
export class PersonListComponent {
  names = input<string[]>([]);
  title = input('');

  processName(name: string) {
    this.names()?.unshift(name);
  }
}
