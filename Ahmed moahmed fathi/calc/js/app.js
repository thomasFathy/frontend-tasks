const body = document.body;
body.style.display = "flex";
body.style.justifyContent = "center";
body.style.alignItems = "center";
body.style.height = "100vh";
body.style.background = "#222";
body.style.fontFamily = "Arial";

const calculator = document.createElement("div");
calculator.style.background = "#333";
calculator.style.padding = "20px";
calculator.style.borderRadius = "12px";
calculator.style.boxShadow = "0 0 15px #000";
body.appendChild(calculator);

const display = document.createElement("input");
display.disabled = true;
display.style.width = "260px";
display.style.height = "60px";
display.style.marginBottom = "15px";
display.style.fontSize = "30px";
display.style.textAlign = "right";
display.style.padding = "10px";
display.style.borderRadius = "8px";
display.style.border = "none";
display.style.background = "#111";
display.style.color = "#0f0";
calculator.appendChild(display);

const buttonsDiv = document.createElement("div");
buttonsDiv.style.display = "grid";
buttonsDiv.style.gridTemplateColumns = "repeat(4, 65px)";
buttonsDiv.style.gap = "10px";
calculator.appendChild(buttonsDiv);

const buttons = [
  "7","8","9","/",
  "4","5","6","*",
  "1","2","3","-",
  "0",".","=","+",
  "C"
];

let currentInput = "";

buttons.forEach(value => {
  const btn = document.createElement("button");
  btn.textContent = value;
  btn.style.height = "60px";
  btn.style.fontSize = "22px";
  btn.style.border = "none";
  btn.style.borderRadius = "10px";
  btn.style.background = (value === "=") ? "#0a84ff" : (value === "C") ? "#e63946" : "#555";
  btn.style.color = "white";
  btn.style.cursor = "pointer";

  // hover effect
  btn.addEventListener("mouseenter", () => btn.style.background = "#777");
  btn.addEventListener("mouseleave", () => {
    btn.style.background = (value === "=") ? "#0a84ff" : (value === "C") ? "#e63946" : "#555";
  });

  btn.addEventListener("click", () => {
    if (value === "C") {
      currentInput = "";
      display.value = "";
    } else if (value === "=") {
      display.value = calculate(currentInput);
      currentInput = display.value;
    } else {
      currentInput += value;
      display.value = currentInput;
    }
  });

  buttonsDiv.appendChild(btn);
});

function calculate(expr) {
  try {
    const tokens = expr.match(/(\d+\.?\d*|\+|\-|\*|\/)/g);
    if (!tokens) return "Error";

    let num = parseFloat(tokens[0]);
    for (let i = 1; i < tokens.length; i += 2) {
      const op = tokens[i];
      const nextNum = parseFloat(tokens[i + 1]);
      if (isNaN(nextNum)) return "Error";

      if (op === "+") num += nextNum;
      else if (op === "-") num -= nextNum;
      else if (op === "*") num *= nextNum;
      else if (op === "/") num /= nextNum;
      else return "Error";
    }
    return num;
  } catch {
    return "Error";
  }
}
