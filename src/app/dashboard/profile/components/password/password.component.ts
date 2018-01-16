import {Component, OnInit} from '@angular/core';
import {ToasterService} from 'angular2-toaster';
import {environment} from '../../../../../environments/environment';
import {HttpRestService} from '../../../../common/services/http-rest.service';

@Component({
    selector: 'app-profile-password',
    templateUrl: 'password.component.html',
    styleUrls: ['password.component.scss']
})
export class ProfilePasswordComponent implements OnInit {

    constructor(private httpRestService: HttpRestService, private toasterService: ToasterService) {
    }

    ngOnInit() {
    }

    public updatePassword(oldPassword, newPassword1, newPassword2, event: Event) {
        event.preventDefault();

        if (newPassword1.value !== newPassword2.value) {
            this.toasterService.pop('error', 'Mot de passe', 'Les 2 champs doivent etre identique');
        } else {
            let body = {'change_password': {'oldPassword': oldPassword.value, 'newPassword': newPassword1.value}};

            this.httpRestService.post(environment.apiUrl + '/me/change-password', body).subscribe(
                response => {
                    this.toasterService.pop('success', 'Mode de passe', 'Changé !');
                },
                error => {
                    this.toasterService.pop('error', 'Mode de passe', 'Echec de la modification !');
                }
            );
        }
    }

}
