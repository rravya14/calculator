const display = document.getElementById("display");

function appendValue(val) {
  if (display.innerText === "0" || display.innerText === "Error") {
    display.innerText = val;
  } else {
    display.innerText += val;
  }
}

function clearDisplay() {
  display.innerText = "0";
}

function calculate() {
  try {
    display.innerText = eval(display.innerText.replace("%", "/100"));
  } catch {
    display.innerText = "Error";
  }
}
