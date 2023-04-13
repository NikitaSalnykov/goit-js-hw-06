
const listCategories = document.querySelector('#categories')
const itemCategory = listCategories.querySelectorAll('.item')

console.log(`Number of categories:`,listCategories.children.length);

itemCategory.forEach((item) => {

  const itemTitle = item.querySelector('h2').textContent
  console.log('Category:', itemTitle)

  const quantityEl = item.lastElementChild.children.length
  console.log('Elements:', quantityEl)
})