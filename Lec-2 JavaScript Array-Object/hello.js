
// Object
const users = {
    name: "Jaynesh",
    email: "js@gmail.com",
    age: 20,
    married: false,
    contact_no: 9988556632,
    fun: function () {
        console.log(`Hey There !! I am ${this.name}`);
    }
}

console.log(users);

// console.log("Name :", users.name); // Jaynesh
// console.log("Email :", users.email);
// console.log("Age :", users.age);
// console.log("Contact :", users.contact_no);
// users.fun();

for (const key in users) {
    console.log(`${key} => ${users[key]}`); name => Jaynesh
}

console.log(Object.keys(users)); // name, email, age, etc
console.log(Object.values(users)); // Jaynesh, js@gmail.com, 20, etc
console.log(Object.entries(users)); // []
