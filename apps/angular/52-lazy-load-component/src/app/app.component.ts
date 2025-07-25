import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
    <div class="h-screen bg-gray-500">
      <router-outlet />
      <button
        class="rounded-sm border border-blue-500 bg-blue-300 p-2"
        (click)="setRoute()">
        Load Top
      </button>
    </div>
  `,
  standalone: false,
})
export class AppComponent {
  readonly #router = inject(Router);

  setRoute(): void {
    this.#router.navigate(['top']);
  }
}
