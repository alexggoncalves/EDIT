let input_field = document.getElementById("password");

let off_button = document.getElementById("password_off_button");
let on_button = document.getElementById("password_on_button");

off_button.addEventListener("click", function(){
    off_button.classList.add("hide");
    on_button.classList.remove("hide");
    input_field.setAttribute("type", "text");
    
})

on_button.addEventListener("click", function(){
    on_button.classList.add("hide");
    off_button.classList.remove("hide");
    
    input_field.setAttribute("type", "password");
})