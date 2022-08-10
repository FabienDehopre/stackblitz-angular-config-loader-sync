import { Injectable } from "@angular/core";
import { Config } from "../models/config";

@Injectable()
export class ConfigContainerService<T extends Config = Config> {
  private config?: T;

  getConfig(): T  {
    if (this.config == null) {
      throw new Error('The config is not yet ready.');
    }

    return this.config;
  }

  setConfig(value: T): void {
    this.config = value;
  }
}