import { CommonModule } from '@angular/common';
import { Component, ContentChild, input, TemplateRef } from '@angular/core';
import { CardType } from '../../model/card.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  imports: [CommonModule],
  styleUrl: './card.component.css',
})
export class CardComponent {
  readonly list = input<any[] | null>(null);
  readonly type = input.required<CardType>();
  readonly customClass = input('');

  @ContentChild('itemTemplate', { read: TemplateRef })
  itemTemplate?: TemplateRef<any>;
}
