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

/*
  Hola! Si encontraron esto son unos capos :)
  Asi debe quedar el task de bakery orders.

  {
  'carlos salgado': 55000,
  'camilo zuluaga': 57000,
  'juliana zuluaga': 115000,
  'alejandro zuluaga': 20000,
  'alejandro aguilar': 100000,
  'sebastian cotes': 63000,
  'el pibe valderrama': 125000,
  'gustavo cerati': 32000,
  'diomedes diaz': 80000
  }

  {
  'original grande': 420000,
  'pan integral y avena grande': 50000,
   domicilio: 30000,
  'pan de zaatar pequeño': 40000,
  'pan integral pequeño': 40000,
  'pan de hamburguesa': 12000,
  'fermento de pimenton': 15000,
  'pan de queso costeño pequeño': 20000,
  'pan de masa madre pequeño': 14000,
  'pan de bono': 6000
  }
  
*/
