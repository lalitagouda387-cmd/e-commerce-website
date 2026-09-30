/* =========================
   PRODUCTS
========================= */

const products = [

    {
        id: 1,
        name: "AirBeat Pro",
        category: "Electronics",
        price: 2499,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
        description: "Premium wireless headphones with immersive sound, comfortable cushions and long battery life."
    },

    {
        id: 2,
        name: "Smart Watch X",
        category: "Electronics",
        price: 3299,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
        description: "Modern smartwatch with fitness tracking, notifications and stylish design."
    },

    {
        id: 3,
        name: "Velocity Runner",
        category: "Fashion",
        price: 1899,
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
        description: "Lightweight running shoes designed for everyday comfort and active lifestyles."
    },

    {
        id: 4,
        name: "Urban Backpack",
        category: "Fashion",
        price: 1299,
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62",
        description: "Stylish and durable backpack suitable for college, office and travel."
    },

    {
        id: 5,
        name: "BrewMaster",
        category: "Home",
        price: 2499,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6",
        description: "Compact coffee maker for preparing delicious coffee at home."
    },

    {
        id: 6,
        name: "GlowDesk Lamp",
        category: "Home",
        price: 899,
        rating: 4.4,
        image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c",
        description: "Minimal LED desk lamp perfect for study and office work."
    },

    {
        id: 7,
        name: "NovaBook 15",
        category: "Electronics",
        price: 55999,
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853",
        description: "Powerful laptop designed for students, developers and professionals."
    },

    {
        id: 8,
        name: "Classic Shades",
        category: "Fashion",
        price: 799,
        rating: 4.3,
        image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083",
        description: "Classic sunglasses with a modern design for everyday outdoor use."
    }

];


/* =========================
   CART
========================= */

let cart =
    JSON.parse(
        localStorage.getItem("novaCart")
    ) || [];


function saveCart() {

    localStorage.setItem(
        "novaCart",
        JSON.stringify(cart)
    );

    updateCartCount();
}


function updateCartCount() {

    const count =
        document.getElementById("cartCount");

    if (count) {

        count.textContent =
            cart.length;

    }
}


/* =========================
   ROUTER
========================= */

function router() {

    const path =
        window.location.hash || "#/";

    if (path === "#/") {

        renderHome();

    }

    else if (path === "#/products") {

        renderProducts();

    }

    else if (path.startsWith("#/product/")) {

        const id =
            Number(path.split("/")[2]);

        renderDetails(id);

    }

    else if (path === "#/cart") {

        renderCart();

    }

    else if (path === "#/about") {

        renderAbout();

    }

    else if (path === "#/contact") {

        renderContact();

    }

    else {

        render404();

    }

    updateCartCount();

    window.scrollTo(0, 0);
}


window.addEventListener(
    "hashchange",
    router
);


/* =========================
   HOME
========================= */

function renderHome() {

    const app =
        document.getElementById("app");

    app.innerHTML = `

        <section class="hero">

            <div class="hero-container">

                <div>

                    <span class="badge">
                        ✨ New Collection 2026
                    </span>

                    <h1>
                        Shop smarter.
                        <br>

                        Live
                        <span class="gradient-text">
                            better.
                        </span>
                    </h1>

                    <p>
                        Discover premium products,
                        amazing deals and everything
                        you need — all in one place.
                    </p>

                    <div class="hero-buttons">

                        <a
                            href="#/products"
                            class="primary-btn">

                            Explore Collection →

                        </a>

                        <a
                            href="#/about"
                            class="secondary-btn">

                            Learn More

                        </a>

                    </div>

                </div>


                <div class="hero-visual">

                    <div class="hero-circle"></div>

                    <div class="hero-card">

                        <img
                            src="${products[0].image}"
                            class="hero-product"
                            alt="Featured product">

                        <h3>
                            AirBeat Pro
                        </h3>

                        <div class="hero-price">
                            ₹2,499
                        </div>

                    </div>

                </div>

            </div>

        </section>


        <section class="stats">

            <div class="container stats-grid">

                <div class="stat">
                    <h2>10K+</h2>
                    <p>Happy Customers</p>
                </div>

                <div class="stat">
                    <h2>500+</h2>
                    <p>Products</p>
                </div>

                <div class="stat">
                    <h2>4.8★</h2>
                    <p>Average Rating</p>
                </div>

                <div class="stat">
                    <h2>24/7</h2>
                    <p>Support</p>
                </div>

            </div>

        </section>


        <section class="section">

            <div class="container">

                <div class="section-heading">

                    <h2>
                        Shop by Category
                    </h2>

                    <p>
                        Find exactly what you're looking for.
                    </p>

                </div>


                <div class="categories">

                    <div class="category-card">

                        <div class="category-icon">
                            🎧
                        </div>

                        <h3>
                            Electronics
                        </h3>

                        <p>
                            Smart devices and modern technology.
                        </p>

                    </div>


                    <div class="category-card">

                        <div class="category-icon">
                            👟
                        </div>

                        <h3>
                            Fashion
                        </h3>

                        <p>
                            Upgrade your everyday style.
                        </p>

                    </div>


                    <div class="category-card">

                        <div class="category-icon">
                            🏠
                        </div>

                        <h3>
                            Home
                        </h3>

                        <p>
                            Beautiful products for your space.
                        </p>

                    </div>

                </div>

            </div>

        </section>


        <section class="section">

            <div class="container">

                <div class="section-heading">

                    <h2>
                        Trending Now 🔥
                    </h2>

                    <p>
                        Popular products customers love.
                    </p>

                </div>


                <div
                    class="products-grid"
                    id="homeProducts">

                </div>

            </div>

        </section>
    `;

    displayProducts(
        products.slice(0, 4),
        "homeProducts"
    );
}


