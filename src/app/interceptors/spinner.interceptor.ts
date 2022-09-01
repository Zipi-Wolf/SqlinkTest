import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { Injectable, Injector } from '@angular/core';
import { Observable } from "rxjs";
import { filter, map ,catchError} from "rxjs/operators";
import { SpinnerService } from "../services/spinner.service";

 
//@Injectable()
//export class SpinnerInterceptor implements HttpInterceptor {
 

    // constructor(private injector: Injector,private spinnerService:SpinnerService) { }


    // intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        // if (request.method === "GET" || request.method === "POST" || request.method==="PUT") 
        // {
        // this.spinnerService.showSpinner.next(true);
        // return next.handle(request)
        //   .pipe(catchError((err) => {
        //     this.spinnerService.showSpinner.next(false);
        //     return err;
        //   }))
        //   .pipe(map<HttpEvent<any>, any>((evt: HttpEvent<any>) => {
        //     if (evt instanceof HttpResponse) {
        //       debugger
        //       this.spinnerService.showSpinner.next(false);
        //     }
        //     return evt;
        //   }));
//         }
//         else
//         return next.handle(request)
//     }
// }