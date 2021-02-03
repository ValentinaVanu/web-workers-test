const sharedWorker = new SharedWorker("scripts/sharedWorker.js");
const first = document.getElementById("number1");
const second = document.getElementById("number2");
const result = document.getElementById("result");
sharedWorker.port.start();
first.onkeyup = () => {
  sharedWorker.port.postMessage([first.value, second.value]);
};
second.onkeyup = () => {
  sharedWorker.port.postMessage([first.value, second.value]);
};
sharedWorker.port.onmessage = e => {
  result.textContent = e.data;
};
