//get username
let userName=prompt('What\'s your name?');
//input username to website
userName ? document.getElementById('greeting').innerHTML=(`Hello, ${userName}!`) : document.getElementById('greeting').innerHTML=('Hello stranger!');

function shakeMagic8Ball() {
    //get user question
let userQuestion='Are you okay?';
console.log(`${userQuestion}`);

//do not touch this
let randomNumber=Math.floor(Math.random() * 8);

let eightBall=randomNumber;

if (eightBall===0) {
  console.log('It is certain');
} else if(eightBall===1) {
  console.log('It is decidedly so');
} else if(eightBall===2) {
  console.log('Reply hazy try again');
} else if (eightBall===3){
  console.log('Cannot predict now');
} else if(eightBall===4) {
  console.log('Do not count on it');
} else if(eightBall===5) {
  console.log('My sources say no');
} else if(eightBall===6) {
  console.log('Outlook not so good');
} else if (eightBall===7) {
  console.log('Signs point to yes');
} else 


  console.log(eightBall);
}

