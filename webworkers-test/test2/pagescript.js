var worker = new SharedWorker("jsworker.js");

worker.port.addEventListener("message", function(e) {
	alert(e.data);
}, false);

worker.port.start();

worker.port.postMessage("Chloe");
