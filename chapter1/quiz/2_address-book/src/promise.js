const promise = new Promise(resolve => {
  setTimeout(() => {
    resolve('안녕');
  }, 2000);
});

promise.then(response => {
  console.log(response);
});
