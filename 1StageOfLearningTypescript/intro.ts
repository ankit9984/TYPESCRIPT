// const user = {
//     name: "ankit",
//     email: "ankit@gmail.com",
//     isActive: true
// };

// function createuser ({name: string, isPaid: boolean}){}

// let newUser = {name: "ankit", isPaid: false};

// createuser(newUser);

// function createCourse():{name: string, price: number}{
//     return {name: 'reactjs', price: 1000}
// }





// type User = {
//     name: string,
//     email: string,
//     isActive: boolean
// };


// function createUser(user: User): User{
//     return {name: "", email: "", isActive: true}
// }


// createUser({name: "", email: "", isActive: true})


// type User = {
//    readonly _id: string,
//     name: string,
//     email: string,
//     isActive: boolean,
//     createCardDetails?: number

// };

// let myUser: User = {
//     _id: "123",
//     name: "ankit",
//     email: "ankit@gmail.com",
//     isActive: false
// };

// myUser.email = "a@gmail.com"
// // myUser._id = "33"



// type cardNumber = {
//     cardnumber: number
// }

// type cardDate = {
//     date: string
// };


// type cardDetails = cardNumber & cardDate & {
//     cvv: number
// }



// type User = {
//     name: string,
//     isActive: boolean
// };

// const allUsers: User[] = []

// allUsers.push({name: "ankit", isActive: true})


// let score: number | string 

// score = 33
// score = "22"


// type user = {
//     name: string,
//     id: number
// }

// type admin = {
//     username: string,
//     id: number
// }

// let hitesh: user | admin = {name: "sonu", id: 22}

// hitesh = {username: "ankit", id: 111}


// function getDbId(id: string | number){
//     if(typeof id === 'string'){
//         id.toUpperCase()
//     }else {
//         id + 2
//     }
// };

// getDbId(3)
// getDbId("ankit")


// const data: number[] = [1,2,3]
// const data2: string[] = ["1", "2","3"]
// const data3: (string | number | boolean)[] = ["1", "2", 3, true]

// let seatAllotment: "aisle" | "middle" | "window"
// seatAllotment = "aisle",
// seatAllotment = "window"




export {}