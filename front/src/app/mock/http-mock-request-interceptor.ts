import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from "@angular/common/http";
import {Observable, of, throwError} from "rxjs";
import {environment} from "../../environments/environment";
import {MOCK_RESPONSES} from "./mock-responses";

export const isMock = environment.mock;

export class HttpMockRequestInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (isMock) {
      console.log("intercepted");
      console.log("url in question: " + req.url);
      for (const mock of MOCK_RESPONSES) {
        console.log("mock.path: " + mock.path);
        const regex = new RegExp(mock.path,"g");
        if (regex.test(req.url)) {
          console.log('Loaded from json : ' + req.url);
          if(mock.status >= 400) {
            return throwError(mock.body);
          } else {
            return of(new HttpResponse({
              status:mock.status||200,
              body:(mock.body as any)
            }));
          }
        }
      }
      console.log('Cannot locate mock for url: ' + req.url);
      return of(new HttpResponse({
        status:500,
        body:([] as any)
      }));
    } else {
      return next.handle(req);
    }
  }
}
