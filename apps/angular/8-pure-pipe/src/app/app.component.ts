import { Component } from '@angular/core';
import { CustomPipe } from './custom.pipe';

@Component({
  selector: 'app-root',
  template: `
    @for (person of persons; track person) {
      {{ person | custom: $index }}
    }
  `,
  imports: [CustomPipe],
})
export class AppComponent {
  persons = ['toto', 'jack'];
}
