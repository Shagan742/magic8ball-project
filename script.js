//get username
let userName=prompt('What\'s your name?');


let responseImg=document.getElementById('response-img');
let responseText=document.getElementById('response-text');
let greeting=document.getElementById('greeting');
//input username to website
userName 
? (greeting.innerText=`Hello, ${userName}!`) 
: (greeting.innerText='Hello stranger!');


function shakeMagic8Ball() {
    //get user question
let userQuestion=prompt('What do you wanna ask the 8ball?');


//do not touch this
let randomNumber=Math.floor(Math.random() * 8);

let eightBall='';
let imageChoice='';

if (randomNumber==0) {
  eightBall ='It is certain';
  imageChoice ='imgs/img1.jpg';
} else if(randomNumber==1) {
  eightBall='It is decidedly so';
  imageChoice='imgs/img2.jpg';
} else if(randomNumber==2) {
  eightBall='Reply hazy try again';
  imageChoice='imgs/img3.jpg';
} else if(randomNumber==3) {
  eightBall='Cannot predict now';
  imageChoice='imgs/img4.jpg';
} else if(randomNumber==4) {
  eightBall='Do not count on it';
  imageChoice='imgs/img5.jpg';
} else if(randomNumber==5) {
  eightBall='My sources say no';
  imageChoice='imgs/img6.jpg';
} else if(randomNumber==6) {
  eightBall='Outlook not so good';
  imageChoice='imgs/img7.jpg';
} else if(randomNumber==7) {
  eightBall='Signs point to yes';
  imageChoice='imgs/img8.jpg';
} else 


  console.log(eightBall);

  responseText.innerText=`${userName} asked ${userQuestion} to 8ball. The 8ball replied ${eightBall}`;
  responseImg.src=imageChoice;
}

