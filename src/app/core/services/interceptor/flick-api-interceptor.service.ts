import { Observable } from 'rxjs/internal/Observable';
import { Inject, Injector } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';

import { ToastrService } from 'ngx-toastr';

import { catchError, mergeMap } from 'rxjs/operators';
import { empty, of, throwError } from 'rxjs';

export class FlickApiInterceptorService implements HttpInterceptor {
  toastrService: ToastrService;

  constructor(@Inject(Injector) private injector: Injector) {
    this.toastrService = injector.get(ToastrService);
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req)
      .pipe(
        mergeMap((request: any) => {
          if (request.body && request.body.stat === 'fail') {
            this.toastrService.error(request.body.message, request.body.code);
            return empty();
          }
          return of(request);
        }),
        catchError(err => {
          this.toastrService.error(err.error.message || err.error || 'Unexpected error occurred, try again later.');
          return throwError(err);
        })
      );
  }
}
