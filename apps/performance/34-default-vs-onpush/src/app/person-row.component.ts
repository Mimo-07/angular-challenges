import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { CDFlashingDirective } from '../../../../../libs/shared/directives/src';

@Component({
  selector: 'person-row',
  imports: [CDFlashingDirective, MatListModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <mat-list-item cd-flash class="text-orange-500">
      <div class="flex justify-between">
        <h3 title="Name">
          {{ name() }}
        </h3>
      </div>
    </mat-list-item>
  `,
})
export class PersonRowComponent {
  name = input.required<string>();
}
