
(function () {
    const productsGrid = document.getElementById('productsGrid');
    if (!productsGrid) return;


    const searchInput = document.getElementById('searchInput');
    const categoryFilter = document.getElementById('categoryFilter');
    const priceFilter = document.getElementById('priceFilter');
    const sortFilter = document.getElementById('sortFilter');
    const resultsCount = document.getElementById('resultsCount');
    const noResults = document.getElementById('noResults');


    function generateStars(rating) {
        let stars = '';
        for (let i = 1; i <= 5; i++) {
            if (i <= rating) {
                stars += '★';
            } else {
                stars += '☆';
            }
        }
        return stars;
    }


    function render(productsList) {
        if (productsList.length === 0) {
            productsGrid.innerHTML = "";
            noResults.style.display = "block";
            resultsCount.textContent = "No products found";
            return;
        }

        noResults.style.display = "none";
        resultsCount.textContent = `Showing ${productsList.length} product${productsList.length !== 1 ? "s" : ""}`;

        productsGrid.innerHTML = productsList.map(p => `
            <div class="single-product">
                <div class="product-image">
                    <img 
                        src="${p.image}"
                        alt="${p.name}"
                        onerror="this.src='./assets/images/products/placeholder.png'"
                    />
                </div>
                <h3><a href="product-detail.html?id=${p.id}">${p.name}</a></h3>
                <span class="product-ratings">
                    <span class="stars">${generateStars(p.rating)}</span>
                    <p>${p.rating}/5</p>
                </span>
                <h1>$${p.price.toFixed(2)}</h1>
            </div>
        `).join('');
    }


    function applyFilters() {
        let list = [...products];

        const search = searchInput.value.toLowerCase();
        const category = categoryFilter.value;
        const price = priceFilter.value;
        const sort = sortFilter.value;

        // Search
        if (search) {
            list = list.filter(p =>
                p.name.toLowerCase().includes(search) ||
                p.category.toLowerCase().includes(search)
            );
        }

        // Category
        if (category !== "all") {
            list = list.filter(p => p.category === category);
        }

        // Price
        if (price !== "all") {
            const [min, max] = price.split("-").map(Number);
            list = list.filter(p => p.price >= min && p.price < max);
        }

        // Sorting
        if (sort === "price-low") list.sort((a, b) => a.price - b.price);
        if (sort === "price-high") list.sort((a, b) => b.price - a.price);
        if (sort === "rating") list.sort((a, b) => b.rating - a.rating);
        if (sort === "name") list.sort((a, b) => a.name.localeCompare(b.name));

        render(list);
    }


    searchInput.addEventListener("input", applyFilters);
    categoryFilter.addEventListener("change", applyFilters);
    priceFilter.addEventListener("change", applyFilters);
    sortFilter.addEventListener("change", applyFilters);


    render(products);
})();