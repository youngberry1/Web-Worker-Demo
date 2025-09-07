onmessage = (e) => {
  if (e.data === 'start') {
    for (i = 1; i <= 100000000; i++) {
      if (i % 10000000 == 0) {
        postMessage(`Progress ${i}`);
      }
    }
    postMessage('done');
  }
};


