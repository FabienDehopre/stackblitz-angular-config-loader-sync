import { APP_INITIALIZER, ModuleWithProviders, NgModule } from '@angular/core';
import { APP_CONFIG } from './injection-token';
import { ConfigLoaderService } from './services/config-loader.service';

export function loadConfig(loader: ConfigLoaderService) {
  return () => {
    return loader.initConfig();
  };
}

@NgModule({})
export class ConfigModule {
  static forRoot(): ModuleWithProviders<ConfigModule> {
    return {
      ngModule: ConfigModule,
      providers: [
        ConfigLoaderService,
        {
          provide: APP_INITIALIZER,
          useFactory: loadConfig,
          multi: true,
          deps: [ConfigLoaderService],
        }
      ],
    };
  }
}
