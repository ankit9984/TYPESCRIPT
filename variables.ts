function addTwo(num: number): number{
    return num + 2
    // return "Ankit"
};
addTwo(5);

function getUpper(val: string){
    return val.toUpperCase()
};
getUpper("ankit");

function signUpUser(name:string, email:string, isPaid: boolean){};
signUpUser("ankit", "ankit@gmail.com", true)

let loginUser = (name: string, email: string, isPaid: boolean = false) => {}
loginUser("ankit", "ankit@gmail")


export {}