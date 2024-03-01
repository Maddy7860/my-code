//const user = [ 'mirza', 'techmaddy786@gmail.com', 'mirza786' ]

const user = { name : 'Mirza', email : 'techmaddy786@gmail.com', password : 'mirza786'};
console.log(user.name);
console.log(user.email);

console.log(user['password']);

user.password = 'xyz123';
user.name = 'maddy';
console.log(user);

user.address = 'ayodhya';
console.log(user);

delete user.email;
console.log(user);






















