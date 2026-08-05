import { ChangeDetectionStrategy, Component, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CDFlashingDirective } from '../../../../../libs/shared/directives/src';

@Component({
  imports: [
    MatInputModule,
    FormsModule,
    CDFlashingDirective,
    MatFormFieldModule,
  ],
  selector: 'input-field',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <mat-form-field class="w-4/5" cd-flash>
      <input
        placeholder="Add one member to the list"
        matInput
        type="text"
        [(ngModel)]="label"
        (keydown)="handleKey($event)" />
    </mat-form-field>
  `,
})
export class InputFieldComponent {
  label = '';
  emitName = output<string>();

  handleKey(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.emitName.emit(this.label);
    }
  }
}
