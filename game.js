var character = document.getElementById("character");
var box = document.getElementById("box");
var count = 0;

function start(){
    box.classList.add("AnimateBox");
}

function jump(){
    count++;
    if(character.classList != "animate"){
    character.classList.add("animate");
    document.getElementById("countlabel").innerHTML = count;
}
    setTimeout(function(){
        character.classList.remove("animate");
    },500)
}

var checkDead = setInterval(function(){
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var boxLeft = parseInt(window.getComputedStyle(box).getPropertyValue("left"));
    if(boxLeft <75 && boxLeft>50 && characterTop >= 150){
        box.style.animation = "none";
        box.style.display   = "none";
        alert("GAME OVER  :(");
        document.getElementById("finalcountlabel").innerHTML = "your jump count : "+ count;
    }
},10)