/* =========================
   PRODUCTS
========================= */

function renderProducts() {

    const app =
        document.getElementById("app");

    app.innerHTML = `

        <section class="section">

            <div class="container">

                <div class="section-heading">

                    <h2>
                        Explore Products
                    </h2>

                    <p>
                        Find your next favourite product.
                    </p>

                </div>


                <div class="controls">

                    <input
                        id="search"
                        class="search"
                        placeholder="🔎 Search products..."
                    >


                    <select id="category">

                        <option value="All">
                            All Categories
                        </option>

                        <option value="Electronics">
                            Electronics
                        </option>

                        <option value="Fashion">
                            Fashion
                        </option>

                        <option value="Home">
                            Home
                        </option>

                    </select>

                </div>


                <div
                    class="products-grid"
                    id="products">

                </div>

            </div>

        </section>
    `;


    const search =
        document.getElementById("search");

    const category =
        document.getElementById("category");


    function filter() {

        const keyword =
            search.value.toLowerCase();

        const selected =
            category.value;


        const result =
            products.filter(product => {

                const nameMatch =
                    product.name
                        .toLowerCase()
                        .includes(keyword);

                const categoryMatch =
                    selected === "All" ||
                    product.category === selected;

                return nameMatch &&
                       categoryMatch;

            });


        displayProducts(
            result,
            "products"
        );
    }


    search.addEventListener(
        "input",
        filter
    );

    category.addEventListener(
        "change",
        filter
    );


    displayProducts(
        products,
        "products"
    );
}


/* =========================
   PRODUCT CARDS
========================= */

function displayProducts(
    list,
    containerId
) {

    const container =
        document.getElementById(containerId);


    if (list.length === 0) {

        container.innerHTML = `
            <p>
                No products found.
            </p>
        `;

        return;
    }


    container.innerHTML =
        list.map(product => `

            <article class="product-card">

                <div class="product-image-container">

                    <img
                        src="${product.image}"
                        alt="${product.name}"
                        class="product-image"
                        loading="lazy"
                    >

                    <span class="sale">
                        SALE
                    </span>

                    <button
                        class="wishlist"
                        onclick="wishlist()">

                        ♡

                    </button>

                </div>


                <div class="product-info">

                    <span class="product-category">

                        ${product.category}

                    </span>


                    <h3>
                        ${product.name}
                    </h3>


                    <div class="rating">

                        ⭐ ${product.rating}

                    </div>


                    <div class="product-price">

                        <span class="price">

                            ₹${product.price.toLocaleString()}

                        </span>


                        <button
                            class="add-cart"
                            onclick="addToCart(${product.id})">

                            +

                        </button>

                    </div>

                </div>

            </article>

        `).join("");
}


/* =========================
   DETAILS
========================= */

function renderDetails(id) {

    const product =
        products.find(
            p => p.id === id
        );


    if (!product) {

        render404();

        return;

    }


    document.getElementById("app").innerHTML = `

        <section class="detail-wrapper">

            <div class="container">

                <div class="detail-card">

                    <img
                        src="${product.image}"
                        alt="${product.name}"
                        class="detail-image"
                    >


                    <div class="detail-info">

                        <span class="product-category">
                            ${product.category}
                        </span>

                        <h1>
                            ${product.name}
                        </h1>

                        <div class="rating">
                            ⭐ ${product.rating} / 5
                        </div>

                        <div class="price">
                            ₹${product.price.toLocaleString()}
                        </div>

                        <p class="detail-description">
                            ${product.description}
                        </p>

                        <button
                            class="primary-btn"
                            onclick="addToCart(${product.id})">

                            🛒 Add to Cart

                        </button>

                    </div>

                </div>

            </div>

        </section>
    `;
}


