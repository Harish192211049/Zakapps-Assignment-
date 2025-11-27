// Product Detail Page Logic
document.addEventListener('DOMContentLoaded', function () {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id'));

    const productsDatabase = JSON.parse(localStorage.getItem('productsDatabase') || '{}');
    const allProducts = [
        ...(productsDatabase.ethnic || []),
        ...(productsDatabase.tshirts || []),
        ...(productsDatabase.casuals || []),
        ...(productsDatabase.accessories || [])
    ];

    const product = allProducts.find(p => p.id === productId);

    if (!product) {
        document.getElementById('productDetail').innerHTML =
            '<p style="padding: 2rem; text-align:center;">Product not found</p>';
        return;
    }

    displayProductDetail(product);
    displayRelatedProducts(product, allProducts);
});

function displayProductDetail(product) {
    const reviewCount = Math.floor(Math.random() * 500) + 50;

    document.getElementById("breadcrumbProduct").textContent = product.name;
    document.title = `${product.name} - CARTIFY`;

    document.getElementById("productDetail").innerHTML = `
        <div class="product-image-section">
            <img src="${product.image}" alt="${product.name}" class="main-image">
        </div>

        <div class="product-info-section">
            <h1>${product.name}</h1>

            <div class="product-rating-detail">
                <span class="rating-stars">${'⭐'.repeat(Math.floor(product.rating))}</span>
                <span>${product.rating}</span>
                <span class="review-count">(${reviewCount} reviews)</span>
            </div>

            <div class="product-price-detail">$${product.price.toFixed(2)}</div>

            <div class="product-description-detail">
                ${product.description}
            </div>

            <div class="product-specs">
                <h3>Product Details</h3>
                <ul>
                    <li><span class="spec-label">Category:</span> <span class="spec-value">${product.category}</span></li>
                    <li><span class="spec-label">Availability:</span> <span class="spec-value">In Stock</span></li>
                    <li><span class="spec-label">Shipping:</span> <span class="spec-value">Free shipping over $50</span></li>
                    <li><span class="spec-label">Returns:</span> <span class="spec-value">30 Day Return</span></li>
                </ul>
            </div>

            <div class="product-actions">
                <button class="btn btn-primary" onclick="addToCartAction(${product.id})">🛒 Add to Cart</button>
                <button class="btn btn-success" onclick="buyNowAction(${product.id})">⚡ Buy Now</button>
            </div>

            <div class="additional-info">
                <strong>💡 Fast Delivery:</strong> Delivered in 3–5 business days.
            </div>
        </div>
    `;
}

function displayRelatedProducts(currentProduct, allProducts) {
    const related = allProducts
        .filter(p => p.category === currentProduct.category && p.id !== currentProduct.id)
        .slice(0, 4);

    document.getElementById("relatedProducts").innerHTML = related.map(product => `
        <div class="related-card" onclick="viewProduct(${product.id})">
            <img src="${product.image}" />
            <div class="related-info">
                <div class="related-name">${product.name}</div>
                <div class="related-price">$${product.price}</div>
            </div>
        </div>
    `).join('');
}

/* Cart Functions */
function addToCartAction(productId) {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const existing = cart.find(i => i.id === productId);

    if (existing) existing.quantity++;
    else cart.push({ id: productId, quantity: 1 });

    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartDisplay();
    showNotification("✓ Added to cart!");
}

function buyNowAction(productId) {
    addToCartAction(productId);
    setTimeout(() => {
        window.location.href = "order-confirmation.html";
    }, 500);
}

function updateCartDisplay() {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById("cartCount").textContent = count;
}

function showNotification(msg) {
    const box = document.getElementById("notification");
    box.textContent = msg;
    box.style.display = "block";
    setTimeout(() => box.style.display = "none", 2500);
}

function viewProduct(id) {
    window.location.href = `product-detail.html?id=${id}`;
}
