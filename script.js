const data = {
A:[
{name:"Apple",img:"assets/alphabet/apple.webp"},
{name:"Arm",img:"assets/alphabet/arm.webp"},
{name:"Ant",img:"assets/alphabet/ant.webp"},
{name:"Airplane",img:"assets/alphabet/airplane.webp"}
],
B:[
{name:"Ball",img:"assets/alphabet/ball.webp"},
{name:"Bat",img:"assets/alphabet/bat.webp"},
{name:"Bird",img:"assets/alphabet/bird.webp"},
{name:"Bus",img:"assets/alphabet/bus.webp"}
]
};

let currentLetter="";
let index=0;

const grid=document.getElementById("grid");

// GRID
Object.keys(data).forEach(letter=>{
let div=document.createElement("div");
div.className="card";
div.innerText=letter;
div.onclick=()=>openPopup(letter);
grid.appendChild(div);
});

// POPUP
function openPopup(letter){
currentLetter=letter;
index=0;
document.getElementById("popup").classList.remove("hidden");
showItem();
}

function showItem(){
let item=data[currentLetter][index];

document.getElementById("popup-header").innerText=currentLetter;
document.getElementById("popup-img").src=item.img;
document.getElementById("popup-text").innerText=item.name;

speak(currentLetter+" for "+item.name);
}

function nextItem(){
if(index<data[currentLetter].length-1){
index++;
showItem();
}
}

function prevItem(){
if(index>0){
index--;
showItem();
}
}

function closePopup(){
document.getElementById("popup").classList.add("hidden");
}

function outsideClick(e){
if(e.target.id==="popup") closePopup();
}

function speak(text){
speechSynthesis.cancel();
let msg=new SpeechSynthesisUtterance(text);
msg.rate=0.9;
speechSynthesis.speak(msg);
}

function repeatSpeak(){
showItem();
}

// ================= QUIZ =================

let quizLetter="";
let quizIndex=0;

function openQuiz(){
document.getElementById("quiz").classList.remove("hidden");
startQuiz();
}

function startQuiz(){
let letters=Object.keys(data);
quizLetter=letters[Math.floor(Math.random()*letters.length)];
quizIndex=0;

document.getElementById("question").innerText="Find: "+quizLetter;

let options=document.getElementById("options");
options.innerHTML="";

let correct=quizLetter;

let choices=["A","B","C","D","E","F","G","H"];
let mix=[correct];

while(mix.length<4){
let r=choices[Math.floor(Math.random()*choices.length)];
if(!mix.includes(r)) mix.push(r);
}

mix.sort(()=>Math.random()-0.5);

mix.forEach(l=>{
let btn=document.createElement("button");
btn.innerText=l;
btn.onclick=()=>checkAnswer(l);
options.appendChild(btn);
});
}

function checkAnswer(ans){
if(ans===quizLetter){
speak("Correct");
alert("🎉 Correct!");
startQuiz();
}else{
speak("Try again");
alert("❌ Try Again");
}
}

function closeQuiz(){
document.getElementById("quiz").classList.add("hidden");
}

function closeQuizOutside(e){
if(e.target.id==="quiz") closeQuiz();
}
