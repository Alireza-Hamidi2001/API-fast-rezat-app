// server.js
import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

const menu = [
    {
        id: 1,
        name: "Focaccia",
        unitPrice: 6,
        ingredients: ["Bread", "olive oil", "rosemary"],
        soldOut: false,
        imageUrl:
            "https://res.cloudinary.com/direu398z/image/upload/v1761119155/pizza1-removebg-preview_vqavdc.png",
    },
    {
        id: 2,
        name: "Pizza Margherita",
        unitPrice: 10,
        ingredients: ["Tomato", "mozzarella"],
        soldOut: false,
        imageUrl:
            "https://res.cloudinary.com/direu398z/image/upload/v1761119849/pizza2-removebg-preview_uobzwt.png",
    },
    {
        id: 3,
        name: "Pizza Margherita",
        unitPrice: 10,
        ingredients: ["Tomato", "mozzarella"],
        soldOut: false,
        imageUrl:
            "https://res.cloudinary.com/direu398z/image/upload/v1761119873/pizza3-removebg-preview_aghyv8.png",
    },
    {
        id: 4,
        name: "Pizza Margherita",
        unitPrice: 10,
        ingredients: ["Tomato", "mozzarella"],
        soldOut: false,
        imageUrl:
            "https://res.cloudinary.com/direu398z/image/upload/v1761119897/pizza4-removebg-preview_jj53tr.png",
    },
    {
        id: 5,
        name: "Rice and Kebab",
        unitPrice: 14,
        ingredients: ["Rice", "Kebab"],
        soldOut: false,
        imageUrl:
            "https://res.cloudinary.com/direu398z/image/upload/v1761120427/%DA%86%D9%84%D9%88%DA%A9%D8%A8%D8%A7%D8%A8-removebg-preview_thfk6g.png",
    },
    {
        id: 6,
        name: "Rice and Gheyme",
        unitPrice: 12,
        ingredients: ["Rice", "Gheyme"],
        soldOut: false,
        imageUrl:
            "https://res.cloudinary.com/direu398z/image/upload/v1761120501/%D9%82%DB%8C%D9%85%D9%87-removebg-preview_ksujvf.png",
    },
    {
        id: 7,
        name: "Rice and chicken",
        unitPrice: 14,
        ingredients: ["Rice", "Chicken"],
        soldOut: false,
        imageUrl:
            "https://res.cloudinary.com/direu398z/image/upload/v1761120471/%DA%86%D9%84%D9%88%D9%85%D8%B1%D8%BA_c6uj6n.png",
    },
    {
        id: 8,
        name: "Rice and Mix",
        unitPrice: 15,
        ingredients: ["Rice", "Chicken", "Kebab"],
        soldOut: false,
        imageUrl:
            "https://res.cloudinary.com/direu398z/image/upload/v1761120538/%DA%86%D9%84%D9%88%D9%85%DB%8C%DA%A9%D8%B3_xklqqu.png",
    },
    {
        id: 9,
        name: "Rice and Meat",
        unitPrice: 18,
        ingredients: ["Rice", "lamb meat"],
        soldOut: false,
        imageUrl:
            "https://res.cloudinary.com/direu398z/image/upload/v1761120758/%DA%86%D9%86%D8%AC%D9%87-removebg-preview_hlfhh5.png",
    },
    {
        id: 10,
        name: "Spicy Tuna Roll",
        unitPrice: 8,
        ingredients: ["Fresh tuna", "Nori", "Green onions", "Cucumber"],
        soldOut: false,
        imageUrl:
            "https://res.cloudinary.com/direu398z/image/upload/v1761120538/%DA%86%D9%84%D9%88%D9%85%D%DB%8C%DA%A9%D8%B3_xklqqu.png",
    },
    {
        id: 11,
        name: "Salmon Nigiri",
        unitPrice: 8,
        ingredients: ["Sushi rice", "Rice vinegar", "Wasabi", "Soy sauce"],
        soldOut: false,
        imageUrl:
            "https://res.cloudinary.com/direu398z/image/upload/v1761120745/sudhi4-removebg-preview_vnu7uv.png",
    },
    {
        id: 12,
        name: "Coca-Cola",
        unitPrice: 8,
        ingredients: ["Fizzy drink"],
        soldOut: false,
        imageUrl:
            "https://res.cloudinary.com/direu398z/image/upload/v1761121043/coca-removebg-preview_losayf.png",
    },
    {
        id: 13,
        name: "Pepsi",
        unitPrice: 8,
        ingredients: ["Fizzy drink"],
        soldOut: false,
        imageUrl:
            "https://res.cloudinary.com/direu398z/image/upload/v1761121062/pepsi-removebg-preview_trody3.png",
    },
];

app.get("/api/menu", (req, res) => {
    res.json(menu);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
