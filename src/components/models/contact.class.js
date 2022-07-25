

export class ContactClass {
    firstName = '';
    lastName = '';
    email = '';
    connected = false;

    constructor(firstName, lastName, email, connected){
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.connected = connected;
    }
}