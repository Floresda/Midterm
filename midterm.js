let global= 10;

function boxMaker(mess){
    let ele=document.createElement("div");
    let nameEle=document.createElement("h3");

    nameEle.innerHTML=mess;
    ele.appendChild(nameEle);
    document.body.appendChild(ele);
}
var list = [
    {
        name: "Caution",
        sound: 1
    },
    {
        name: "Dying Breed",
        sound: 3
    },
    {
        name: "Human",
        sound: 8
    },
    {
        name: "Spaceman",
        sound: 7
    },
    {
        name: "Sam's Town",
        sound: 5
    },
    {
        name: "Brightside",
        sound: 4
    }
];

for (let i=0; i<list.length; i++){
    let ele = document.createElement("div");
    let soundele = document.createElement("h3");
    let nameele= document.createElement("h1");
    nameele.innerHTML=list[i].name;
    soundele.innerHTML=list[i].sound;
    ele.appendChild(nameele);
    ele.appendChild(soundele);
    document.body.appendChild(ele);
}

let button1 = document.createElement("button");
button1.innerHTML="Click me "+global;

button1.addEventListener("click",function(){
    global=global+1;
    button1.innerhtml="Click me "+global;
})
document.body.appendChild(button1);

if (sound>5){
    document.style.color=blue;
}
if (global>15){
    boxMaker("Cool we made it to the number!");
}
