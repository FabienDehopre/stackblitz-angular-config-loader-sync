import { Injectable } from "@angular/core";
import { ConfigContainerService } from "./config-container.service";

@Injectable()
export class ConfigLoaderService {
  constructor(private readonly container: ConfigContainerService) {}

  async initConfig(): Promise<void> {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/1', { method: 'GET' });
    const data = await res.json();
    this.container.setConfig(data);
  }
}