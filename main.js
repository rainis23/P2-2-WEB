function openMenu(evt, tabName) {
    var tabcontent = document.getElementsByClassName("tabcontent");
    for (var i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    var tablinks = document.getElementsByClassName("tablinks");
    for (var i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";

    if (tabName !== "cart") {
        var orderSuccess = document.getElementById('order-success');
        if (orderSuccess) orderSuccess.style.display = "none";
    }
}

document.addEventListener('DOMContentLoaded', function() {
    //groza funkcijas
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
    const clearBtn = document.getElementById('clear-cart-button');
    if (clearBtn) clearBtn.addEventListener('click', clearCart);

    //pasutijuma forma
    const orderForm = document.getElementById('order-form');
    const checkoutButton = document.getElementById('checkout-button');
    const orderSuccess = document.getElementById('order-success');
    const orderError = document.getElementById('order-error');

    if (checkoutButton) {
        checkoutButton.addEventListener('click', function() {
            orderForm.style.display = 'block';
            orderSuccess.style.display = 'none';
            orderError.style.display = 'none';
        });
    }

    if (orderForm) {
        orderForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const address = document.getElementById('address').value.trim();
            const phone = document.getElementById('phone').value.trim();

            if (address === '' || phone === '') {
                orderError.textContent = 'Lūdzu, aizpildiet visus laukus!';
                orderError.style.display = 'block';
                return;
            }

            orderError.style.display = 'none';
            orderForm.style.display = 'none';
            orderSuccess.style.display = 'block';
            clearCart();
        });
    }
});