import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { loginInfo } from '../login';
import { Observable, catchError, map, of, shareReplay } from 'rxjs';
import { APP_SERVICE_CONFIG } from 'src/app/AppConfig/appConfig';
import { AppConfig } from 'src/app/AppConfig/appConfig.interface';

@Injectable({
  providedIn: 'root',
})
export class LoginServiceService {
  constructor(
    private http: HttpClient,
    @Inject(APP_SERVICE_CONFIG) private config: AppConfig
  ) {}
  //loginStream$=this.http.post<string>(this.config.apiEndpoint+'/api/Authentication/GetToken',login);
  login:loginInfo[]=[];

  getAccess$=this.http.get<string>(this.config.apiEndpoint + '/api/UserDetails').pipe(
    shareReplay(1));
  


  
  getToken(log: loginInfo) {
    //var headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http
      .post<string>(
        this.config.apiEndpoint + '/api/Authentication/GetToken',
        log
      )
      
  }

  getUserDetails() {

    return this.http.get<string>(this.config.apiEndpoint + '/api/UserDetails')
}
}
