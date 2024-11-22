const categoriesList = document.querySelectorAll('ul#categories > li.item');
console.log(`Number of categories: ${categoriesList.length}`);
categoriesList.forEach(category => {
const categoryTitle = category.querySelector('.item-title').textContent;
const categoryItemsCount = category.querySelectorAll('.item-menu-item').length;
console.log(`Category: ${categoryTitle}`);
console.log(`Elements: ${categoryItemsCount}`);
});
