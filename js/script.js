class User {
    constructor(email, age){
        this.email = email;
        this.age = age;
    }

    logIn() {
        console.log(this.email, 'has logged in');
        return this;
    }
    logOut (){
        console.log(this.email, 'has logged out');
        return this;

    }
}

let uOne = new User('g@gmail.com',22);

uOne.logIn().logOut();