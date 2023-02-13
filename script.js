
function toggleTheme() {
            // Obtains an array of all <link>
            // elements.
            // Select your element using indexing.
            var theme = document.getElementsByTagName('link')[0];

            // Change the value of href attribute
            // to change the css sheet.
            if (theme.getAttribute('href') == 'assets\mine\myStyle.css') {
                theme.setAttribute('href', 'assets\orig\bare.css');
            } else {
                theme.setAttribute('href', 'assets\mine\myStyle.css');
            }
        }



/*  This was for the toggle switch


function toggleTheme() {
    // Obtains an array of all <link>
    // elements.
    // Select your element using indexing.
    var theme = document.getElementsByTagName('link')[0];

    // Change the value of href attribute
    // to change the css sheet.
    if (theme.getAttribute('href') == 'assets\mine\myStyle.css') {
        theme.setAttribute('href', 'assets\orig\bare.css');
    } else {
        theme.setAttribute('href', 'assets\mine\myStyle.css');
    }


    if (theme.getAttribute('href') == 'assets\orig\bare.css') {
        theme.setAttribute('href', 'assets\mine\myStyle.css');
    } else {
        theme.setAttribute('href', 'assets\orig\bare.css');
    }
}


*/
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~  Changed nothing below ~~~~~~~~~~~~~~~~~~~~~~~


// JS is used to add the class "animate" to the character on click

// ~~~~~~~~~~~~~~ Character movement ~~~~~~~~~~~~~~~~~

var character = document.getElementById("character");
document.addEventListener("click", jump);
function jump(){
  if(character.classList == "animate"){return;}       //remove this for double jumps, but for now it blocks the character from glitching mid-jump.
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
        alert("Game over!");
    }
}

setInterval(checkDead, 10);  //checkDead() runs every 10 milliseconds
