const menu = {
    status: "success",
    data: [
        {
            id: 1,
            name: "Classic Melt",
            category: "burger",
            unitPrice: 6,
            imageUrl:
                "https://res.cloudinary.com/dynzxnubr/image/upload/v1770537394/burger4_lbjjkn.png",
            ingredients: ["Bun", "Beef", "Cheese"],
            soldOut: false,
        },
        {
            id: 2,
            name: "Smoky BBQ",
            category: "burger",
            unitPrice: 8,
            imageUrl:
                "https://res.cloudinary.com/dynzxnubr/image/upload/v1770537320/burger2_wnlvsf.png",
            ingredients: ["Bun", "Beef", "Cheddar", "BBQ Sauce", "Onion Rings"],
            soldOut: false,
        },
        {
            id: 3,
            name: "Chicken Crunch",
            category: "burger",
            unitPrice: 8,
            imageUrl:
                "https://res.cloudinary.com/dynzxnubr/image/upload/v1770537199/burger1_tmjy37.png",
            ingredients: ["Bun", "Crispy Chicken", "Lettuce", "Mayonnaise"],
            soldOut: false,
        },
        {
            id: 4,
            name: "Mix Burger",
            category: "burger",
            unitPrice: 9,
            imageUrl:
                "https://res.cloudinary.com/dynzxnubr/image/upload/v1770537679/burger3_of6fqm.png",
            ingredients: [
                "Bun",
                "Beef",
                "Pepper Jack Cheese",
                "Chicken",
                "Spicy Sauce",
            ],
            soldOut: false,
        },

        // -Note-
        {
            id: 5,
            name: "Rice with Lamb Stew",
            category: "iranianMeal",
            unitPrice: 18,
            imageUrl:
                "https://res.cloudinary.com/dynzxnubr/image/upload/v1770537708/persian3_vwsk4j.png",
            ingredients: ["Rice", "Lamb Meat", "Potato", "Onion"],
            soldOut: false,
        },
        {
            id: 6,
            name: "Saffron Rice with Chicken",
            category: "iranianMeal",
            unitPrice: 16,
            imageUrl:
                "https://res.cloudinary.com/dynzxnubr/image/upload/v1770537388/persian2_anq6ni.png",
            ingredients: [
                "Saffron Rice",
                "Chicken",
                "Barberries",
                "Broad Beans",
            ],
            soldOut: false,
        },
        {
            id: 7,
            name: "Rice with Tuna Fish",
            category: "iranianMeal",
            unitPrice: 15,
            imageUrl:
                "https://res.cloudinary.com/dynzxnubr/image/upload/v1770537383/persian1_llkjsm.png",
            ingredients: ["Rice", "Tuna Fish", "Tomato Sauce"],
            soldOut: false,
        },
        //-Note-
        {
            id: 8,
            name: "Pepperoni Pizza",
            category: "pizza",
            unitPrice: 13,
            imageUrl:
                "https://res.cloudinary.com/dynzxnubr/image/upload/v1770539163/pizza4_lrxrjp.png",
            ingredients: ["Tomato Sauce", "Mozzarella Cheese", "Pepperoni"],
            soldOut: false,
        },
        {
            id: 9,
            name: "Beef Pizza",
            category: "pizza",
            unitPrice: 14,
            imageUrl:
                "https://res.cloudinary.com/dynzxnubr/image/upload/v1770537731/pizza3_nzmqet.png",
            ingredients: [
                "Tomato Sauce",
                "Mozzarella Cheese",
                "Beef",
                "Sausage",
            ],
            soldOut: false,
        },
        {
            id: 10,
            name: "Vegetable Pizza",
            category: "pizza",
            unitPrice: 12,
            imageUrl:
                "https://res.cloudinary.com/dynzxnubr/image/upload/v1770537696/pizza2_mme3zv.png",
            ingredients: [
                "Tomato Sauce",
                "Mozzarella Cheese",
                "Mushroom",
                "Bell Pepper",
                "Onion",
                "Olives",
            ],
            soldOut: false,
        },
        {
            id: 11,
            name: "Chicken Pizza",
            category: "pizza",
            unitPrice: 12.5,
            imageUrl:
                "https://res.cloudinary.com/dynzxnubr/image/upload/v1770537688/pizza1_vbvryv.png",
            ingredients: [
                "Tomato Sauce",
                "Mozzarella Cheese",
                "Chicken",
                "Onion",
            ],
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
