
const productsDatabase = {
    ethnic: [
        {
            id: 1,
            name: "Royal Blue Kurta Set",
            description: "Premium cotton festive wear.",
            price: 45,
            image: "image1.jpg",
            rating: 4.6,
            category: "ethnic"
        },
        {
            id: 2,
            name: "Black Sherwani",
            description: "Wedding special sherwani.",
            price: 72,
            image: "image2.jpg",
            rating: 4.8,
            category: "ethnic"
        },
        {
            id: 3,
            name: "White Dhoti Kurta",
            description: "Pure cotton dhoti & kurta.",
            price: 39,
            image: "image3.jpg",
            rating: 4.5,
            category: "ethnic"
        }
    ],

    tshirts: [
        {
            id: 4,
            name: " Cotton Tee",
            description: "Soft everyday t-shirt.",
            price: 20,
            image: "image4.jpg",
            rating: 4.2,
            category: "tshirts"
        },
        {
            id: 5,
            name: "Oversized Graphic Tee",
            description: "Trendy streetwear graphic.",
            price: 25,
            image: "image5.jpg",
            rating: 4.4,
            category: "tshirts"
        },
        {
            id: 6,
            name: "Beige Oversized Tee",
            description: "Urban oversized design.",
            price: 29,
            image: "image6.jpg",
            rating: 4.3,
            category: "tshirts"
        },
        {
            id: 7,
            name: "oversized T-shirt ",
            description: "Premium t-shirt.",
            price: 32,
            image: "image7.jpg",
            rating: 4.6,
            category: "tshirts"
        }
    ],

    casuals: [
        {
            id: 8,
            name: "Cotton Trousers",
            description: "Slim fit Trousers.",
            price: 40,
           image: "image8.jpg",
            rating: 4.5,
            category: "casuals"
        },
        {
            id: 9,
            name: "Casual blue shirt",
            description: "Lightweight casual shirt.",
            price: 65,
          image: "image9.jpg",
            rating: 4.7,
            category: "casuals"
        },
        {
            id: 10,
            name: "Brown Trousers",
            description: "Warm textured corduroy.",
            price: 54,
           image: "image10.jpg",
            rating: 4.4,
            category: "casuals"
        },
        {
            id: 11,
            name: "Green blazzer",
            description: "Comfort blazzer for daily use.",
            price: 49,
            image: "image11.jpg",
            rating: 4.3,
            category: "casuals"
        }
    ],

    accessories: [
        {
            id: 12,
            name: "classic Luxury Watch",
            description: "Classic ornage strap watch.",
            price: 89,
           image: "image12.jpg",
            rating: 4.8,
            category: "accessories"
        },
        {
            id: 13,
            name: "Brown Cap",
            description: "Premium cap.",
            price: 35,
            image: "image13.jpg",
            rating: 4.6,
            category: "accessories"
        },
        {
            id: 14,
            name: "Bracelet",
            description: "Soft premium bracelet.",
            price: 30,
            image: "image14.jpg",
            rating: 4.5,
            category: "accessories"
        },
        {
            id: 15,
            name: "Classic leather Watch",
            description: "Compact leather watch.",
            price: 28,
           image: "image15.jpg",
            rating: 4.4,
            category: "accessories"
        }
    ]
};


localStorage.setItem("productsDatabase", JSON.stringify(productsDatabase));


function navigateToProducts(category) {
    window.location.href = `products.html?category=${category}`;
}


