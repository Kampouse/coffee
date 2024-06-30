export const hot = ["Espresso", "Latte", "Cappuccino", "Mocha", "Macchiato"];
export const cold = [
  "Iced Coffee",
  "Iced Latte",
  "Iced Mocha",
  "Iced Macchiato",
];
export const food = ["Sandwich", "Cake", "Cookie", "Muffin"];
export const beans = ["Light Roast", "Dark Roast", "No Roast"];

export const stuff = {
  name: "unbranded",
  price: 0.0,
  description: "This is a placeholder for missing content.",
  image:
    "https://images.nightcafe.studio/jobs/Vkp6pDElnf3hXn1ncRRt/Vkp6pDElnf3hXn1ncRRt--1--387d3_5.9524x-real-esrgan-x4-plus.jpg?tr=w-1600,c-at_max",
};

type Drink = {
  name: string;
  price: number;
  description?: string;
  image?: string;
};

//object key value
type DrinkMenu = { [key: string]: Drink };

const hotContent: DrinkMenu = {
  "Iced Coffee": {
    name: "Iced Coffee",
    price: 3.0,
    description:
      "Iced Coffee is a cold coffee brewed with hot water and served over ice. It may or may not be sweetened.",
    image:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/iced-coffee-1594158455.jpg?resize=640:*",
  },
  "Iced Latte": {
    name: "Iced Latte",
    image:
      "https://www.acouplecooks.com/wp-content/uploads/2021/08/Iced-Latte-003.jpg",
    price: 4.0,
    description:
      "Iced Latte is a cold espresso-based drink with milk and sugar, served over ice.",
  },
};
export const getHotContent = (name: string) => hotContent[name] ?? stuff;
