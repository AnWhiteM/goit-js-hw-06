const categoriesList = document.getElementById("categories");
const categoryItems = categoriesList.querySelectorAll("li.item");
console.log("Number of categories:", categoryItems.length);
categoryItems.forEach((category) => {
  const categoryName = category.firstElementChild.textContent;
  const categoryElements = category.lastElementChild.children;
  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${categoryElements.length}`);
});
