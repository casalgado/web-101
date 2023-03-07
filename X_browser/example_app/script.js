document.getElementById("player").addEventListener("mouseenter", goToPosition);
let wrapper = document.querySelector(".field");

function goToPosition(event) {
  console.log(wrapper.clientWidth);
  console.log(wrapper.clientHeight);
  let newX = Math.floor(Math.random() * 640);
  let newY = Math.floor(Math.random() * 400);

  event.target.style.left = `${newX}px`;
  event.target.style.top = `${newY}px`;
}
