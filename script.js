const data = {
A:[
{name:"Apple",img:"assets/alphabet/apple.webp"},
{name:"Ant",img:"assets/alphabet/ant.webp"},
{name:"Airplane",img:"assets/alphabet/airplane.webp"},
{name:"Arm",img:"assets/alphabet/arm.webp"}
],
B:[
{name:"Ball",img:"assets/alphabet/ball.webp"},
{name:"Bat",img:"assets/alphabet/bat.webp"},
{name:"Bird",img:"assets/alphabet/bird.webp"},
{name:"Bus",img:"assets/alphabet/bus.webp"}
],
C:[
{name:"Cat",img:"assets/alphabet/cat.webp"},
{name:"Car",img:"assets/alphabet/car.webp"},
{name:"Cow",img:"assets/alphabet/cow.webp"},
{name:"Cup",img:"assets/alphabet/cup.webp"}
],
D:[
{name:"Dog",img:"assets/alphabet/dog.webp"},
{name:"Duck",img:"assets/alphabet/duck.webp"},
{name:"Drum",img:"assets/alphabet/drum.webp"},
{name:"Door",img:"assets/alphabet/door.webp"}
],
E:[
{name:"Egg",img:"assets/alphabet/egg.webp"},
{name:"Elephant",img:"assets/alphabet/elephant.webp"},
{name:"Eye",img:"assets/alphabet/eye.webp"},
{name:"Ear",img:"assets/alphabet/ear.webp"}
],
F:[
{name:"Fish",img:"assets/alphabet/fish.webp"},
{name:"Fan",img:"assets/alphabet/fan.webp"},
{name:"Fork",img:"assets/alphabet/fork.webp"},
{name:"Fox",img:"assets/alphabet/fox.webp"}
],
G:[
{name:"Goat",img:"assets/alphabet/goat.webp"},
{name:"Gun",img:"assets/alphabet/gun.webp"},
{name:"Gift",img:"assets/alphabet/gift.webp"},
{name:"Girl",img:"assets/alphabet/girl.webp"}
],
H:[
{name:"Hat",img:"assets/alphabet/hat.webp"},
{name:"Horse",img:"assets/alphabet/horse.webp"},
{name:"Hen",img:"assets/alphabet/hen.webp"},
{name:"House",img:"assets/alphabet/house.webp"}
],
I:[
{name:"Ice cream",img:"assets/alphabet/icecream.webp"},
{name:"Ink",img:"assets/alphabet/ink.webp"},
{name:"Iron",img:"assets/alphabet/iron.webp"},
{name:"Insect",img:"assets/alphabet/insect.webp"}
],
J:[
{name:"Jug",img:"assets/alphabet/jug.webp"},
{name:"Jam",img:"assets/alphabet/jam.webp"},
{name:"Jet",img:"assets/alphabet/jet.webp"},
{name:"Joker",img:"assets/alphabet/joker.webp"}
],
K:[
{name:"Kite",img:"assets/alphabet/kite.webp"},
{name:"King",img:"assets/alphabet/king.webp"},
{name:"Key",img:"assets/alphabet/key.webp"},
{name:"Kid",img:"assets/alphabet/kid.webp"}
],
L:[
{name:"Lion",img:"assets/alphabet/lion.webp"},
{name:"Lamp",img:"assets/alphabet/lamp.webp"},
{name:"Leaf",img:"assets/alphabet/leaf.webp"},
{name:"Lock",img:"assets/alphabet/lock.webp"}
],
M:[
{name:"Monkey",img:"assets/alphabet/monkey.webp"},
{name:"Milk",img:"assets/alphabet/milk.webp"},
{name:"Moon",img:"assets/alphabet/moon.webp"},
{name:"Mouse",img:"assets/alphabet/mouse.webp"}
],
N:[
{name:"Nest",img:"assets/alphabet/nest.webp"},
{name:"Net",img:"assets/alphabet/net.webp"},
{name:"Nose",img:"assets/alphabet/nose.webp"},
{name:"Note",img:"assets/alphabet/note.webp"}
],
O:[
{name:"Orange",img:"assets/alphabet/orange.webp"},
{name:"Owl",img:"assets/alphabet/owl.webp"},
{name:"Oil",img:"assets/alphabet/oil.webp"},
{name:"Ox",img:"assets/alphabet/ox.webp"}
],
P:[
{name:"Parrot",img:"assets/alphabet/parrot.webp"},
{name:"Pen",img:"assets/alphabet/pen.webp"},
{name:"Pig",img:"assets/alphabet/pig.webp"},
{name:"Pot",img:"assets/alphabet/pot.webp"}
],
Q:[
{name:"Queen",img:"assets/alphabet/queen.webp"},
{name:"Quail",img:"assets/alphabet/quail.webp"},
{name:"Quilt",img:"assets/alphabet/quilt.webp"},
{name:"Question",img:"assets/alphabet/question.webp"}
],
R:[
{name:"Rabbit",img:"assets/alphabet/rabbit.webp"},
{name:"Rat",img:"assets/alphabet/rat.webp"},
{name:"Ring",img:"assets/alphabet/ring.webp"},
{name:"Rose",img:"assets/alphabet/rose.webp"}
],
S:[
{name:"Sun",img:"assets/alphabet/sun.webp"},
{name:"Ship",img:"assets/alphabet/ship.webp"},
{name:"Star",img:"assets/alphabet/star.webp"},
{name:"Snake",img:"assets/alphabet/snake.webp"}
],
T:[
{name:"Tiger",img:"assets/alphabet/tiger.webp"},
{name:"Train",img:"assets/alphabet/train.webp"},
{name:"Tree",img:"assets/alphabet/tree.webp"},
{name:"Table",img:"assets/alphabet/table.webp"}
],
U:[
{name:"Umbrella",img:"assets/alphabet/umbrella.webp"},
{name:"Uniform",img:"assets/alphabet/uniform.webp"},
{name:"Urn",img:"assets/alphabet/urn.webp"},
{name:"Up",img:"assets/alphabet/up.webp"}
],
V:[
{name:"Van",img:"assets/alphabet/van.webp"},
{name:"Vase",img:"assets/alphabet/vase.webp"},
{name:"Violin",img:"assets/alphabet/violin.webp"},
{name:"Village",img:"assets/alphabet/village.webp"}
],
W:[
{name:"Watch",img:"assets/alphabet/watch.webp"},
{name:"Water",img:"assets/alphabet/water.webp"},
{name:"Wheel",img:"assets/alphabet/wheel.webp"},
{name:"Wolf",img:"assets/alphabet/wolf.webp"}
],
X:[
{name:"X-ray",img:"assets/alphabet/xray.webp"},
{name:"Xylophone",img:"assets/alphabet/xylophone.webp"},
{name:"Xerus",img:"assets/alphabet/xerus.webp"},
{name:"X-mas",img:"assets/alphabet/xmas.webp"}
],
Y:[
{name:"Yak",img:"assets/alphabet/yak.webp"},
{name:"Yarn",img:"assets/alphabet/yarn.webp"},
{name:"Yacht",img:"assets/alphabet/yacht.webp"},
{name:"Yellow",img:"assets/alphabet/yellow.webp"}
],
Z:[
{name:"Zebra",img:"assets/alphabet/zebra.webp"},
{name:"Zoo",img:"assets/alphabet/zoo.webp"},
{name:"Zip",img:"assets/alphabet/zip.webp"},
{name:"Zero",img:"assets/alphabet/zero.webp"}
]
};

