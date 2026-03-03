/* eslint-disable @angular-eslint/component-selector */
import { Component, input } from '@angular/core';

@Component({
  selector: 'text',
  template: `
    <p>
      <ng-content />
    </p>
  `,
  styles: `
    p {
      font-size: var(--font-size, 10px);
      color: var(--color, black);
    }
  `,
})
export class TextComponent {
  font = input(10);
  color = input('black');
}
