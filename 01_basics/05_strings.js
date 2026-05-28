const gameName = new String('avish-ek')

console.log(gameName.charAt(2));

console.log(gameName.indexOf('h'));

const newString = gameName.substring(0, 4);
console.log(newString);

const anotherString = gameName.slice(1, 3);
console.log(anotherString);

const newString1 = "     avishek     "

console.log(newString1);

console.log(newString1.trim());

const url = "https://avishek.com/avishek%10Avishek"

console.log(url.replace('%10', '-'));

console.log(url.includes('rustam'));