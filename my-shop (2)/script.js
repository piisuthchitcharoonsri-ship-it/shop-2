let cart = JSON.parse(localStorage.getItem('cart')) || [];

function updateCartCount() {
  document.querySelectorAll('#cart-count').forEach(span => {
    span.textContent = cart.length;
  });
}

function addToCart(name, price) {
  cart.push({ name, price });
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartCount();
  alert(`${name} ถูกเพิ่มใส่ตะกร้าแล้ว!`);
}

function displayCart() {
  const cartItems = document.getElementById('cart-items');
  const cartTotal = document.getElementById('cart-total');
  cartItems.innerHTML = '';
  let total = 0;

  cart.forEach((item, index) => {
    total += item.price;
    const div = document.createElement('div');
    div.textContent = `${item.name} - ${item.price} บาท`;
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'ลบ';
    removeBtn.onclick = () => {
      cart.splice(index, 1);
      localStorage.setItem('cart', JSON.stringify(cart));
      displayCart();
      updateCartCount();
    };
    div.appendChild(removeBtn);
    cartItems.appendChild(div);
  });

  cartTotal.textContent = `รวม: ${total} บาท`;
}

function checkout() {
  if(cart.length === 0){
    alert('ตะกร้าว่าง!');
    return;
  }
  alert('ชำระเงินเรียบร้อย! ขอบคุณที่อุดหนุน 😊');
  cart = [];
  localStorage.setItem('cart', JSON.stringify(cart));
  displayCart();
  updateCartCount();
}

updateCartCount();
if(document.getElementById('cart-items')){
  displayCart();
}