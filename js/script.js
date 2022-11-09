// class User {
//     constructor(email, age){
//         this.email = email;
//         this.age = age;
//     }

//     logIn() {
//         console.log(this.email, 'has logged in');
//         return this;
//     }
//     logOut (){
//         console.log(this.email, 'has logged out');
//         return this;

//     }
// }

// class Admin extends User{
//     deleteUser(user){
//         users = users.filter(u => {
//             return u.email !== user.email;
//         });
//     }
// }

// const userOne = new User('sample@gmail.com',22);
// userOne.logIn();

function User(email, age) {
    this.email = email;
    this.age = age;
    this.online = false;
}

User.prototype.logIn = function() {
    this.online = true;
    console.log(this.email, 'has logged in');
}

User.prototype.logOut = function(){
    this.online = false;
    console.log(this.email, 'has logged out');
}

function Admin(...args) {
    User.apply(this, args);
    this.role = 'super admin';
}

Admin.prototype = Object.create(User.prototype);

Admin.prototype.deleteUser = function(user) {
    users = users.filter(u => {
        return u.email !== user.email;
    });
}

let uOne = new User('one@gmail.com',22);
let uTwo = new User('two@gmail.com',23);
let admin = new Admin('admin@gmail.com', 29);
let users = [uOne,uTwo,admin];

admin.deleteUser(uOne);
console.log(users);


uOne.logIn();

function createCircle(radius) {
    return {
        radius,
        location: {
            x: 2,
            y: 1
        },
        draw: function () {
            console.log(`the radius is ${radius}`);
        }
    }
}

function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log(`radius: ${radius}`);
    }
}

const cirx = new Circle(3);
cirx.draw();

const circle = createCircle(33);
circle.draw();
