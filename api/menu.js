const menu = {
    status: "success",
    data: [
        {
            id: 1,
            name: "Margherita Pesto",
            category: "fastfood",
            unitPrice: 6,
            imageUrl:
                "https://res.cloudinary.com/direu398z/image/upload/v1761249294/pizza103-removebg-preview_alo9t1.png",
            ingredients: [
                "Fresh tomatoes",
                "creamy mozzarella",
                "basil",
                "pesto",
            ],
            soldOut: false,
        },
        {
            id: 2,
            name: "Tropical Bacon",
            category: "fastfood",
            unitPrice: 10,
            imageUrl:
                "https://res.cloudinary.com/direu398z/image/upload/v1761249296/pizza102-removebg-preview_nscmdo.png",
            ingredients: ["Bacon", "pineapple", "cheese", "special sauce"],
            soldOut: false,
        },
        {
            id: 3,
            name: "Classic Pepperoni",
            category: "fastfood",
            unitPrice: 10,
            imageUrl:
                "https://res.cloudinary.com/direu398z/image/upload/v1761249286/pizza101-removebg-preview_kswlfr.png",
            ingredients: ["Pepperoni", "Mushrooms", "cheese"],
            soldOut: false,
        },
        {
            id: 4,
            name: "Forest Feast",
            category: "fastfood",
            unitPrice: 10,
            imageUrl:
                "https://res.cloudinary.com/direu398z/image/upload/v1761249428/pizza105-removebg-preview_dv0iuu.png",
            ingredients: ["Fresh mushrooms", "gooey cheese", "savory sausage"],
            soldOut: false,
        },
        {
            id: 5,
            name: "Rice and Kebab",
            category: "iranianMeal",
            unitPrice: 14,
            imageUrl:
                "https://res.cloudinary.com/direu398z/image/upload/v1761120427/%DA%86%D9%84%D9%88%DA%A9%D8%A8%D8%A7%D8%A8-removebg-preview_thfk6g.png",
            ingredients: ["Rice", "Kebab"],
            soldOut: false,
        },
        {
            id: 6,
            name: "Rice and Gheyme",
            category: "iranianMeal",
            unitPrice: 12,
            imageUrl:
                "https://res.cloudinary.com/direu398z/image/upload/v1761120501/%D9%82%DB%8C%D9%85%D9%87-removebg-preview_ksujvf.png",
            ingredients: ["Rice", "Gheyme"],
            soldOut: false,
        },
        {
            id: 7,
            name: "Rice and Chicken",
            category: "iranianMeal",
            unitPrice: 14,
            imageUrl:
                "https://res.cloudinary.com/direu398z/image/upload/v1761120471/%DA%86%D9%84%D9%88%D9%85%D8%B1%D8%BA_c6uj6n.png",
            ingredients: ["Rice", "Chicken"],
            soldOut: false,
        },
        {
            id: 8,
            name: "Rice and Mix",
            category: "iranianMeal",
            unitPrice: 15,
            imageUrl:
                "https://res.cloudinary.com/direu398z/image/upload/v1761120538/%DA%86%D9%84%D9%88%D9%85%DB%8C%DA%A9%D8%B3_xklqqu.png",
            ingredients: ["Rice", "Chicken", "Kebab"],
            soldOut: false,
        },
        {
            id: 9,
            name: "Rice and Meat",
            category: "iranianMeal",
            unitPrice: 18,
            imageUrl:
                "https://res.cloudinary.com/direu398z/image/upload/v1761120758/%DA%86%D9%86%D8%AC%D9%87-removebg-preview_hlfhh5.png",
            ingredients: ["Rice", "lamb meat"],
            soldOut: false,
        },
        {
            id: 10,
            name: "Spicy Tuna Roll",
            category: "sushi",
            unitPrice: 8,
            imageUrl:
                "https://res.cloudinary.com/direu398z/image/upload/v1761120740/sushi3-removebg-preview_h6ilf2.png",
            ingredients: ["Fresh tuna", "Nori", "Green onions", "Cucumber"],
            soldOut: false,
        },
        {
            id: 11,
            name: "Salmon Nigiri",
            category: "sushi",
            unitPrice: 8,
            imageUrl:
                "https://res.cloudinary.com/direu398z/image/upload/v1761120745/sudhi4-removebg-preview_vnu7uv.png",
            ingredients: ["Sushi rice", "Rice vinegar", "Wasabi", "Soy sauce"],
            soldOut: false,
        },
        {
            id: 12,
            name: "Coca-Cola",
            category: "drink",
            unitPrice: 8,
            imageUrl:
                "https://res.cloudinary.com/direu398z/image/upload/v1761121043/coca-removebg-preview_losayf.png",
            ingredients: ["Fizzy drink"],
            soldOut: false,
        },
        {
            id: 13,
            name: "Pepsi",
            category: "drink",
            unitPrice: 8,
            imageUrl:
                "https://res.cloudinary.com/direu398z/image/upload/v1761121062/pepsi-removebg-preview_trody3.png",
            ingredients: ["Fizzy drink"],
            soldOut: false,
        },
    ],
};
export default function handler(req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    if (req.method === "OPTIONS") {
        return res.status(200).end();
    }

    res.status(200).json(menu);
}
