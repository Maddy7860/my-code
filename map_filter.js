const num = [1, 5, 8, 9, 2, 7];

//find square of all elements in above array

const arr1 = num.map( (n) => { return n**2 } );

console.log(arr1);



const prices = [ '₹ 6753.34', '₹637.99', '₹777.30', '₹8932.4763' ];

console.log(parseInt('₹6753.34'.slice(1)));

const numprices = prices.map( (p) => { return parseInt(p.slice(1) ) } )

console.log(numprices);


const prices2 = [23000, 12000, 5000, 7800, 100];

const budgetprices = prices2.filter ((p) => {return p>2000 && p<10000});
console.log(budgetprices);

const names = [ 'raju', 'chaman', 'kaliya', 'chotu'];
const character = names.filter ((n) => { return n.length >=5 });
console.log(character);

const nums2 = [32, 6754, 2345, 876, 123, 872];

const evens = nums2.filter ((b) => { return a%2 === 0 });
console.log(evens);

