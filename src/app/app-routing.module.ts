import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { DogsPhotosComponent } from './gallery/containers/dogs-photos/dogs-photos.component';
import { AuthorPhotosComponent } from './gallery/containers/author-photos/author-photos.component';

const routes: Routes = [
  { path: '', redirectTo: '/dogs', pathMatch: 'full' },
  { path: 'dogs', component: DogsPhotosComponent },
  { path: 'author/:id', component: AuthorPhotosComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
