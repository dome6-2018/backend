import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {User} from '../../common/models/user';
import {UserService} from '../../common/services/user.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: 'layout.component.html',
    styleUrls: ['layout.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class DashboardLayoutComponent implements OnInit {

    user: User = new User();

    constructor(private userService: UserService) {
    }

    ngOnInit(): void {
        this.userService.initService();
        this.userService.fetchData();

        // get date
        this.user = this.userService.getUser();

        // subscribe to the changes
        this.userService.itemValue.subscribe((nextValue: User) => {
            this.user.deserialize(nextValue);
        });
    }
}
