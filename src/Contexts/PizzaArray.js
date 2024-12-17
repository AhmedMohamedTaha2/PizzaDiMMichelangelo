const PizzaArray = [
  {
      id: 1,
      name: "Margherita",
      price: 3,
      description: "A classic pizza topped with a rich tomato sauce, mozzarella cheese, and fresh basil leaves for a burst of flavor.",
      img: "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/margherita.90f9451fd66871fb6f9cf7d506053f18.1.jpg?width=550",
      ingredients: ["Tomato Sauce", "Mozzarella Cheese", "Basil"],
      dietary: ["Vegetarian"],
      nutrition: {
          calories: 250,
          protein: 12,
          fat: 10,
          carbs: 30
      }
  },
  {
      id: 2,
      name: "Tandoori Paneer",
      price: 7,
      description: "Spiced paneer chunks, onion, green capsicum, and red paprika, all drizzled with a smoky tandoori sauce for an irresistible flavor.",
      img: "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/tandoori-paneer.4ef45717e972cf45b43c010e3cde5a22.1.jpg?width=550",
      ingredients: ["Paneer", "Onion", "Green Capsicum", "Red Paprika", "Tandoori Sauce"],
      dietary: ["Vegetarian"],
      nutrition: {
          calories: 330,
          protein: 18,
          fat: 20,
          carbs: 35
      }
  },
  {
      id: 3,
      name: "Veggie Supreme",
      price: 8,
      description: "Loaded with fresh veggies like black olives, green capsicum, mushrooms, onions, red paprika, and sweet corn, topped with a savory sauce.",
      img: "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/veggie-supreme.bc8dd369182b636ff171077efa53c344.1.jpg?width=550",
      ingredients: ["Black Olives", "Green Capsicum", "Mushrooms", "Onion", "Red Paprika", "Sweet Corn", "Tomato Sauce"],
      dietary: ["Vegetarian"],
      nutrition: {
          calories: 320,
          protein: 9,
          fat: 15,
          carbs: 40
      }
  },
  {
      id: 4,
      name: "Double Paneer Supreme",
      price: 6,
      description: "Double the paneer, double the flavor! Spiced paneer, herbed onions, green capsicum, and red paprika come together in a savory sauce.",
      img: "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/double-paneer-supreme.3cb382529b41d14d4a041b5cc5e64341.1.jpg?width=550",
      ingredients: ["Paneer", "Onion", "Green Capsicum", "Red Paprika", "Tomato Sauce"],
      dietary: ["Vegetarian"],
      nutrition: {
          calories: 350,
          protein: 21,
          fat: 22,
          carbs: 40
      }
  },
  {
      id: 5,
      name: "Veggie Kebab Surprise",
      price: 4,
      description: "A tantalizing combination of veggie kebab, onion, green capsicum, tomato, and sweet corn, all cooked in aromatic tandoori sauce.",
      img: "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/veg-kebab-surprise.abab1dff179ab8cf95a59f30d6352297.1.jpg?width=550",
      ingredients: ["Veg Kebab", "Onion", "Green Capsicum", "Tomato", "Sweet Corn", "Tandoori Sauce"],
      dietary: ["Vegetarian"],
      nutrition: {
          calories: 300,
          protein: 8,
          fat: 14,
          carbs: 38
      }
  },
  {
      id: 6,
      name: "Chicken Supreme",
      price: 7,
      description: "A meaty delight with herbed chicken, Schezwan chicken meatballs, and chicken tikka for an unforgettable spicy flavor.",
      img: "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/chicken-supreme.6d53f104f071d304a47440f2fffa7378.1.jpg?width=550",
      ingredients: ["Herbed Chicken", "Schezwan Chicken Meatballs", "Chicken Tikka", "Tomato Sauce"],
      dietary: ["Non-Vegetarian"],
      nutrition: {
          calories: 450,
          protein: 30,
          fat: 24,
          carbs: 35
      }
  },
  {
      id: 7,
      name: "Chicken Tikka Supreme",
      price: 6,
      description: "Delicious chicken tikka, chicken malai tikka, onion, and red paprika, all on a bed of flavorful sauce.",
      img: "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/chicken-tikka-supreme.830de5a911ca95a30e4ca98e529f1b3a.1.jpg?width=550",
      ingredients: ["Chicken Tikka", "Chicken Malai Tikka", "Onion", "Red Paprika", "Tomato Sauce"],
      dietary: ["Non-Vegetarian"],
      nutrition: {
          calories: 400,
          protein: 28,
          fat: 20,
          carbs: 38
      }
  },
  {
      id: 8,
      name: "Triple Chicken Feast",
      price: 8,
      description: "Schezwan chicken meatballs, herbed chicken, and chicken sausage with green capsicum, onion, and red paprika create a feast for your taste buds.",
      img: "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/triple-chicken-feast.e4a546e7a8581a60952b99e3fe22987e.1.jpg?width=550",
      ingredients: ["Schezwan Chicken Meatballs", "Herbed Chicken", "Chicken Sausage", "Green Capsicum", "Onion", "Red Paprika", "Tomato Sauce"],
      dietary: ["Non-Vegetarian"],
      nutrition: {
          calories: 500,
          protein: 36,
          fat: 28,
          carbs: 40
      }
  },
  {
      id: 9,
      name: "Chicken Tikka",
      price: 7,
      description: "Succulent chicken tikka pieces with onion and tomato on a crispy crust, topped with a rich sauce.",
      img: "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/chicken-tikka.6d441a65371e941db36c2754586119a8.1.jpg?width=550",
      ingredients: ["Chicken Tikka", "Onion", "Tomato", "Tomato Sauce"],
      dietary: ["Non-Vegetarian"],
      nutrition: {
          calories: 380,
          protein: 25,
          fat: 20,
          carbs: 35
      }
  },
  {
      id: 10,
      name: "Double Chicken Sausage",
      price: 5,
      description: "A simple yet satisfying pizza featuring double the chicken sausage, all laid out on a soft crust.",
      img: "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/double-chicken-sausage.f172dd6a365e90e655258b17555e74ad.1.jpg?width=550",
      ingredients: ["Chicken Sausage", "Tomato Sauce"],
      dietary: ["Non-Vegetarian"],
      nutrition: {
          calories: 350,
          protein: 20,
          fat: 18,
          carbs: 32
      }
  },
  {
    id: 11,
    name: "Spiced Chicken Meatballs",
    price: 4,
    description: "Spicy Schezwan chicken meatballs and onion combine to bring you a hot, flavorful experience.",
    img: "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/spiced-chicken-meatballs.abd238e81080106d181567a9b52844ae.1.jpg?width=550",
    ingredients: ["Schezwan Chicken Meatballs", "Onion", "Tomato Sauce"],
    dietary: ["Non-Vegetarian"],
    nutrition: {
      calories: 320,
      protein: 18,
      fat: 15,
      carbs: 28
    }
  },
  {
    id: 12,
    name: "Double Cheese",
    price: 3,
    description: "A cheesy delight with extra cheese layered on top of a cheesy base, for all cheese lovers!",
    img: "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/double-cheese.3c8885f8bc6f18facedc7626368f5105.1.jpg?width=550",
    ingredients: ["Mozzarella Cheese", "Cheddar Cheese", "Tomato Sauce"],
    dietary: ["Vegetarian"],
    nutrition: {
      calories: 450,
      protein: 18,
      fat: 25,
      carbs: 35
    }
  },
  {
    id: 13,
    name: "Chicken Pepper Crunch",
    price: 5,
    description: "Herbed chicken, onion, green capsicum, and red capsicum combine for a crunchy, flavorful experience.",
    img: "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/chicken-pepper-crunch.624edb192601b73335e0100db5a6263a.1.jpg?width=550",
    ingredients: ["Herbed Chicken", "Onion", "Green Capsicum", "Red Capsicum", "Tomato Sauce"],
    dietary: ["Non-Vegetarian"],
    nutrition: {
      calories: 400,
      protein: 22,
      fat: 18,
      carbs: 32
    }
  },
  {
    id: 14,
    name: "Italian Chicken Feast",
    price: 6,
    description: "Herbed chicken, onion, and colorful capsicums with a tangy Italian sauce for an authentic flavor.",
    img: "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/italian-chicken-feast.edad91a082e9a16d677722a071487a1c.1.jpg?width=550",
    ingredients: ["Herbed Chicken", "Onion", "Green Capsicum", "Red Capsicum", "Italian Sauce"],
    dietary: ["Non-Vegetarian"],
    nutrition: {
      calories: 420,
      protein: 24,
      fat: 22,
      carbs: 38
    }
  },
  {
    id: 15,
    name: "Corn & Cheese",
    price: 5,
    description: "Sweet corn and gooey cheese blend perfectly to create a comforting, simple pizza.",
    img: "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/corn.f8baa08ad7f607f1de30f96bb9245b50.1.jpg?width=550",
    ingredients: ["Mozzarella Cheese", "Sweet Corn", "Tomato Sauce"],
    dietary: ["Vegetarian"],
    nutrition: {
      calories: 300,
      protein: 12,
      fat: 15,
      carbs: 35
    }
  },
  {
    id: 16,
    name: "Tandoori Onion",
    price: 6,
    description: "Cheese and onion infused with tandoori spices for a savory, aromatic experience.",
    img: "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/tandoori-onion.98e8cbd306a1166cedbbdbd2a97eade3.1.jpg?width=550",
    ingredients: ["Cheese", "Onion", "Tandoori Sauce"],
    dietary: ["Vegetarian"],
    nutrition: {
      calories: 350,
      protein: 12,
      fat: 20,
      carbs: 38
    }
  },
  {
    id: 17,
    name: "Chicken Pepperoni",
    price: 5,
    description: "Cheese and flavorful chicken pepperoni come together for a pizza that's both spicy and savory.",
    img: "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/chicken-pepperoni.6952ef03215b72477abff3574b4b881e.1.jpg?width=550",
    ingredients: ["Chicken Pepperoni", "Cheddar Cheese", "Tomato Sauce"],
    dietary: ["Non-Vegetarian"],
    nutrition: {
      calories: 380,
      protein: 18,
      fat: 20,
      carbs: 30
    }
  },
  {
    id: 18,
    name: "Chicken N Corn Delight",
    price: 9,
    description: "A delightful combination of chicken pepperoni and sweet corn, all on a cheese-packed pizza.",
    img: "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/chicken-n-corn-delight.61cc42effb2de18e6625796c964dd92d.1.jpg?width=550",
    ingredients: ["Chicken Pepperoni", "Sweet Corn", "Mozzarella Cheese", "Tomato Sauce"],
    dietary: ["Non-Vegetarian"],
    nutrition: {
      calories: 500,
      protein: 28,
      fat: 22,
      carbs: 45
    }
  }
];
export default PizzaArray