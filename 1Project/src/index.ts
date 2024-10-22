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
    private readonly city: string = "Mumbai"
    constructor (
        public email: string,
        public name: string,
        // private userId: string
    ){
        
    }
};

const ankit = new User("ankit@gmail.com",  "ankit");

// ankit.city = 'Mumbai'