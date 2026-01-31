let bagItems;

window.addEventListener("DOMContentLoaded", () => {
    let bagItemStr = localStorage.getItem('bagItems');
    bagItems = bagItemStr ? JSON.parse(bagItemStr) : [];

    displayItemsOnHomePage();
    displayBagCount();
    fetchProducts();   // VERY IMPORTANT
});
function addToBag(itemId) {
    bagItems.push(itemId);
    localStorage.setItem('bagItems', JSON.stringify(bagItems));
    displayBagCount();
}

function displayBagCount() {
    let bagItemCountElement = document.querySelector('.bag-item-count');
    if (bagItems.length > 0) {
        bagItemCountElement.style.visibility = 'visible';
        bagItemCountElement.innerText = bagItems.length;
    }
    else {
        bagItemCountElement.style.visibility = 'hidden';
    }
}


function displayItemsOnHomePage() {
    let itemsContainerElement = document.querySelector('.items-container');
    if (!itemsContainerElement){
        return;
    }
    let innerHTML = '';
    function renderItems(items) {
        itemsContainerElement.innerHTML = '';
        items.forEach(item => {
            innerHTML += `
    <div class="item-container">
                <img src="${item.image}" alt="loading..." class="item-img">
                <div class="rating">
                    ${item.rating.stars} ⭐️ | ${item.rating.count}
                </div>
                <div class="company-name">${item.company}</div>
                <div class="item-name">${item.item_name}</div>
                <div class="price">
                    <span class="current-price">Rs. ${item.current_price}</span>
                    <span class="original-price">Rs. ${item.original_price}</span>
                    <span class="discount">(${item.discount_percentage}% OFF)</span>
                </div>
                <button class="btn-add-bag" onclick="addToBag(${item.id})">Add to Bag</button>
            </div>
    `});
        itemsContainerElement.innerHTML = innerHTML;

    }
    renderItems(items);
}
