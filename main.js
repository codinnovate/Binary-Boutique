const btn = document.querySelector('.menu-btn');
const nav = document.querySelector('nav');
btn && nav && (btn.onclick = () => nav.classList.toggle('open'));

const products = [
    {
        id: 1,
        name: 'Bermuda Shorts',
        price: 29.99,
        image: './assets/images/products/1.png',
        category: 'Shorts',
        rating: 4.2,
        isNewArrival: true,
        isFeatured: false
    },
    {
        id: 2,
        name: 'Striped T-Shirts',
        price: 9.99,
        image: './assets/images/products/2.png',
        category: 'T-Shirts',
        rating: 4.7,
        isNewArrival: true,
        isFeatured: false
    },
    {
        id: 3,
        name: 'New Rules Men T-shirt - Black',
        price: 20.00,
        image: './assets/images/products/3.png',
        category: 'T-Shirts',
        rating: 4.2,
        isNewArrival: true,
        isFeatured: false
    },
    {
        id: 4,
        name: 'Courage Orange Polo',
        price: 19.99,
        image: './assets/images/products/4.png',
        category: 'Polo',
        rating: 4.5,
        isNewArrival: true,
        isFeatured: true
    },
    {
        id: 5,
        name: 'Blue Jean for Women',
        price: 2.99,
        image: './assets/images/products/5.png',
        category: 'Jeans',
        rating: 4.1,
        isNewArrival: false,
        isFeatured: true
    },
    {
        id: 6,
        name: 'Striped Multicoloured Shirt',
        price: 2.09,
        image: './assets/images/products/6.png',
        category: 'Shirts',
        rating: 4.33,
        isNewArrival: false,
        isFeatured: true
    },
    {
        id: 7,
        name: 'Unisex Black Jean',
        price: 3.99,
        image: './assets/images/products/7.png',
        category: 'Jeans',
        rating: 2.5,
        isNewArrival: false,
        isFeatured: true
    },
    {
        id: 8,
        name: 'Vertical Striped Shirt',
        price: 29.99,
        image: './assets/images/products/8.png',
        category: 'Shirts',
        rating: 4.5,
        isNewArrival: false,
        isFeatured: true
    },
    {
        id: 9,
        name: 'Classic Denim Jacket',
        price: 59.99,
        image: './assets/images/products/placeholder.png',
        category: 'Jackets',
        rating: 4.6,
        isNewArrival: true,
        isFeatured: true
    },
    {
        id: 10,
        name: 'Cotton Casual Shirt',
        price: 24.99,
        image: './assets/images/products/placeholder.png',
        category: 'Shirts',
        rating: 4.3,
        isNewArrival: false,
        isFeatured: false
    },
    {
        id: 11,
        name: 'Premium Hoodie',
        price: 44.99,
        image: './assets/images/products/placeholder.png',
        category: 'Hoodies',
        rating: 4.8,
        isNewArrival: true,
        isFeatured: true
    },
    {
        id: 12,
        name: 'Slim Fit Chinos',
        price: 39.99,
        image: './assets/images/products/placeholder.png',
        category: 'Pants',
        rating: 4.4,
        isNewArrival: false,
        isFeatured: false
    },
    {
        id: 13,
        name: 'Graphic Print Tee',
        price: 15.99,
        image: './assets/images/products/placeholder.png',
        category: 'T-Shirts',
        rating: 4.0,
        isNewArrival: true,
        isFeatured: false
    },
    {
        id: 14,
        name: 'Leather Bomber Jacket',
        price: 89.99,
        image: './assets/images/products/placeholder.png',
        category: 'Jackets',
        rating: 4.9,
        isNewArrival: true,
        isFeatured: true
    },
    {
        id: 15,
        name: 'Cargo Shorts',
        price: 32.99,
        image: './assets/images/products/placeholder.png',
        category: 'Shorts',
        rating: 4.1,
        isNewArrival: false,
        isFeatured: false
    },
    {
        id: 16,
        name: 'Formal White Shirt',
        price: 34.99,
        image: './assets/images/products/placeholder.png',
        category: 'Shirts',
        rating: 4.5,
        isNewArrival: false,
        isFeatured: false
    }
];

