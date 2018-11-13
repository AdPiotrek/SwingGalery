import { ErrorHandler, Inject, Injector } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { environment } from '../../../../environments/environment';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { ErrorLog } from './error-log';

export class SwingErrorHandlerService implements ErrorHandler {
  private http: HttpClient;

  constructor(@Inject(Injector) private injector: Injector) {
    this.http = injector.get(HttpClient);
  }

  handleError(error: Error | HttpErrorResponse): void {
    if (!environment.production) {
      console.error(error);
    }

    let parsedError: ErrorLog;
    // Of course we can put here as many information as we want, like browser, system etc.
    if (error instanceof HttpErrorResponse) {
      parsedError = {
        name: error.name || null,
        appId: 'SwingGallery',
        time: new Date().getTime(),
        location: this.injector.get(LocationStrategy),
        url: location instanceof PathLocationStrategy ? location.path() : '',
        status: error.status || null,
        message: error.message || error.toString() || '',
        serverMessage: error.error.message || error.message || error || 'No server error'
      };
    } else {
      parsedError = {
        message: error.stack,
        appId: 'SwingGallery',
        time: new Date().getTime(),
        location: this.injector.get(LocationStrategy),
      };
    }
    // request is not send not to throw error

    this.http.post('example server url', parsedError);
    // .subscribe()

  }



}
