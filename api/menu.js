const menu = {
    status: "success",
    data: [
        {
            id: 1,
            name: "Focaccia",
            unitPrice: 6,
            imageUrl:
                "https://res.cloudinary.com/direu398z/image/upload/v1761119155/pizza1-removebg-preview_vqavdc.png",
            ingredients: ["Bread", "olive oil", "rosemary"],
            soldOut: false,
        },
        {
            id: 2,
            name: "Pizza Margherita",
            unitPrice: 10,
            imageUrl:
                "https://res.cloudinary.com/direu398z/image/upload/v1761119849/pizza2-removebg-preview_uobzwt.png",
            ingredients: ["Tomato", "mozzarella"],
            soldOut: false,
        },
        {
            id: 3,
            name: "Pizza Margherita",
            unitPrice: 10,
            imageUrl:
                "https://res.cloudinary.com/direu398z/image/upload/v1761119873/pizza3-removebg-preview_aghyv8.png",
            ingredients: ["Tomato", "mozzarella"],
            soldOut: false,
        },
        {
            id: 4,
            name: "Pizza Margherita",
            unitPrice: 10,
            imageUrl:
                "https://res.cloudinary.com/direu398z/image/upload/v1761119897/pizza4-removebg-preview_jj53tr.png",
            ingredients: ["Tomato", "mozzarella"],
            soldOut: false,
        },
        {
            id: 5,
            name: "Rice and Kebab",
            unitPrice: 14,
            imageUrl:
                "https://res.cloudinary.com/direu398z/image/upload/v1761120427/%DA%86%D9%84%D9%88%DA%A9%D8%A8%D8%A7%D8%A8-removebg-preview_thfk6g.png",
            ingredients: ["Rice", "Kebab"],
            soldOut: false,
        },
        {
            id: 6,
            name: "Rice and Gheyme",
            unitPrice: 12,
            imageUrl:
                "https://res.cloudinary.com/direu398z/image/upload/v1761120501/%D9%82%DB%8C%D9%85%D9%87-removebg-preview_ksujvf.png",
            ingredients: ["Rice", "Gheyme"],
            soldOut: false,
        },
        {
            id: 7,
            name: "Rice and Chicken",
            unitPrice: 14,
            imageUrl:
                "https://res.cloudinary.com/direu398z/image/upload/v1761120471/%DA%86%D9%84%D9%88%D9%85%D8%B1%D8%BA_c6uj6n.png",
            ingredients: ["Rice", "Chicken"],
            soldOut: false,
        },
        {
            id: 8,
            name: "Rice and Mix",
            unitPrice: 15,
            imageUrl:
                "https://res.cloudinary.com/direu398z/image/upload/v1761120538/%DA%86%D9%84%D9%88%D9%85%DB%8C%DA%A9%D8%B3_xklqqu.png",
            ingredients: ["Rice", "Chicken", "Kebab"],
            soldOut: false,
        },
        {
            id: 9,
            name: "Rice and Meat",
            unitPrice: 18,
            imageUrl:
                "https://res.cloudinary.com/direu398z/image/upload/v1761120758/%DA%86%D9%86%D8%AC%D9%87-removebg-preview_hlfhh5.png",
            ingredients: ["Rice", "lamb meat"],
            soldOut: false,
        },
        {
            id: 10,
            name: "Spicy Tuna Roll",
            unitPrice: 8,
            imageUrl:
                "https://res.cloudinary.com/direu398z/image/upload/v1761120740/sushi3-removebg-preview_h6ilf2.png",
            ingredients: ["Fresh tuna", "Nori", "Green onions", "Cucumber"],
            soldOut: false,
        },
        {
            id: 11,
            name: "Salmon Nigiri",
            unitPrice: 8,
            imageUrl:
                "https://res.cloudinary.com/direu398z/image/upload/v1761120745/sudhi4-removebg-preview_vnu7uv.png",
            ingredients: ["Sushi rice", "Rice vinegar", "Wasabi", "Soy sauce"],
            soldOut: false,
        },
        {
            id: 12,
            name: "Coca-Cola",
            unitPrice: 8,
            imageUrl:
                "https://res.cloudinary.com/direu398z/image/upload/v1761121043/coca-removebg-preview_losayf.png",
            ingredients: ["Fizzy drink"],
            soldOut: false,
        },
        {
            id: 13,
            name: "Pepsi",
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
