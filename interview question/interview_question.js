let button = document.querySelector("#btn");

button.addEventListener("click", function (hello) {
  console.log(hello.target);

  button.innerHTML = "<h1><i>click me</i> </h2>;";
});

let sameBtn = document.querySelector("#btn");
button.addEventListener("click", function (hello) {
  console.log(hello.type);
});




  let formBtn=document.querySelector('#button')

  formBtn.addEventListener("submit", function(event) {
    event.preventDefault();

    console.log("button submit");
  });
