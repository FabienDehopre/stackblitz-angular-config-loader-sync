import { Inject, Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
} from '@angular/router';
import { APP_CONFIG } from '../injection-token';

@Injectable()
export class CanActivateGuard implements CanActivate {
  constructor(@Inject(APP_CONFIG) private readonly config: unknown) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    console.log('canActivate', { route, state, config: this.config });
    return true;
  }
}
