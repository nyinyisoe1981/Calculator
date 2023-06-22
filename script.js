let output = document.querySelector(".text");
let key = document.querySelectorAll(".number-operator");
let clear = document.querySelectorAll(".clear"); 
let equal = document.querySelector(".calc");

for (let i = 0; i < key.length; i++) {
    key[i].addEventListener("click", () => {
        output.innerHTML += key[i].innerHTML;
  })    
}

for (let i = 0; i < clear.length; i++) {
    clear[i].addEventListener("click", () => {
        output.innerHTML = "";
    })   
}

equal.addEventListener("click", () => {
    let calculate = eval(output.innerHTML);
    output.innerHTML = "";
    output.innerHTML = calculate;
})