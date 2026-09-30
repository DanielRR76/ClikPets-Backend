import { Email } from '@domain/Email';
import { Password } from '@domain/Password';
import { MalformedRequestError } from '@errors/MalformedRequestError';

export class LoginRequestDTO {
    readonly email: Email;
    readonly password: Password;
    constructor(email: string, password: string) {
        if (!email) {
            throw new MalformedRequestError('Email is required');
        }
        if (!password) {
            throw new MalformedRequestError('Password is required');
        }
        this.email = new Email(email);
        this.password = new Password(password);
    }
}
