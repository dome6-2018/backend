import {CanActivate, Router} from '@angular/router';
import {Injectable} from '@angular/core';
import {TokenService} from './token.service';

@Injectable()
export class CanActivateAuthGuard implements CanActivate {

    constructor(private router: Router, private tokenService: TokenService) {

    }

    canActivate() {
        if (this.tokenService.isPresent()) {
            return true;
        }

        // Redirect the user before denying them access to this route
        this.router.navigate(['/login']);

        return false;
    }
}
