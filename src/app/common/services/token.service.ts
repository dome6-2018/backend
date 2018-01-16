import {Injectable} from '@angular/core';

@Injectable()
export class TokenService {

    constructor() {
    }

    /**
     * Register the token session in memory
     *
     * @param token
     */
    public set(token: string) {
        localStorage.setItem('token', token);
    }

    /**
     * Retrive the token session from the memory
     *
     * @returns {string|null}
     */
    public get(): string {
        return localStorage.getItem('token');
    }

    /**
     * Remove the token session in memory
     */
    public delete(): void {
        localStorage.removeItem('token');
    }

    /**
     * Check is the token is present
     *
     * @returns {boolean}
     */
    public isPresent(): boolean {
        return (localStorage.getItem('token') != null);
    }
}
