import { APP_INITIALIZER, ModuleWithProviders, NgModule } from "@angular/core";
import { APP_CONFIG } from "./injection-token";
import { ConfigContainerService } from "./services/config-container.service";
import { ConfigLoaderService } from "./services/config-loader.service";

export function loadConfig(loader: ConfigLoaderService) {
  return () => {
    return loader.initConfig();
  };
} 

export function getConfig(container: ConfigContainerService) {
  return container.getConfig();
}

@NgModule({})
export class ConfigModule {
  static forRoot(): ModuleWithProviders<ConfigModule> {
    return {
      ngModule: ConfigModule,
      providers: [
        ConfigLoaderService,
        ConfigContainerService,
        { provide: APP_INITIALIZER, useFactory: loadConfig, multi: true, deps: [ ConfigLoaderService] },
        { provide: APP_CONFIG, useFactory: getConfig, deps: [ConfigContainerService]}
      ],
    };
  }
}