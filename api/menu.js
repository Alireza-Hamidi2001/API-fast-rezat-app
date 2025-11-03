const menu = {
    status: "success",
    data: [
        {
            id: 1,
            name: "Classic Melt",
            category: "burger",
            unitPrice: 6,
            imageUrl:
                "https://res.cloudinary.com/direu398z/image/upload/v1761970665/ham5_d9cn4n.png",
            ingredients: ["Bun", "Beef", "Cheese"],
            soldOut: false,
        },
        {
            id: 2,
            name: "Smoky Bacon",
            category: "burger",
            unitPrice: 10,
            imageUrl:
                "https://res.cloudinary.com/direu398z/image/upload/v1761970648/ham2_tkl5xz.png",
            ingredients: ["Bun", "Beef", "Bacon"],
            soldOut: false,
        },
        {
            id: 3,
            name: "Texas BBQ",
            category: "burger",
            unitPrice: 10,
            imageUrl:
                "https://res.cloudinary.com/direu398z/image/upload/v1761970644/ham1_cjnwyp.png",
            ingredients: ["Bun", "Beef", "BBQ-sauce"],
            soldOut: false,
        },
        {
            id: 4,
            name: "Forest Bite",
            category: "burger",
            unitPrice: 10,
            imageUrl:
                "https://res.cloudinary.com/direu398z/image/upload/v1761970732/ham3_bqd314.png",
            ingredients: ["Bun", "Beef", "Mushrooms"],
            soldOut: false,
        },
        {
            id: 5,
            name: "Mega Stack",
            category: "burger",
            unitPrice: 10,
            imageUrl:
                "https://res.cloudinary.com/direu398z/image/upload/v1761970657/ham4_tmxqpc.png",
            ingredients: ["Bun", "Double-beef", "Cheese"],
            soldOut: false,
        },
        {
            id: 6,
            name: "Green Garden",
            category: "burger",
            unitPrice: 10,
            imageUrl:
                "https://res.cloudinary.com/direu398z/image/upload/v1761970670/ham6_wfpxb4.png",
            ingredients: ["Bun", "Salmon", "Cabage"],
            soldOut: false,
        },
        {
            id: 7,
            name: "Crispy Chick",
            category: "burger",
            unitPrice: 10,
            imageUrl:
                "https://res.cloudinary.com/direu398z/image/upload/v1761971848/chick_xfa1iy.png",
            ingredients: ["Bun", "Fried-chicken", "Lettuce"],
            soldOut: false,
        },
        // -Note-
        {
            id: 8,
            name: "Rice and Kebab",
            category: "iranianMeal",
            unitPrice: 14,
            imageUrl:
                "https://res.cloudinary.com/direu398z/image/upload/v1761120427/%DA%86%D9%84%D9%88%DA%A9%D8%A8%D8%A7%D8%A8-removebg-preview_thfk6g.png",
            ingredients: ["Rice", "Kebab"],
            soldOut: false,
        },
        {
            id: 9,
            name: "Rice and Gheyme",
            category: "iranianMeal",
            unitPrice: 12,
            imageUrl:
                "https://res.cloudinary.com/direu398z/image/upload/v1761120501/%D9%82%DB%8C%D9%85%D9%87-removebg-preview_ksujvf.png",
            ingredients: ["Rice", "Gheyme"],
            soldOut: false,
        },
        {
            id: 10,
            name: "Rice and Chicken",
            category: "iranianMeal",
            unitPrice: 14,
            imageUrl:
                "https://res.cloudinary.com/direu398z/image/upload/v1761120471/%DA%86%D9%84%D9%88%D9%85%D8%B1%D8%BA_c6uj6n.png",
            ingredients: ["Rice", "Chicken"],
            soldOut: false,
        },
        {
            id: 11,
            name: "Rice and Mix",
            category: "iranianMeal",
            unitPrice: 15,
            imageUrl:
                "https://res.cloudinary.com/direu398z/image/upload/v1761120538/%DA%86%D9%84%D9%88%D9%85%DB%8C%DA%A9%D8%B3_xklqqu.png",
            ingredients: ["Rice", "Chicken", "Kebab"],
            soldOut: false,
        },
        {
            id: 12,
            name: "Rice and Meat",
            category: "iranianMeal",
            unitPrice: 18,
            imageUrl:
                "https://res.cloudinary.com/direu398z/image/upload/v1761120758/%DA%86%D9%86%D8%AC%D9%87-removebg-preview_hlfhh5.png",
            ingredients: ["Rice", "lamb meat"],
            soldOut: false,
        },
        {
            id: 13,
            name: "Special Pizza",
            category: "pizza",
            unitPrice: 16,
            imageUrl:
                "https://res.cloudinary.com/direu398z/image/upload/v1762144059/2_pm4zpe.png",
            ingredients: [
                "Tomato-sauce",
                "Cheese",
                "Sausage",
                "Mushroom",
                "Bell-pepper",
                "Olive",
            ],
            soldOut: false,
        },
        {
            id: 14,
            name: "Veggie Pizza",
            category: "pizza",
            unitPrice: 10,
            imageUrl:
                "https://res.cloudinary.com/direu398z/image/upload/v1762144052/1_vqgneq.png",
            ingredients: [
                "Tomato-sauce",
                "Cheese",
                "Mushroom",
                "Bell-pepper",
                "Olive",
                "Onion",
                "Corn",
            ],
            soldOut: false,
        },
        {
            id: 15,
            name: "Pepperoni Pizza",
            category: "pizza",
            unitPrice: 13,
            imageUrl:
                "https://res.cloudinary.com/direu398z/image/upload/v1762144160/5_v5gijz.png",
            ingredients: ["Tomato-sauce", "Cheese", "Pepperoni"],
            soldOut: false,
        },
        {
            id: 16,
            name: "Cheese Pizza",
            category: "pizza",
            unitPrice: 14,
            imageUrl:
                "https://res.cloudinary.com/direu398z/image/upload/v1762144146/3_jarjfd.png",
            ingredients: ["Tomato-sauce", "Cheese", "bell pepper"],
            soldOut: false,
        },
        {
            id: 17,
            name: "Mushroom Pizza",
            category: "pizza",
            unitPrice: 11,
            imageUrl:
                "https://res.cloudinary.com/direu398z/image/upload/v1762144164/6_vy8g5m.png",
            ingredients: ["Tomato-sauce", "mushroom", "beaf"],
            soldOut: false,
        },
        {
            id: 18,
            name: "Chicken Pizza",
            category: "pizza",
            unitPrice: 12.5,
            imageUrl:
                "https://res.cloudinary.com/direu398z/image/upload/v1762144160/5_v5gijz.png",
            ingredients: ["Tomato-sauce", "Chicken", "onion"],
            soldOut: false,
        },
        {
            id: 19,
            name: "Coca-Cola",
            category: "drinks",
            unitPrice: 8,
            imageUrl:
                "https://res.cloudinary.com/direu398z/image/upload/v1762145238/coca-removebg-preview_pmsdmb.png",
            ingredients: ["Fizzy drink"],
            soldOut: false,
        },
        {
            id: 17,
            name: "Pepsi",
            category: "drinks",
            unitPrice: 8,
            imageUrl:
                "https://res.cloudinary.com/direu398z/image/upload/v1762145244/pepsi-removebg-preview_hl96ak.png",
            ingredients: ["Fizzy drink"],
            soldOut: false,
        },
        {
            id: 18,
            name: "Sprite",
            category: "drinks",
            unitPrice: 8,
            imageUrl:
                "https://res.cloudinary.com/direu398z/image/upload/v1762145251/sprite-removebg-preview_tay3w3.png",
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
