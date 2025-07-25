import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlaceholderComponent } from './placeholder.component';

const routes: Routes = [
  {
    path: 'placeholder',
    component: PlaceholderComponent,
  },
  {
    path: 'top',
    loadComponent: () => import('./top.component').then((t) => t.TopComponent),
  },
  {
    path: '',
    redirectTo: 'placeholder',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
