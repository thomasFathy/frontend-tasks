document.body.style.margin = "0";
document.body.style.display = "flex";
document.body.style.justifyContent = "center";
document.body.style.alignItems = "center";
document.body.style.height = "100vh";
document.body.style.background = "#222";
document.body.style.fontFamily = "Arial, sans-serif";

const calc = document.createElement("div");
calc.style.background = "#333";
calc.style.padding = "20px";
calc.style.borderRadius = "10px";
calc.style.width = "260px";
document.body.appendChild(calc);


    // width: 89%;
    // padding: 10px;
    // margin-bottom: 20px;
    // text-align: right;
    // background: black;
    // color: lime;
    // border: none;
    // border-radius: 5px;

const display = document.createElement("input");
display.type = "text";
display.disabled = true;
display.style.width = "89%";
display.style.fontSize = "24px";
display.style.padding = "10px";
display.style.marginBottom = "20px";
display.style.textAlign = "right";
display.style.background = "black";
display.style.color = "lime";
display.style.border = "none";
display.style.borderRadius = "5px";
calc.appendChild(display);

const buttons = document.createElement("div");
buttons.style.display = "grid";
buttons.style.gridTemplateColumns = "repeat(4, 55px)";
buttons.style.gridGap = "10px";
calc.appendChild(buttons);

const btnValues = [
"7","8","9","/",
"4","5","6","*",
"1","2","3","-",
"0",".","=","+",
"CLEAR"
];

btnValues.forEach(val => {
const btn = document.createElement("button");
btn.textContent = val;
btn.style.padding = "15px";
btn.style.fontSize = "18px";
btn.style.background = "#444";
btn.style.color = "white";
btn.style.border = "none";
btn.style.borderRadius = "5px";
btn.style.cursor = "pointer";
btn.style.transition = "0.2s";


btn.onmouseover = () => btn.style.background = "#666";
btn.onmouseout = () => btn.style.background = "#444";

if(val === "CLEAR"){
    btn.style.gridColumn = "span 4";
    btn.style.background = "crimson";
    // btn.onclick=()=> display.style.background= "crimson";
    btn.onclick = () => display.value = "";
} else if(val === "="){
    btn.onclick = () => {
        try {
            display.value = eval(display.value);
        } catch {
            display.value = "Error";
        }
    };
} else {
    btn.onclick = () => display.value += val;
}

buttons.appendChild(btn);


});
