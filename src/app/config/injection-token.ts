import { InjectionToken } from "@angular/core";
import { Config } from "./models/config";

export const APP_CONFIG = new InjectionToken<Config>('APP_CONFIG');