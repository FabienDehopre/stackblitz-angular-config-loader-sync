import { inject, InjectionToken } from '@angular/core';
import { ConfigLoaderService } from './services/config-loader.service';

export const APP_CONFIG = new InjectionToken<unknown>(
  'APP_CONFIG',
  {
    providedIn: 'root',
    factory: () => {
      const loader = inject(ConfigLoaderService);
      return loader.config;
    }
  }
);
