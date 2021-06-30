function pizzaOven(crustType, sauceType, cheeses, toppings) 
{
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}

var piz1 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
console.log(piz1);

var piz2 = pizzaOven("crispy", "white sauce", ["provolone", "riccota"], ["tomato", "basil"]);
console.log(piz2);

var piz3 = pizzaOven("doughy", "alfredo", "mozzarella", "feta", ["bell pepper", "meat", "pepperoni"]);
console.log(piz3);

