onmessage = (e) => {
  if (e.data === 'start') {
    for (let i = 1; i <= 100000000; i++) {
      postMessage(`Progress ${i}`);
    }
    postMessage('done');
  }
};


