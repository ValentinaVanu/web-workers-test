onconnect = (ev) => {
  const [port] = ev.ports;
  port.onmessage = e => {
    const [first, second] = e.data;
    let sum = +first + +second;
    if (isNaN(sum)) {
      port.postMessage("Both inputs should be numbers");
    }
    else {
      const workerResult = `Result: ${sum} `;
      port.postMessage(workerResult);
    }
  };
};
