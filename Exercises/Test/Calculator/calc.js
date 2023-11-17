var outputscreen = document.getElementById("outputvalue");
function display(numbers) {
  outputscreen.value += numbers;
}
function clearall() {
  outputscreen.value = "";
}
function calculate() {
  try {
    outputscreen.value = eval(outputscreen.value);
  } catch (err) {
    outputscreen.value = "Error";
  }
}
function del() {
  outputscreen.value = outputscreen.value.slice(0, -1);
}
