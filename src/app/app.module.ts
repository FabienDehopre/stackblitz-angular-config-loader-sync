import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ConfigModule } from './config/config.module';
import { RouterModule, Routes } from '@angular/router';
import { CanActivateGuard } from './config/services/can-activate.guard';

const ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HelloComponent,
    canActivate: [CanActivateGuard],
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ConfigModule.forRoot(),
    // /!\ ATTENTION: initialNavigation cannot be set to "enabledBlocking"
    RouterModule.forRoot(ROUTES),
  ],
  declarations: [AppComponent, HelloComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
