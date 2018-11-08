import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ErrorHandler, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { PhotoComponent } from './gallery/components/photo/photo.component';
import { PhotosComponent } from './gallery/components/photos/photos.component';
import { LoaderComponent } from './shared/loader/loader.component';
import { DogsPhotosComponent } from './gallery/containers/dogs-photos/dogs-photos.component';
import { AuthorPhotosComponent } from './gallery/containers/author-photos/author-photos.component';
import { AppRoutingModule } from './app-routing.module';
import { ModalComponent } from './shared/modal/modal.component';
import { FiltersComponent } from './gallery/components/filters/filters.component';

import { SwingErrorHandlerService } from './core/services/error-handler/swing-error-handler.service';
import { FlickApiInterceptorService } from './core/services/interceptor/flick-api-interceptor.service';

import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { ToastrModule } from 'ngx-toastr';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PhotoComponent,
    PhotosComponent,
    LoaderComponent,
    DogsPhotosComponent,
    AuthorPhotosComponent,
    ModalComponent,
    FiltersComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    InfiniteScrollModule,
    AppRoutingModule,
    ToastrModule.forRoot({
      preventDuplicates: true
    }),
    LeafletModule.forRoot()
  ],
  providers: [
    {
      provide: ErrorHandler,
      useClass: SwingErrorHandlerService
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: FlickApiInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
