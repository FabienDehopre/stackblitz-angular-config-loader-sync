import { Injectable } from '@angular/core';
import { Config } from '../models/config';

@Injectable()
export class ConfigLoaderService<T extends Config = Config> {
  private _config?: T;

  get config(): T {
    if (this._config == null) {
      throw new Error('The config is not yet loaded.');
    }

    return this._config;
  }

  async initConfig(): Promise<void> {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
      method: 'GET',
    });
    this._config = (await res.json()) as T;
  }
}
