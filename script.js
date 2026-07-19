const display = document.querySelector("#display");
const buttons = document.querySelector(".buttons");

buttons.addEventListener("click", function (e) {
    
    if (e.target.tagName !== "BUTTON") return;

    const value = e.target.textContent;

    if (value === "C") {
        display.value = "";
    }
      else if (value === "⌫") {
        display.value = display.value.slice(0, -1);

      }
     else if (value === "=") {
        try {
             display.value = eval(display.value);
        } catch (error) {
            display.value = "Syntax Error";
        }
    } else {
        display.value += value;
    }
    }
);




