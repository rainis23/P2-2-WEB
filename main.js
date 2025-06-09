function openMenu(evt, tabName) {
    // Hide all tabcontent
    var tabcontent = document.getElementsByClassName("tabcontent");
    for (var i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    // Remove active class from all tablinks
    var tablinks = document.getElementsByClassName("tablinks");
    for (var i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    // Show the selected tab
    document.getElementById(tabName).style.display = "block";
    // Add active class to the clicked button
    evt.currentTarget.className += " active";
}

document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".tablinks").click();

const VAT = 0.21;


});

document.addEventListener('DOMContentLoaded', function() {
    const cartItems = [];
    const cartList = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');

    function updateCart() {
        cartList.innerHTML = '';
        let total = 0;
        cartItems.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.name} - €${item.price.toFixed(2)}`;
            cartList.appendChild(li);
            total += item.price;
        });
        const tax = total * 0.21;
        const totalWithTax = total + tax;
        cartTotal.innerHTML = `
            Summa bez PVN: €${total.toFixed(2)}<br>
            PVN (21%): €${tax.toFixed(2)}<br>
            <strong>Summa ar PVN: €${totalWithTax.toFixed(2)}</strong>
        `;
    }
    function clearCart() {
        cartItems.length = 0;
        updateCart();
    }

    document.querySelectorAll('.add-to-cart').forEach(btn => {
        btn.addEventListener('click', function() {
            const name = this.getAttribute('data-name');
            const price = parseFloat(this.getAttribute('data-price'));
            cartItems.push({ name, price });
            updateCart();
        });
    });
    document.getElementById('clear-cart-button').addEventListener('click', clearCart);});

    document.addEventListener('DOMContentLoaded', function() {
    // ...existing code...
    const orderForm = document.getElementById('order-form');
    const checkoutButton = document.getElementById('checkout-button');
    const orderSuccess = document.getElementById('order-success');

    checkoutButton.addEventListener('click', function() {
        orderForm.style.display = 'block';
        orderSuccess.style.display = 'none';
    });

    orderForm.addEventListener('submit', function(e) {
        e.preventDefault();
        orderForm.style.display = 'none';
        orderSuccess.style.display = 'block';
        clearCart();
    });
    });