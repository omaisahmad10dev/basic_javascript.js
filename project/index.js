let buttons = document.querySelectorAll(".button");
let display = document.querySelector(".display");

display.value = "";
let currentDisplay = "";

function calculator() {
  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const value = btn.innerText;
      if (value === "AC") {
        currentDisplay = "";
      } else if (value === "=") {
        try {
          let expression = currentDisplay.replace(/÷/g, "/");
          currentDisplay = eval(expression).toString();
        } catch (error) {
          currentDisplay = "Error";
        }
      } else {
        if (currentDisplay === "Error") {
          currentDisplay = "";
        }
        currentDisplay+=value;
      }
      display.value=currentDisplay;
    });
  });
}

calculator();