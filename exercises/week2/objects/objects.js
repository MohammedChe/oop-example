let myCar = {
    make: 'Ford',
    model: 'Mustang',
    year: 2024,
    options: ['HUD', 'Heated seats']
};

let user = {
    firstName: 'John',
    lastName: 'Jones',
    age: 25,
    hobbies: ['Gym', 'Movies', 'Writing'],
    friends: [
        {
            firstName: 'Tom',
            lastName: 'Murphy',
            age: 27
        },
        {
            firstName: 'Mo',
            lastName: 'Che',
            age: 30
        },
        {
            firstName: 'Sarah',
            lastName: 'Doyle',
            age: 35
        }
    ],

    greeting() {

        setTimeout(() => {
            console.log(`Hello my name is ${this.firstName}`);
        }, 3000);
        
    }
};

// let firstName = "Mohammed";
user.greeting();


// console.log(user.firstName + " " + user.lastName);
// console.log(user.hobbies.join(', '));
// // console.log(user.friend.age);
// console.log(user.friends.length);

// console.log(user.friends[0].firstName);

// user.friends.forEach((friend) => {
//     console.log(friend.firstName);
//     console.log(friend.lastName);
//     console.log(friend.age);
//     console.log("--------");
// });


if(user.job){
    console.log(user.job.name);
}


