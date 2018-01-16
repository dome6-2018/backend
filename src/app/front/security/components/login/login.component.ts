import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ToasterService} from 'angular2-toaster';
import {environment} from '../../../../../environments/environment';
import {HttpRestService} from '../../../../common/services/http-rest.service';
import {TokenService} from '../../../../common/services/token.service';
import {UserService} from '../../../../common/services/user.service';

@Component({
    moduleId: module.id,
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.scss']
})
export class LoginComponent implements OnInit {
    model: any = {};
    returnUrl: string;

    constructor(private route: ActivatedRoute,
                private router: Router,
                private tokenService: TokenService,
                private userService: UserService,
                private httpRestService: HttpRestService,
                private toasterService: ToasterService) {
    }

    ngOnInit() {
        // httpGet return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';

        // Suppression des données utilisateur au cas où elles existent encore
        this.userService.delete();
    }

    login(event, username, password) {
        event.preventDefault();

        const formData = new FormData();
        formData.append('username', username);
        formData.append('password', password);

        this.httpRestService.postFormData(environment.apiUrl + '/login', formData).subscribe(
            response => {
                this.tokenService.set(response.token);
                this.router.navigate(['app/home']);

            },
            error => {
                this.toasterService.pop('error', 'Connexion', 'Echec de la connexion !');
                console.log(error);
            }
        );
    }
}
