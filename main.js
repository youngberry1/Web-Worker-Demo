
let worker = null;
const start = document.getElementById('startBtn');
const output = document.getElementById('output');


start.addEventListener('click', () => {
  if (worker) {
    output.textContent = 'Worker already running...';
    return;
  }

  worker = new Worker('worker.js');
  worker.postMessage('start');

  worker.onmessage = (e) => {
    if (e.data === 'done') {
      output.textContent = 'Task Completed';
      worker.terminate();
      worker = null;
    } else {
      output.textContent = e.data;
    }
  }
})

document.getElementById('stopBtn').addEventListener('click', () => {
  if (worker) {
    worker.terminate();
    worker = null;
    output.textContent = 'Worker Stopped';
  }
});