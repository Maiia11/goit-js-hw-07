const liItem = document.querySelectorAll(".item");
console.log(`Number of categories: ${liItem.length}`);


liItem.forEach(item => {
    ShowCategoryInfo(item)
});

function ShowCategoryInfo(event) {
    const categoryTitle = event.querySelector("h2").textContent;
    const categoryElements = event.querySelectorAll("li").length;

    console.log(`Category: ${categoryTitle}`);
    console.log(`Elements: ${categoryElements}`);
}
