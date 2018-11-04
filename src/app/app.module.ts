import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { GalleryContainerComponent } from './gallery/gallery-container/gallery-container.component';
import { HeaderComponent } from './gallery/header/header.component';
import { PhotoComponent } from './gallery/photo/photo.component';
import { PhotosComponent } from './gallery/photos/photos.component';
import { MapComponent } from './gallery/map/map.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    GalleryContainerComponent,
    HeaderComponent,
    PhotoComponent,
    PhotosComponent,
    MapComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    InfiniteScrollModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