/* =========================
   CART
========================= */

function addToCart(id) {

    const product =
        products.find(
            p => p.id === id
        );


    if (!product) return;


    cart.push(product);

    saveCart();

    alert(
        `${product.name} added to your cart!`
    );
}


function goToCart() {

    window.location.hash =
        "#/cart";

}


function removeFromCart(index) {

    cart.splice(index, 1);

    saveCart();

    renderCart();

}


function renderCart() {

    const app =
        document.getElementById("app");


    if (cart.length === 0) {

        app.innerHTML = `

            <section class="section">

                <div class="container">

                    <div class="info-card">

                        <h1>
                            Your Cart 🛒
                        </h1>

                        <p>
                            Your shopping cart is empty.
                        </p>

                        <br>

                        <a
                            href="#/products"
                            class="primary-btn">

                            Start Shopping

                        </a>

                    </div>

                </div>

            </section>
        `;

        return;
    }


    let total = 0;


    const items =
        cart.map(
            (product,index) => {

                total += product.price;


                return `

                    <div class="cart-item">

                        <div>

                            <h3>
                                ${product.name}
                            </h3>

                            <p>
                                ₹${product.price.toLocaleString()}
                            </p>

                        </div>

                        <button
                            class="primary-btn"
                            onclick="removeFromCart(${index})">

                            Remove

                        </button>

                    </div>

                `;

            }
        ).join("");


    app.innerHTML = `

        <section class="section">

            <div class="container">

                <div class="section-heading">

                    <h2>
                        Your Cart
                    </h2>

                </div>

                ${items}


                <div class="cart-total">

                    <h2>
                        Total:
                        ₹${total.toLocaleString()}
                    </h2>

                    <br>

                    <button
                        class="primary-btn"
                        onclick="checkout()">

                        Proceed to Checkout →

                    </button>

                </div>

            </div>

        </section>
    `;
}


/* =========================
   OTHER PAGES
========================= */

function renderAbout() {

    document.getElementById("app").innerHTML = `

        <section class="section">

            <div class="container">

                <div class="info-card">

                    <h1>
                        About NovaCart
                    </h1>

                    <p>
                        NovaCart is a modern e-commerce
                        product catalog developed as a
                        full-stack web development
                        capstone project.
                    </p>

                    <br>

                    <p>
                        The application demonstrates
                        responsive UI design, client-side
                        routing, product filtering,
                        shopping cart functionality,
                        local storage and performance
                        optimization.
                    </p>

                </div>

            </div>

        </section>
    `;
}


function renderContact() {

    document.getElementById("app").innerHTML = `

        <section class="section">

            <div class="container">

                <div class="info-card">

                    <h1>
                        Let's Connect
                    </h1>

                    <br>

                    <form
                        class="contact-form"
                        onsubmit="sendMessage(event)">

                        <input
                            type="text"
                            placeholder="Your name"
                            required
                        >

                        <input
                            type="email"
                            placeholder="Your email"
                            required
                        >

                        <textarea
                            placeholder="Your message"
                            required>
                        </textarea>

                        <button
                            class="primary-btn">

                            Send Message →

                        </button>

                    </form>

                </div>

            </div>

        </section>
    `;
}


function sendMessage(event) {

    event.preventDefault();

    alert(
        "Message sent successfully! ✨"
    );

    event.target.reset();
}


/* =========================
   UTILITIES
========================= */

function wishlist() {

    alert(
        "Added to your wishlist ❤️"
    );

}


function checkout() {

    alert(
        "Demo checkout completed successfully! 🎉"
    );

}


function toggleTheme() {

    document.body.classList.toggle("dark");

    localStorage.setItem(
        "novaTheme",
        document.body.classList.contains("dark")
            ? "dark"
            : "light"
    );

}


function toggleMenu() {

    document
        .getElementById("navLinks")
        .classList.toggle("active");

}


function render404() {

    document.getElementById("app").innerHTML = `

        <section class="section">

            <div class="container">

                <div class="info-card">

                    <h1>
                        404
                    </h1>

                    <p>
                        Page not found.
                    </p>

                    <br>

                    <a
                        href="#/"
                        class="primary-btn">

                        Back Home

                    </a>

                </div>

            </div>

        </section>
    `;
}


/* =========================
   LOAD THEME
========================= */

if (
    localStorage.getItem("novaTheme")
    === "dark"
) {

    document.body.classList.add("dark");

}


/* =========================
   START
========================= */

router();