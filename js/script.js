
class Userclass {
    constructor(email, age){
        this.email = email;
        this.age = age;
    }

    inMeeting(){
        console.log(`${this.email} is in a meeting`);
    }

    logIn() {
        console.log(this.email, `has logged in`);
        this.inMeeting();
        return this;
    }
    logOut (){
        console.log(this.email, 'has logged out');
        return this;

    }
}

class Adminclass extends Userclass{
    deleteUser(user){
        classUsers = classUsers.filter(u => {
            return u.email !== user.email;
        });
    }
}

class SuperAdmin extends Userclass {
    constructor(email, age, fullname){
        super(email, age);
        this.fname = fullname;
    }

    static Away(email) {
        const fullname = email.fname;
        return `${fullname} is not available`;
    }
}

const superAdminOne = new SuperAdmin('super@yahoo.com', 26, 'Zeno');
// console.log(superAdminOne);
// console.log(superAdminOne.Away());
console.log(SuperAdmin.Away(superAdminOne));

const userOne = new Userclass('sample@gmail.com',22);
userOne.logIn();

const userTwo = new Userclass('utwo@GMAIL.com',29);

const adminOne = new Adminclass('am@gmail.com',23);
let classUsers = [userOne, userTwo, adminOne]

const keys = Object.keys(superAdminOne);
console.log('keys => ',keys);

adminOne.deleteUser(userOne);
console.log(classUsers);


// Constructor
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

// Factory function
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

// Constructor
function Circle(radius) {
    this.radius = radius;

    let newLocation = {x: 2, y: 3};

    let defaultLocation = function (pos){
        console.log(`my location: ${pos}`);
        locationVal.innerHTML = `value input: ${pos}`;
    }

    this.currentLocation = function(){
        return console.log(newLocation);
    }

    this.draw = function () {
        defaultLocation(text.value);
        console.log(`radius: ${radius}, location: ${text.value}`);
    }

}

const form = document.querySelector('#location');
const locationVal = document.querySelector('.output');

form.addEventListener('submit', (e) => {
 e.preventDefault();
 const text = form.querySelector('#text');
 const cirx = new Circle(3);
 cirx.draw();
 cirx.currentLocation();

//  for (const key in cirx) {
//     if (typeof cirx[key] !== 'function' ) {
//         console.log('forin: ',cirx[key]);
//     }
// }

});



// const keyss = Object.keys(cirx);
// console.log(keyss);


const circle = createCircle(33);
circle.draw();

// es5
const vehicle = {
    speed: function(speed){
        return `${speed} mph`;
    }
}

const bike = Object.create(vehicle);
bike.brand = 'kawasaki';

console.log(bike.brand);

const car = Object.create(vehicle, {
    brand: {value: 'lamborghini'},
    model: {value: 'huracan'}
});

console.log(car.speed(300));
console.log(car.brand);