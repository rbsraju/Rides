import { AppConfig } from "./appConfig.interface";
import {environment} from '../../environments/environment.development';
import { InjectionToken } from "@angular/core";
export const APP_SERVICE_CONFIG = new InjectionToken<AppConfig>('APP_SERVICE_CONFIG');
export const APP_CONFIG:AppConfig={
    apiEndpoint: environment.apiUrl,
};