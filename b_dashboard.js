let cart = [];

document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', function() {
    let product = this.getAttribute('data-product');
    cart.push(product);
    updateCart();
  });
});

function updateCart() {
  let cartItems = document.getElementById('cartItems');
  cartItems.innerHTML = '';

  if (cart.length === 0) {
    cartItems.innerHTML = '<li>No items in the cart</li>';
  } else {
    cart.forEach((item, index) => {
      let listItem = document.createElement('li');
      listItem.innerText = item;
      listItem.appendChild(createDeleteButton(index));
      cartItems.appendChild(listItem);
    });
  }
}

function createDeleteButton(index) {
  let deleteButton = document.createElement('button');
  deleteButton.innerText = 'Delete';
  deleteButton.style.marginLeft = '10px';
  deleteButton.style.backgroundColor = '#d9534f';
  deleteButton.style.color = 'white';
  deleteButton.style.border = 'none';
  deleteButton.style.borderRadius = '5px';
  deleteButton.style.cursor = 'pointer';

  deleteButton.addEventListener('click', function() {
    cart.splice(index, 1);
    updateCart();
  });

  return deleteButton;
}

document.getElementById('clearCart').addEventListener('click', function() {
  cart = [];
  updateCart();
});

document.getElementById('messageForm').addEventListener('submit', function(event) {
  event.preventDefault();
  let messageContent = document.getElementById('messageContent').value;

  if (messageContent) {
    alert('Message sent to admin: ' + messageContent);
    document.getElementById('messageContent').value = '';
  } else {
    alert('Please write a message.');
  }
});

document.getElementById('logoutButton').addEventListener('click', function() {
  alert('Logged out');
  // Logic for logging out
});
