import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  input,
  TemplateRef,
} from '@angular/core';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListItemComponent {
  @ContentChild('deleteTemplate', { read: TemplateRef })
  deleteTemplate?: TemplateRef<any>;

  readonly id = input.required<number>();
  readonly name = input.required<string>();
}
