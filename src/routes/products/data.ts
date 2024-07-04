export const hot = [
  {
    name: "Espresso",
    price: 3.0,
    description: "Espresso is a concentrated coffee drink made by forcing hot water under pressure through finely ground coffee beans.",
    image: ""
  },
  {
    name: "Latte",
    price: 4.0,
    description: "A latte is a coffee drink made with espresso and steamed milk, often topped with a layer of foamed milk.",
    image: ""
  },
  {
    name: "Cappuccino",
    price: 4.0,
    description: "A cappuccino is a coffee drink that is made with espresso, hot milk, and steamed milk foam.",
    image: ""
  },
  {
    name: "Mocha",
    price: 4.5,
    description: "A mocha is a coffee drink that is made with espresso, hot chocolate, and steamed milk, often topped with whipped cream.",
    image: ""
  },
  {
    name: "Macchiato",
    price: 3.5,
    description: "A macchiato is a coffee drink that is made with a small amount of espresso 'marked' with a small amount of steamed milk.",
    image: ""
  }
];

export const cold = [
  {
    name: "Iced Coffee",
    price: 3.0,
    description: "Iced coffee is a coffee beverage served chilled, and is prepared by brewing coffee and then pouring it over ice.",
    image: ""
  },
  {
    name: "Iced Latte",
    price: 4.0,
    description: "An iced latte is a coffee drink made with espresso and cold milk, served over ice.",
    image: ""
  },
  {
    name: "Iced Mocha",
    price: 4.5,
    description: "An iced mocha is a coffee drink made with espresso, chocolate syrup, and cold milk, served over ice.",
    image: ""
  },
  {
    name: "Iced Macchiato",
    price: 3.5,
    description: "An iced macchiato is a coffee drink made with a small amount of espresso 'marked' with a small amount of cold milk, served over ice.",
    image: ""
  }
];

export const beans = [
  {
    name: "Light Roast",
    price: 15.0,
    description: "Light roast coffee beans are roasted at a lower temperature for a shorter amount of time, resulting in a lighter color and a brighter, more acidic flavor.",
    image: ""
  },
  {
    name: "Dark Roast",
    price: 15.0,
    description: "Dark roast coffee beans are roasted at a higher temperature for a longer amount of time, resulting in a darker color and a richer, more intense flavor.",
    image: ""
  },
  {
    name: "No Roast",
    price: 20.0,
    description: "No roast coffee beans are unroasted, green coffee beans that have not undergone the roasting process. They have a unique, earthy flavor and are often used for health benefits.",
    image: ""
  }
];


export const food = [
  {
    name: "Sandwich",
    price: 5.0,
    description: "Sandwich is a food typically consisting of vegetables, sliced cheese or meat, placed on or between slices of bread.",
    image: "https://www.thespruceeats.com/thmb/1Z6Z9Q1"

  },
  {
    name: "Cake",
    price: 10.0,
    description: "Cake is a sweet baked dessert made with flour, sugar, eggs, and other ingredients, often layered with frosting or other toppings.",
    image: ""
  },
  {
    name: "Cookie",
    price: 2.0,
    description: "Cookies are small, flat, baked treats, usually containing flour, eggs, sugar, and either butter, oil, or another fat.",
    image: ""
  },
  {
    name: "Muffin",
    price: 3.0,
    description: "Muffins are small, individual-sized quick breads that are baked in a tin with cup-shaped indentations.",
    image: ""
  }
];


const product = [beans, food, hot, cold].flat();
export const getProduct = (name: string) => {


  const defaulted = {
    name: "data is not set",
    price: 15.0,
    description: "Light roast coffee beans are roasted at a lower temperature for a shorter amount of time, resulting in a lighter color and a brighter, more acidic flavor.",
    image: ""
  }

  return product.find((item) => {


    console.log(item.name, name);
    return item.name === name;



  }) || defaulted;
}












type Product = {
  name: string;
  price: number;
  description: string;
  image: string;
  quantity: number;
};

//object key value
type DrinkMenu = { [key: string]: Product };
