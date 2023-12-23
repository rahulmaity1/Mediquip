// Sample product data
const products = [
    {
        id: 1,
        name: "Digital Thermometer",
        price: 19.99,
        imageUrl: "thermometer.jpg"
    },
    {
        id: 2,
        name: "First Aid Kit",
        price: 39.99,
        imageUrl: "first-aid-kit.jpg"
    },
    // Add more products as needed
];

// Function to display products on the page
function displayProducts() {
    const productsContainer = document.getElementById("products");

    products.forEach(product => {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");

        const productImg = document.createElement("img");
        productImg.src = product.imageUrl;
        productImg.alt = product.name;
        productImg.classList.add("product-img");

        const productName = document.createElement("h2");
        productName.textContent = product.name;

        const productPrice = document.createElement("p");
        productPrice.textContent = `$${product.price.toFixed(2)}`;

        const addToCartBtn = document.createElement("a");
        addToCartBtn.href = "#";
        addToCartBtn.textContent = "Add to Cart";
        addToCartBtn.classList.add("btn-add-to-cart");

        // Add event listener to the "Add to Cart" button if needed

        productCard.appendChild(productImg);
        productCard.appendChild(productName);
        productCard.appendChild(productPrice);
        productCard.appendChild(addToCartBtn);

        productsContainer.appendChild(productCard);
    });
}

// Call the function to display products on page load
window.onload = displayProducts;
