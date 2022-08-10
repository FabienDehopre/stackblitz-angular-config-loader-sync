import { Component, Inject, VERSION } from '@angular/core';
import { APP_CONFIG } from './config/injection-token';
import { Config } from './config/models/config';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  constructor(
    @Inject(APP_CONFIG) readonly config: Config
  ) {}
}
