// genrate Colors

const randomColors = function() {
    const hex = "0123456789ABCDEF";
    let color = "#";

    for(let i = 0; i < 6; i++) {
    color =+ hex[Math.floor(Math.random() *16)]  ; 
   
}

return color;
}

const startChangingColor = function() {
    document.body.style.backgroundColor = randomColors();
};

const stopChangingColor = function() {
    
}

document.querySelector("#start").addEventListener("click", startChangingColor)


document.querySelector("#stop").addEventListener("click", stopChangingColor)