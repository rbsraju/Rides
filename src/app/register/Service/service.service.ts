import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { APP_SERVICE_CONFIG } from 'src/app/AppConfig/appConfig';
import { AppConfig } from 'src/app/AppConfig/appConfig.interface';
import { userDetails } from '../user';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http : HttpClient,
    @Inject(APP_SERVICE_CONFIG) private config: AppConfig,) { }


   // getDetails$=this.http.get<userDetails[]>(this.config.apiEndpoint+'/api/userDetails');
    postDetails(userDetails:userDetails){
      return this.http.post<string>(this.config.apiEndpoint+'/api/userDetails',userDetails);
    }
  }
