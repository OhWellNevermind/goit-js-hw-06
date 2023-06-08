const categoryCount = document.querySelectorAll("#categories .item").length
const categoryList = document.querySelectorAll("#categories .item")
// console.log(categoryCount);
console.log("Number of categoris: ", categoryCount);
categoryList.forEach(el => {
    console.log("Category: ", el.querySelector("h2").innerHTML);
    console.log("Elements: ", el.querySelectorAll("ul li").length)
});

