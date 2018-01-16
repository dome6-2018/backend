import {Component, OnInit} from '@angular/core';
import {DomSanitizer, SafeUrl} from '@angular/platform-browser';
import {ToasterService} from 'angular2-toaster';
import {environment} from '../../../../../environments/environment';
import {User} from '../../../../common/models/user';
import {HttpRestService} from '../../../../common/services/http-rest.service';
import {UserService} from '../../../../common/services/user.service';

@Component({
    selector: 'app-profile-infos',
    templateUrl: 'infos.component.html',
    styleUrls: ['infos.component.scss']
})
export class ProfileInfosComponent implements OnInit {
    public profile: User = null;
    private _tempPhotoSafe: SafeUrl = null;
    private photoFile: File;

    constructor(private httpRestService: HttpRestService,
                private toasterService: ToasterService,
                private sanitizer: DomSanitizer,
                private userService: UserService) {
    }

    // PHOTO
    public get tempPhoto() {
        return this._tempPhotoSafe;
    }

    ngOnInit() {
        this.userService.fetchData(() => {
            this.profile = this.userService.getUser();
        });
    }

    /**
     * Valide le formulaire de données du profil
     */
    public validateButton(): void {
        if (this.profile.addressPart1 && this.profile.firstname && this.profile.lastname && this.profile.birthDate
            && this.profile.username && this.profile.postalCode) {
            this.sendProfileUpdate();
        } else {
            this.toasterService.pop('warning', 'Profil', 'Les champs marqués d\'un (*) sont obligatoires');
        }
    }

    uploadPhotoListener($event): void {
        this.uploadPhoto($event.target);
    }

    /**
     * Charge l'image de profil pour une validation visuelle de l'utilisateur
     *
     * @param form
     */
    uploadPhoto(form: any): void {
        this.photoFile = form.files[0];
        const myReader: FileReader = new FileReader();

        myReader.onloadend = (e) => {
            this._tempPhotoSafe = this.sanitizer.bypassSecurityTrustUrl(myReader.result);
        };
        myReader.readAsDataURL(this.photoFile);
    }

    /**
     * Supprime l'image temporaire ou celle du serveur
     */
    public deleteImage() {
        if (this._tempPhotoSafe == null) {
            this.httpRestService.delete(environment.apiUrl + '/me/photo').subscribe(
                () => {
                    // TODO Optimisation possible
                    this.userService.fetchData(() => {
                        this.profile = this.userService.getUser();
                        this._tempPhotoSafe = null;
                    });
                    this.toasterService.pop('success', 'Image de profil', 'Votre photo de profil a bien été supprimée');
                },
                err => {
                    this.toasterService.pop('error', 'Image de profil', 'Echec de la suppression');
                }
            );
        } else {
            this._tempPhotoSafe = null;
        }
    }

    /**
     * Envoi du formulaire contenant les données du profil
     */
    private sendProfileUpdate(): void {
        const body = {'user': this.profile};

        this.httpRestService.patch(environment.apiUrl + '/me', body).subscribe(
            () => {
                // save the modified user profile to the localStorage
                this.userService.set(this.profile);
                this.toasterService.pop('success', 'Profil', 'Votre profil a bien été mis à jour');
            },
            err => {
                this.toasterService.pop('error', 'Profil', 'Echec de la mise à jour');
                console.log(err);
            }
        );
    }

    /**
     * Envoi la photo de profil au serveur
     */
    private sendPhotoProfile(): void {
        const formData = new FormData();
        formData.append('user_photo[photo]', this.photoFile);

        this.httpRestService.postFormData(environment.apiUrl + '/me/photo', formData).subscribe(
            () => {
                // TODO Optimisation possible
                this.userService.fetchData(() => {
                    this.profile = this.userService.getUser();
                    this._tempPhotoSafe = null;
                });
                this.toasterService.pop('success', 'Image de profil', 'Votre photo de profil à bien été mise à jour');
            }, err => {
                this.toasterService.pop('error', 'Image de profil', 'Echec de la mise à jour');
            }
        );
    }
}
