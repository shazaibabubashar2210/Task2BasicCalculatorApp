let buttons = document.querySelectorAll(".button");
let str = document.querySelector("#dis");
Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.value === "=") {
      str.value = eval(str.value);
    } else if (e.target.value === "C") {
      str.value = "";
    } 
    else if(e.target.value==="DEL")
    {
      str.value=str.value.slice(0,-1);
    

    }
    else {
      // Concatenate the button value to the input
      str.value += e.target.value;
    }
  });
});
