import type { ProductProps } from ".";

export const hot: ProductProps[] = [
  {
    name: "Espresso",
    price: 3.0,
    description: "Rich, bold shot of coffee bliss.",
    image:
      "https://cdn.pixabay.com/photo/2018/10/19/16/47/coffee-3759024_640.jpg",
    longDescription:
      "Espresso is a concentrated form of coffee served in small, strong shots. It is made by forcing hot water through finely-ground coffee beans, resulting in a brew that is thicker and more concentrated than coffee made by other methods. Espresso is the base for many other coffee drinks, such as lattes, cappuccinos, and macchiatos.",
  },
  {
    name: "Latte",
    price: 4.0,
    description: "Smooth espresso with creamy milk.",
    longDescription:
      "A latte is a coffee drink made with espresso and steamed milk. The term comes from the Italian caffè latte, which means 'milk coffee.' It is similar to a cappuccino, but with more milk and less foam. Lattes are typically served in a tall glass or cup.",
    image:
      "https://cdn.pixabay.com/photo/2024/05/23/10/35/coffee-8782893_960_720.jpg",
  },
  {
    name: "Cappuccino",
    price: 4.0,
    description: "Espresso, hot milk, and foam.",
    longDescription:
      "a cappuccino is a coffee drink made with espresso and steamed milk. The term comes from the Italian caffè latte, which means 'milk coffee.' It is similar to a cappuccino, but with more milk and less foam. Lattes are typically served in a tall glass or cup.",
    image:
      "https://cdn.pixabay.com/photo/2019/12/02/11/23/drink-4667507_640.jpg",
  },
  {
    name: "Mocha",
    price: 4.5,
    description: "Espresso with chocolatey delight.",
    longDescription:
      "A mocha is a coffee drink made with espresso, steamed milk, and chocolate. It is similar to a latte, but with the addition of chocolate, typically in the form of cocoa powder or chocolate syrup. Mochas are often topped with whipped cream and chocolate shavings.",
    image:
      "https://cdn.pixabay.com/photo/2020/03/20/20/48/coffe-4951982_960_720.jpg",
  },
  {
    name: "Macchiato",
    price: 3.5,
    description: "Espresso 'marked' with milk.",
    longDescription:
      "A macchiato is a coffee drink made with espresso and a small amount of milk. The term macchiato means 'marked' or 'stained' in Italian, referring to the way the milk 'marks' the espresso. Macchiatos can be served hot or iced, and are typically smaller in volume than other coffee drinks.",
    image:
      "https://cdn.pixabay.com/photo/2016/09/16/14/31/coffee-1674161_640.jpg",
  },
];

export const cold: ProductProps[] = [
  {
    name: "Iced Coffee",
    price: 3.0,
    description: "Chilled coffee over ice.",
    longDescription:
      "Iced coffee is a cold coffee drink made by pouring brewed coffee over ice. It is typically served sweetened and with milk or cream. Iced coffee is a refreshing and invigorating drink, perfect for hot summer days.",
    image: "https://cdn.pixabay.com/photo/2019/11/23/20/04/coffee-4648041_1280.jpg",


  },
  {
    name: "Iced Latte",
    price: 4.0,
    description: "Cold milk with espresso, iced.",
    longDescription:
      "An iced latte is a coffee drink made with espresso and cold milk, served over ice. It is similar to a hot latte, but with the addition of ice to make it cold and refreshing. Iced lattes are a popular choice for coffee lovers looking for a cool and creamy drink.",
    image:
      "https://cdn.pixabay.com/photo/2018/10/06/11/22/coffee-3727673_640.jpg",
  },
  {
    name: "Iced Mocha",
    price: 4.5,
    description: "Espresso, chocolate syrup, iced.",
    longDescription:
      "An iced mocha is a coffee drink made with espresso, chocolate syrup, and cold milk, served over ice. It is similar to a hot mocha, but with the addition of ice to make it cold and refreshing. Iced mochas are a delicious and indulgent treat for chocolate and coffee lovers alike.",
    image:
      "https://cdn.pixabay.com/photo/2015/09/09/18/09/coffee-932259_640.jpg",
  },
  {
    name: "Iced Macchiato",
    price: 3.5,
    description: "Espresso 'marked' with cold milk.",
    longDescription:
      "An iced macchiato is a coffee drink made with espresso and a small amount of cold milk, served over ice. The term macchiato means 'marked' or 'stained' in Italian, referring to the way the milk 'marks' the espresso. Iced macchiatos are a refreshing and invigorating drink, perfect for hot summer days.",
    image:
      "https://cdn.pixabay.com/photo/2019/04/29/20/03/latte-macchiato-4166922_640.jpg",
  },
];

