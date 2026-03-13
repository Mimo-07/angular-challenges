import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-card-image',
  imports: [],
  template: `
    <ng-content />
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardImageComponent {}
