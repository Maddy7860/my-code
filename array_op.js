const nums = [34, 28, 100, 29, 35, 77, 38];
// wap to get sum of all elements in array

for(let i=0; i<nums.length; i++){
    console.log(nums[i] );
}

















// Initializing numbers array
let numbers=[34, 28, 100, 29, 35, 77, 38];
 
// Declaring empty Even array
let even = [];
let i = 0;
while(i < numbers.length) {
       if (numbers[i] % 2 == 0)
       even.push(numbers[i]);
       i++;
}