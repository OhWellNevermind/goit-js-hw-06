const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector("#ingredients");
let fragList = document.createDocumentFragment();

ingredients.forEach(ingredient => {
  const element = document.createElement("li")
  element.textContent = ingredient;
  element.className = "item"
  fragList.appendChild(element);
})

list.append(fragList);