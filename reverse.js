//write a javascript function that reverse a number
function reverse_a_number(number) {
    number = number + "" //convert the number to string
    return number.split('').reverse().join('')
}console.log("the reverse of the number is " + reverse_a_number(123456789));