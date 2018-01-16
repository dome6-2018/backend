export class User {
    constructor(private _id?: number,
                private _username?: string,
                private _firstname?: string,
                private _lastname?: string,
                private _civility?: number,
                private _photoUrl?: string,
                private _birthDate?: Date,
                private _email?: string,
                private _websiteUrl?: string,
                private _phoneNumber?: string,
                private _password?: string,
                private _enabled?: boolean,
                private _passwordRequestedAt?: Date,
                private _lastLogin?: Date,
                private _addressPart1?: string,
                private _addressPart2?: string,
                private _postalCode?: number) {
    }

    static defaultUser(): User {
        const user = new User();
        user._id = 0;
        user._username = '';
        user._firstname = '';
        user._lastname = '';
        user._civility = 0;
        user._photoUrl = '';
        user._birthDate = new Date();
        user._email = '';
        user._websiteUrl = '';
        user._phoneNumber = '';
        user._password = '';
        user._enabled = false;
        user._passwordRequestedAt = null;
        user._lastLogin = null;
        user._addressPart1 = '';
        user._addressPart2 = '';
        user._postalCode = 0;

        return user;
    }

    deserialize(input): User {
        this._id = input.id;
        this._username = input.username;
        this._firstname = input.firstname;
        this._lastname = input.lastname;
        this._civility = input.civility;
        this._photoUrl = input.photoUrl;
        this._birthDate = new Date(input.birthDate);
        this._email = input.email;
        this._websiteUrl = input.websiteUrl;
        this._phoneNumber = input.phoneNumber;
        this._enabled = input.enabled;
        this._passwordRequestedAt = input.passwordRequestedAt;
        this._lastLogin = input.lastLogin;
        this._addressPart1 = input.addressPart1;
        this._addressPart2 = input.addressPart2;
        this._postalCode = input.postalCode;

        return this;
    }

    toJSON() {
        return {
            'id': this._id,
            'username': this._username,
            'firstname': this._firstname,
            'lastname': this._lastname,
            'civility': this._civility,
            'photoUrl': this._photoUrl,
            'birthDate': new Date(this._birthDate),
            'email': this._email,
            'websiteUrl': this._websiteUrl,
            'phoneNumber': this._phoneNumber,
            'password': this._password,
            'enabled': this._enabled,
            'passwordRequestedAt': this._passwordRequestedAt,
            'lastLogin': this._lastLogin,
            'addressPart1': this._addressPart1,
            'addressPart2': this._addressPart2,
            'postalCode': this._postalCode
        };
    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get username(): string {
        return this._username;
    }

    set username(value: string) {
        this._username = value;
    }

    get firstname(): string {
        return this._firstname;
    }

    set firstname(value: string) {
        this._firstname = value;
    }

    get lastname(): string {
        return this._lastname;
    }

    set lastname(value: string) {
        this._lastname = value;
    }

    get civility(): number {
        return this._civility;
    }

    set civility(value: number) {
        this._civility = value;
    }

    get photoUrl(): string {
        return this._photoUrl;
    }

    set photoUrl(value: string) {
        this._photoUrl = value;
    }

    get birthDate(): Date {
        return this._birthDate;
    }

    set birthDate(value: Date) {
        this._birthDate = value;
    }

    get email(): string {
        return this._email;
    }

    set email(value: string) {
        this._email = value;
    }

    get websiteUrl(): string {
        return this._websiteUrl;
    }

    set websiteUrl(value: string) {
        this._websiteUrl = value;
    }

    get phoneNumber(): string {
        return this._phoneNumber;
    }

    set phoneNumber(value: string) {
        this._phoneNumber = value;
    }

    get enabled(): boolean {
        return this._enabled;
    }

    set enabled(value: boolean) {
        this._enabled = value;
    }

    get passwordRequestedAt(): Date {
        return this._passwordRequestedAt;
    }

    set passwordRequestedAt(value: Date) {
        this._passwordRequestedAt = value;
    }

    get lastLogin(): Date {
        return this._lastLogin;
    }

    set lastLogin(value: Date) {
        this._lastLogin = value;
    }

    get addressPart1(): string {
        return this._addressPart1;
    }

    set addressPart1(value: string) {
        this._addressPart1 = value;
    }

    get addressPart2(): string {
        return this._addressPart2;
    }

    set addressPart2(value: string) {
        this._addressPart2 = value;
    }

    get postalCode(): number {
        return this._postalCode;
    }

    set postalCode(value: number) {
        this._postalCode = value;
    }
}
