"use strict";
// class User {
//     email: string
//     private name: string
//     private readonly city: string = "Mumbai"
//     constructor(email: string, name: string){
//         this.email = email,
//         this.name = name
//     }
// };
class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this.city = "Mumbai";
    }
}
;
const ankit = new User("ankit@gmail.com", "ankit");
// ankit.city = 'Mumbai'
