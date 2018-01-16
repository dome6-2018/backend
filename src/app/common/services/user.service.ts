import {Injectable} from '@angular/core';
import {HttpRestService} from './http-rest.service';
import {environment} from '../../../environments/environment';
import {User} from '../models/user';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class UserService {
    itemValue = new Subject();

    constructor(private httpRestService: HttpRestService) {
    }

    /**
     * Initialize the service to never have a null User
     * Must be call first
     */
    public initService() {
        this.set(User.defaultUser());
    }

    /**
     * Register the user data in memory
     *
     * @param callback additional actions to execute
     */
    public fetchData(callback?: () => void) {
        this.httpRestService.get(environment.apiUrl + '/me').subscribe(
            user => {
                if (user != null) {
                    this.set(user);
                }
                if (callback !== undefined) {
                    callback();
                }
            }, err => {
                console.log('fetchUserData', err);
            }
        );
    }

    /**
     * Remove the user data from memory
     */
    public delete(): void {
        localStorage.removeItem('user');
    }

    /**
     * Set user information session in memory
     *
     * @param user
     */
    public set(user: User) {
        this.itemValue.next(user); // this will make sure to tell every subscriber about the change.
        localStorage.setItem('user', JSON.stringify(user));
    }

    /**
     * Retrive user information session from localStorage
     *
     * @param user
     */
    public getUser(): User {
        return new User().deserialize(JSON.parse(localStorage.getItem('user')));
    }

    /**
     * Check if the user data is present
     *
     * @returns {boolean}
     */
    public isPresent(): boolean {
        return (localStorage.getItem('user') != null);
    }
}
