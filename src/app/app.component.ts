import { Component, Inject, OnInit, VERSION } from '@angular/core';
import { APP_CONFIG } from './config/injection-token';
import { Config } from './config/models/config';
import { ConfigContainerService } from './config/services/config-container.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit  {
  name = 'Angular ' + VERSION.major;
  config?: Config;
  message?: string;

  constructor(
    private readonly configContainer: ConfigContainerService,
    @Inject(APP_CONFIG) readonly config2: Config
  ) {}

  ngOnInit() {
    /*try {
      this.config = this.configContainer.getConfig();
    } catch (err) {
      this.message = err.message;
    }*/
  }
}
