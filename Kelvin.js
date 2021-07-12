const kelvin = 0;
// the constant of kelvin is 293
const celsius = kelvin - 273;
var newton = celsius * (33/100);
//celsius is kelvin - 273
//this is how we will get fahrenheit from celcius
let fahrenheit = 9/5 * celsius + 32;
//this will round the decimal we get from the above equation
fahrenheit = Math.floor(fahrenheit);
newton = Math.floor(newton);
//output of what we just did
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`);
console.log(`The temperature is ${newton} degrees Newton`);
