displayItemsOnHomePage();

function addToBag(){

}

function displayItemsOnHomePage() {
    let itemsContainerElement = document.querySelector('.items-container');

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
                <button class="btn-add-bag" onclick="addToBag()">Add to Bag</button>
            </div>
    `});
        itemsContainerElement.innerHTML = innerHTML;

    }
    renderItems(items);
}
