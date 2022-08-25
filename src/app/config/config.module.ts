import { APP_INITIALIZER, ModuleWithProviders, NgModule } from '@angular/core';
import { CanActivateGuard } from './services/can-activate.guard';
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
        },
        CanActivateGuard,
      ],
    };
  }
}
