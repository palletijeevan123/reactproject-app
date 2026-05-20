import fridge from "../assets/images/fridge.webp";
import washing from "../assets/images/washing.jpg";
import ac from "../assets/images/ac.png";
import microwave from "../assets/images/microwave.jpg";
import purifier from "../assets/images/purifier.jpg";
export default [
    {
        id: 301,
        price:100000,
        name: "Refrigerator",
        brand: "LG",
        capacity: "260L",
        energyRating: "4 Star",
        type: "Double Door",
        image: fridge
    },
    {
        id: 302,
        price:120000,
        name: "Washing Machine",
        brand: "Samsung",
        capacity: "7 Kg",
        energyRating: "5 Star",
        type: "Front Load",
        image: washing
    },
    {
        id: 303,
        price:140000,
        name: "Air Conditioner",
        brand: "Daikin",
        capacity: "1.5 Ton",
        energyRating: "3 Star",
        type: "Split AC",
        image: ac
    },
    {
        id: 304,
        price:35000,
        name: "Microwave Oven",
        brand: "IFB",
        capacity: "25L",
        energyRating: "NA",
        type: "Convection",
        image: microwave
    },
    {
        id: 305,
        price:28000,
        name: "Air Purifier",
        brand: "Philips",
        coverageArea: "400 sq ft",
        energyRating: "4 Star",
        type: "HEPA Filter",
        image: purifier
    }
   
];