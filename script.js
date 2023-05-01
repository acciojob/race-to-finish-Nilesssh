window.promises = [];

// Do not change the code above this
// add your promises to the array `promises'



Promise.any(promises)
  .then((result) => {
    const output = document.getElementById("output");
    output.innerHTML = `The first Promise to resolve is: ${result}`;
  })
  .catch((error) => {
    console.log(error);
  });