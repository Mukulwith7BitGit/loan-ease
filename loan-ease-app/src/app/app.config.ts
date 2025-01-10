import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { appRoutes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [appRoutes, provideHttpClient(), provideZoneChangeDetection({ eventCoalescing: true })]
};
