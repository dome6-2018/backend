import {Component, Input} from '@angular/core';
import {User} from '../../../common/models/user';
import {TokenService} from '../../../common/services/token.service';
import {UserService} from '../../../common/services/user.service';

@Component({
    selector: 'app-header',
    templateUrl: 'app-header.component.html',
    styleUrls: ['app-header.component.scss']
})
export class AppHeaderComponent {

    @Input() user: User;

    constructor(private tokenService: TokenService,
                private userService: UserService) {
    }

    public logout(): void {
        this.tokenService.delete();
        this.userService.delete();
    }
}
