onmessage = (e) => {
  if (e.data === 'start') {
    for (let i = 1; i <= 100000000; i++) {
      if (i % 1000 === 0) {
        postMessage(`Progress ${i}`);
      }
    }
    postMessage('done');
  }
};


