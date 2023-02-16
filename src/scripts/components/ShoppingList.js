export class ShoppingList {
    constructor() {
        this.list = []

        this.selectrors();
        this.events();
    }

        selectrors() {
            this.form = document.querySelector('.shopping-form');
            this.itemInput = document.querySelector('.shopping-form-item-input');
            this.quantityInput = document.querySelector('.shopping-form-quantity-input');
            this.incrementButton = document.querySelector('.shopping-form-increment-button');
            this.decrementButton = document.querySelector('.shopping-form-decrement-button');
            this.items = document.querySelector('.shopping-items');
    }

    events() {

    this.incrementButton.addEventListener('click', this.incrementQuantity.bind(this))
    this.decrementButton.addEventListener('click', this.decrementQuantity.bind(this));
    this.form.addEventListener('submit', this.addItemToList.bind(this))

    }

    incrementQuantity () {
        const currentValue = Number(this.quantityInput.value);
        const newValue = currentValue + 1;

        this.quantityInput.value = newValue
    }

    decrementQuantity() {
        const currentValue = Number(this.quantityInput.value);
        const newValue = currentValue - 1;

        if (newValue > 0) {
            this.quantityInput.value = newValue
        }
    }

    addItemToList(event) {
        event.preventDefault();

        const itemName = event.target['item-name'].value
        const itemQuantity = event.target['item-quantity'].value

        if (itemName != '') {

        const item = {
            name: itemName,
            quantity: itemQuantity

        }
        this.list.push(item);
        
        this.renderListItems();
        this.resetInputs();

        }
    }

    renderListItems() {
      let itemsStructure = "";

      this.list.forEach(function (item) {
        itemsStructure += `
        <li class="shopping-item">
            <span>${item.name} </span>
            <span>${item.quantity} </span>
        </li>
        `;
      });

      this.items.innerHTML = itemsStructure;
    }

    resetInputs() {
        this.itemInput.value = "";
        this.quantityInput.value = 1
    }


}
