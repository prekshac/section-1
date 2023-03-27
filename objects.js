/*const userData={name:'Raju', email:'raju@mail.com', password:'39450' ,'phone-no': '9876543210'};

console.log(userData.name);
console.log(userData['password']);
console.log(userData['phone-no']);

userData.address= 'Lucknow';
console.log(userData);*/

const smartphone={
    brand: 'Samsung',
    model: 'S22',
    price: 62500,
    color: 'black'
}

//change price

smartphone.price=70000;
console.log(smartphone);

// multiple color

smartphone.color=['black', 'blue', 'white'];
console.log(smartphone);


console.log(smartphone.color[1]);
smartphone.color[1]='rose gold';

console.log(smartphone);