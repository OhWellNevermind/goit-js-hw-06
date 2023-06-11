const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector("#ingredients");

const liList = ingredients.map(ingredient => {
  const element = document.createElement("li")
  element.textContent = ingredient;
  element.className = 'item'
  return element.outerHTML
})

list.insertAdjacentHTML("beforeend", liList.join(""));