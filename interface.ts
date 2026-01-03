interface User {
    id: number;
    name?: string;
    email?: string;
    age?: number;
}

let user: User = {
    id: 1,
    name:"Thach",
    email:"hakhangthach@gmail.com",
    age: 30

}
//console.log(user);
console.log(user.name);

let listUsers: User []= [
    {
        id: 1,
        name:"Nhi"
    },
    {
        id: 2,
        name:"nam"
    }    
]
for (let user of listUsers){
    console.log(user)
}