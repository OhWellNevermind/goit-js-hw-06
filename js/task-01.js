const categoryCount = document.querySelectorAll("#categories .item").length
const categoryList = document.querySelectorAll("#categories .item")
// console.log(categoryCount);
console.log("Number of categoris: ", categoryCount);
categoryList.forEach(el => {
    console.log("Category: ", el.firstElementChild.textContent);
    console.log("Elements: ", el.lastElementChild.children.length)
});

