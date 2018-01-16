import {Component, OnInit} from '@angular/core';
import {UserService} from '../../common/services/user.service';
import {User} from '../../common/models/user';

@Component({
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.scss']
})
export class HomeComponent implements OnInit {

    user: User = null;

    constructor(private userService: UserService) {
    }

    ngOnInit(): void {
        this.user = this.userService.getUser();

        // subscribe to the changes
        this.userService.itemValue.subscribe((nextValue: User) => {
            this.user = nextValue;
        });
    }
}