const trustees = [
    {
        name: 'Alade Ademola Aderohunmu',
        email: 'alade.aderohunmu@miva.edu.ng',
        image: './assets/images/trustee/adrohunmu-alade.jpeg'
    },
    {
        name: 'Opeyemi Ibrahim Okekunle',
        email: 'opeyemi.ibrahim@miva.edu.ng',
        image: './assets/images/trustee/opeyemi-ibrahim.jpeg'
    },
    {
        name: 'Samad Sapara',
        email: 'samad.sapara@miva.edu.ng',
        image: './assets/images/trustee/placeholder.png'
    },
    {
        name: 'Aiyenimelo Tofunmi',
        email: 'aiyenimelo.tofunmi@miva.edu.ng',
        image: './assets/images/trustee/placeholder.png'
    },
    {
        name: 'Jonah Elisha',
        email: 'jonah.elisha@miva.edu.ng',
        image: './assets/images/trustee/placeholder.png'
    },
    {
        name: 'Progress Ochuko Eyaadah',
        email: 'progress.eyaadah@miva.edu.ng',
        image: './assets/images/trustee/Progress ochuko Eyaadah.PNG'
    },
    {
        name: 'Morenike Oyewole',
        email: 'morenike.oyewole@miva.edu.ng',
        image: './assets/images/trustee/Morenike-Oyewole.jpg'
    },
    {
        name: 'Samuel Adeyemi',
        email: 'samuel.adeyemi@miva.edu.ng',
        image: './assets/images/trustee/13.png'
    },
    {
        name: 'Blessing Nabasu Badari',
        email: 'blessing.badari@miva.edu.ng',
        image: './assets/images/trustee/blessing.jpeg'
    },
    {
        name: 'Abdulrahman Usman',
        email: 'usman.abdulrahman@miva.edu.ng',
        image: './assets/images/trustee/Abdulrahman-Usman .jpeg'
    },
    {
        name: 'Oluwaseun Donna',
        email: 'oluwaseun.donna@miva.edu.ng',
        image: './assets/images/trustee/placeholder.png'
    },
    {
        name: 'Ajala Abdullah',
        email: 'ajala.abdullah@miva.edu.ng',
        image: './assets/images/trustee/14.png'
    },
    {
        name: 'Boluwatife Ajayi',
        email: 'boluwatife.ajayi@miva.edu.ng',
        image: './assets/images/trustee/Ajayi-Boluwatife.jpeg'
    },
    {
        name: 'Micheal Princewill',
        email: 'micheal.princewill@miva.edu.ng',
        image: './assets/images/trustee/Michael_Princewill.jpeg'
    },
    {
        name: 'Samuel Unachukwu',
        email: 'samuel.unachukwu@miva.edu.ng',
        image: './assets/images/trustee/unachukwu-samuel.jpeg'
    },
    {
        name: 'Joshua Elisah',
        email: 'joshua.elisah@miva.edu.ng',
        image: './assets/images/trustee/Joshua-Elisah.jpg'
    }
];


function generateStars(rating) {
    const safeRating = Math.min(Math.max(rating, 0), 5);
    const fullStars = Math.floor(safeRating);
    const hasHalfStar = safeRating - fullStars >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return [
        ...Array(fullStars).fill('<span class="star full">★</span>'),
        hasHalfStar ? '<span class="star half">★</span>' : '',
        ...Array(emptyStars).fill('<span class="star empty">☆</span>')
    ].join('');
}

function renderProductsGrid(list, target) {
    if (!target) return;

    target.innerHTML = list.map(p => `
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

const newArrivalsGrid = document.getElementById('newArrivals');
const topSellingGrid = document.getElementById('topSelling');

if (newArrivalsGrid || topSellingGrid) {
    const newArrivals = products.filter(p => p.isNewArrival).slice(0, 4);
    const topSelling = products.filter(p => p.isFeatured).slice(0, 4);

    renderProductsGrid(newArrivals, newArrivalsGrid);
    renderProductsGrid(topSelling, topSellingGrid);
}

const boardList = document.getElementById('board-list');

if (boardList) {
    boardList.innerHTML = trustees.map(trustee => `
        <div class="board-card">
          <img
            src="${trustee.image}"
            alt="${trustee.name}"
            width="205"
            height="208"
          />
          <h3>${trustee.name}</h3>
          <p>
            <a href="mailto:${trustee.email}">${trustee.email}</a>
          </p>
        </div>
      `).join('');
}

const isProductDetailPage = document.body.classList.contains('product-detail-page');

if (isProductDetailPage) {
    const params = new URLSearchParams(window.location.search);
    const productId = Number(params.get('id'));

    const productDetail = document.getElementById('productDetail');
    const notFound = document.getElementById('productNotFound');
    const product = products.find(p => p.id === productId);

    if (!product || !productDetail) {
        if (productDetail) productDetail.style.display = 'none';
        if (notFound) notFound.style.display = 'block';
    } else {
        const imageEl = document.getElementById('productImage');
        const nameEl = document.getElementById('productName');
        const priceEl = document.getElementById('productPrice');
        const descriptionEl = document.getElementById('productDescription');
        const categoryEl = document.getElementById('productCategory');
        const starsEl = document.getElementById('productStars');
        const ratingValueEl = document.getElementById('productRatingValue');

        if (imageEl) {
            imageEl.src = product.image;
            imageEl.alt = product.name;
        }

        if (nameEl) nameEl.textContent = product.name;
        if (priceEl) priceEl.textContent = `$${product.price.toFixed(2)}`;
        if (descriptionEl) {
            descriptionEl.textContent = `Premium ${product.category.toLowerCase()} crafted for comfort and style.`;
        }
        if (categoryEl) categoryEl.textContent = `Category: ${product.category}`;

        if (starsEl) starsEl.innerHTML = generateStars(product.rating);
        if (ratingValueEl) ratingValueEl.textContent = `${product.rating}/5`;

        document.title = `${product.name} - BINARY BOUTIQUE`;
    }
}