export const beans: ProductProps[] = [
  {
    name: "Light Roast",
    price: 15.0,
    description: "Bright, acidic, lightly roasted beans.",
    longDescription:
      "Light roast coffee beans are roasted at a lower temperature for a shorter amount of time, resulting in a lighter color and a brighter, more acidic flavor. Light roasts are known for their crisp, clean taste and higher caffeine content compared to darker roasts.",
    image:
      "https://cdn.pixabay.com/photo/2016/11/29/11/58/coffee-1869343_640.jpg",
  },
  {
    name: "Dark Roast",
    price: 15.0,
    description: "Rich, intense, dark roasted beans.",
    longDescription:
      "Dark roast coffee beans are roasted at a higher temperature for a longer amount of time, resulting in a darker color and a bold, intense flavor. Dark roasts are known for their smoky, caramelized taste and lower caffeine content compared to lighter roasts.",
    image:
      "https://cdn.pixabay.com/photo/2016/08/07/16/23/coffee-1576537_640.jpg",
  },
  {
    name: "No Roast",
    price: 20.0,
    description: "Earthy, unroasted green beans.",
    longDescription:
      "Green coffee beans are unroasted coffee beans that have not been exposed to heat. They have a green color and a grassy, earthy flavor. Green coffee beans can be roasted at home or used to make green coffee extract, which is believed to have health benefits.",
    image:
      "https://cdn.pixabay.com/photo/2016/11/29/11/58/coffee-1869343_640.jpg",
  },
];

export const food: ProductProps[] = [
  {
    name: "Sandwich",
    price: 5.0,
    description: "Veggies, cheese, meat, between bread.",
    longDescription:
      "A sandwich is a food item consisting of one or more types of food, such as vegetables, cheese, or meat, placed on or between slices of bread. Sandwiches are a popular and versatile meal option that can be customized to suit individual tastes and dietary preferences.",
    image:
      "https://cdn.pixabay.com/photo/2023/05/29/17/01/hamburger-8026582_640.jpg",
  },
  {
    name: "Cake",
    price: 10.0,
    description: "Sweet, layered, baked dessert.",
    longDescription:
      "A cake is a sweet, baked dessert made from a combination of flour, sugar, eggs, and butter or oil. Cakes can be made in a variety of shapes, sizes, and flavors, and are often frosted or decorated with icing, fruit, or other toppings. Cakes are a popular choice for celebrations and special occasions.",
    image:
      "https://cdn.pixabay.com/photo/2019/03/21/14/31/dessert-4071142_640.jpg",
  },
  {
    name: "Cookie",
    price: 2.0,
    description: "Flat, baked, sugary treat.",
    longDescription:
      "A cookie that bean rosta is a flat, baked sweet or savory food that is typically small, round, and made from a combination of flour, sugar, and butter or oil. Cookies can be made in a variety of flavors and textures, and are often decorated with chocolate chips, nuts, or other ingredients. Cookies are a popular snack or dessert option that can be enjoyed on their own or paired with a glass of milk or cup of coffee.",
    image:
      "https://cdn.pixabay.com/photo/2017/08/07/04/05/chocolate-2599637_640.jpg",
  },
  {
    name: "Muffin",
    price: 3.0,
    description: "Individual-sized baked quick bread.",
    longDescription:
      "A muffin is an individual-sized baked quick bread that is typically sweet and served as a snack or breakfast food. Muffins are made from a combination of flour, sugar, eggs, and butter or oil, and can be flavored with fruits, nuts, or spices. Muffins are a popular choice for on-the-go meals or as a sweet treat with a cup of coffee.",
    image:
      "https://cdn.pixabay.com/photo/2016/05/13/16/37/muffin-1390368_640.jpg",
  },
];

const product = [beans, food, hot, cold].flat();
export const getProduct = (name: string) => {
  const defaulted = {
    name: "data is not set",
    price: 15.0,
    description:
      "Light roast coffee beans are roasted at a lower temperature for a shorter amount of time.",
    longDescription:
      "Light roast coffee beans are roasted at a lower temperature for a shorter amount of time, resulting in a lighter color and a brighter, more acidic flavor. Light roasts are known for their crisp, clean taste and higher caffeine content compared to darker roasts.",
    image: "",
  };

  return (
    product.find((item) => {
      return item.name === name;
    }) || defaulted
  );
};

//object key value
