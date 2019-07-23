import {Injectable} from '@angular/core'
import{
    HttpRequest,
    HttpEvent,
    HttpHandler,
    HttpInterceptor

}from '@angular/common/http';
import {AuthService} from '../auth/auth.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TokenInterceptor implements HttpInterceptor
{
constructor(public auth:AuthService){}
intercept(req: HttpRequest<any>, next: HttpHandler):Observable<HttpEvent<any>> {
    
    const token=localStorage.getItem('token');

    if(token)
    {
        const cloned=req.clone({
            headers:req.headers.set("Authorization","Bearer "+token)
        });
        return next.handle(cloned);

    }else{
        return next.handle(req)
    }

   /* const custrequest = request.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
    return next.handle(custrequest);*/
}

}
