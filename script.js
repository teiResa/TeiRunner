
// JS is used to add the class "animate" to the character on click

// ~~~~~~~~~~~~~~ Character movement ~~~~~~~~~~~~~~~~~

var character = document.getElementById("character");
document.addEventListener("click",jump);
function jump(){
  if(character.classList == "animate"){return;}       //remove this for double jumps
    character.classList.add("animate");
    setTimeout(removeJump,300);            //300ms = length of animation
};
function removeJump(){
    character.classList.remove("animate");
}


// ~~~~~~~~~~~~~~~~~~ Block's movement ~~~~~~~~~~~~~~~~

var block = document.getElementById("block");
function checkDead(){
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if(blockLeft<20 && blockLeft>-20 && characterTop>=130){
        alert("Game over");
    }
}

setInterval(checkDead, 10);