let currentLetter="";
let index=0;

const grid=document.getElementById("grid");

// GRID CREATE
Object.keys(data).forEach(letter=>{
let div=document.createElement("div");
div.className="card";
div.innerText=letter;
div.onclick=()=>openPopup(letter);
grid.appendChild(div);
});

// OPEN POPUP
function openPopup(letter){
currentLetter=letter;
index=0;
document.getElementById("popup").classList.remove("hidden");
showItem();
}

// SHOW ITEM
function showItem(){
let item=data[currentLetter][index];

document.getElementById("popup-header").innerText=currentLetter;
document.getElementById("popup-img").src=item.img;
document.getElementById("popup-text").innerText=item.name;

speak(currentLetter+" for "+item.name);
}

// NEXT
function nextItem(){
if(index<data[currentLetter].length-1){
index++;
showItem();
}
}

// PREV
function prevItem(){
if(index>0){
index--;
showItem();
}
}

// CLOSE
function closePopup(){
document.getElementById("popup").classList.add("hidden");
}

// OUTSIDE CLICK
function outsideClick(e){
if(e.target.id==="popup") closePopup();
}

// SPEAK
function speak(text){
speechSynthesis.cancel();
let msg=new SpeechSynthesisUtterance(text);
msg.rate=0.9;
speechSynthesis.speak(msg);
}

// REPEAT
function repeatSpeak(){
showItem();
}
