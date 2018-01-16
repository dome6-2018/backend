import {Injectable} from '@angular/core';
import {HttpHeaders, HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable} from 'rxjs/Rx';
import {TokenService} from './token.service';
import {Router} from '@angular/router';

const APPLICATION_JSON = 'application/json';
const APPLICATION_FORM_URLENCODED = 'application/x-www-form-urlencoded';
const MULTIPART_FORM_DATA = 'multipart/form-data';

@Injectable()
export class HttpRestService {

    static NO_HEADER = false;

    constructor(private http: HttpClient,
                private tokenService: TokenService,
                private router: Router) {
    }

    /**
     * Génère une requête GET
     *
     * @param url
     * @param addHeader
     * @returns {Observable<any>}
     */
    public get(url: string, addHeader = true): Observable<any> {
        let httpHeaders = new HttpHeaders();
        if (addHeader) {
            httpHeaders = this.buildRequestHeaders();
        }

        return this.http.get(url, {headers: httpHeaders})
            .catch((httpError: HttpErrorResponse) => this.retriveHttpErrorCode(httpError));
    }

    /**
     * Génère une requête POST
     *
     * @param url
     * @param body  JSON  e.g. '{"value":"1"}'
     * @param contentType type de requête POST
     * @returns {Observable<any>}
     */
    public post(url: string, body: any, contentType = APPLICATION_JSON): Observable<any> {
        return this.http.post(url, body, {headers: this.buildRequestHeaders(contentType)})
            .catch((httpError: HttpErrorResponse) => this.retriveHttpErrorCode(httpError));
    }

    /**
     * Génère une requête POST
     *
     * @param url
     * @param formData FormData
     * @returns {Observable<any>}
     */
    public postFormData(url: string, formData: FormData): Observable<any> {
        return this.post(url, formData, MULTIPART_FORM_DATA);
    }

    /**
     * Génère une requête PUT
     *
     * @param {string} url
     * @param body
     * @returns {Observable<any>}
     */
    public put(url: string, body: any = null): Observable<any> {
        return this.http.put(url, body ? JSON.stringify(body) : null, {headers: this.buildRequestHeaders(APPLICATION_JSON)})
            .catch((httpError: HttpErrorResponse) => this.retriveHttpErrorCode(httpError));
    }

    /**
     * Génère une requête PATCH
     *
     * @param {string} url
     * @param body
     * @returns {Observable<any>}
     */
    public patch(url: string, body: any): Observable<any> {
        return this.http.patch(url, JSON.stringify(body), {headers: this.buildRequestHeaders(APPLICATION_JSON)})
            .catch((httpError: HttpErrorResponse) => this.retriveHttpErrorCode(httpError));
    }

    /**
     * Génère une requête DELETE
     *
     * @param url
     * @returns {Observable<any>}
     */
    public delete(url: string): Observable<any> {
        return this.http.delete(url, {headers: this.buildRequestHeaders(APPLICATION_JSON)})
            .catch((httpError: HttpErrorResponse) => this.retriveHttpErrorCode(httpError));
    }

    /**
     * Keep up to date the content header
     * add or remove the token of the future http request
     */
    private buildRequestHeaders(contentType?: string): HttpHeaders {
        let httpHeaders = new HttpHeaders();

        if (this.tokenService.isPresent()) {
            httpHeaders = httpHeaders.append('Authorization', 'Bearer ' + this.tokenService.get());
        }
        if (contentType && contentType !== 'multipart/form-data') {
            httpHeaders = httpHeaders.append('Content-Type', contentType);
        }

        return httpHeaders;
    }

    /**
     * Return the error of an http request
     *
     * @param httpError
     * @returns {any}
     */
    private retriveHttpErrorCode(httpError: HttpErrorResponse): Observable<number> {
        if (httpError.status === 401) {
            this.tokenService.delete();
            this.router.navigate(['login']);
        }

        return Observable.throw(httpError.status);
    }
}
