import { InjectionToken } from "@angular/core";
import { AppConfig } from './appconfig';

export const APP_CONFIG = new InjectionToken<AppConfig>('app config');

export const APP_VALUE: AppConfig = {
  apiEndpoint : 'https://jsonplaceholder.typicode.com/',
  title: 'Angular'
}
