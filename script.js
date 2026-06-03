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

Object.keys(data).forEach(letter=>{
let div=document.createElement("div");
div.className="card";
div.innerText=letter;
div.onclick=()=>openPopup(letter);
grid.appendChild(div);
});

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
let msg=new SpeechSynthesisUtterance(text);
msg.rate=0.9;
speechSynthesis.speak(msg);
}