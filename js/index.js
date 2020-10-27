// Write your Pizza Builder JavaScript in this file.

// Constants
let basePrice = 10;
let ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

// Initial value of the state (the state values can change over time)
let state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();
}

function renderPepperoni() {
  document.querySelectorAll('.pep').forEach(onePep => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  const mushroom = document.querySelectorAll('.mushroom');
  mushroom.forEach(el => {
    if (state.mushrooms) {
      el.style.visibility = 'visible';
    } else {
      el.style.visibility = 'hidden';
    }
  })
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  const greenPeppers = document.querySelectorAll('.green-pepper');
  greenPeppers.forEach(el => {
    if (state.greenPeppers) {
      el.style.visibility = 'visible';
    } else {
      el.style.visibility = 'hidden';
    }
  })
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  const sauce = document.querySelector('.sauce');
  if (state.whiteSauce) {
    sauce.classList.add('sauce-white');
  } else {
    sauce.classList.remove('sauce-white');
  }
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  const crust = document.querySelector('.crust');
  if (state.glutenFreeCrust) {
    crust.classList.remove('crust-gluten-free');
  } else {
    crust.classList.add('crust-gluten-free');
  }
}

let ingredientClasses = {
  pepperoni: 'pepperoni',
  mushrooms: 'mushrooms',
  greenPeppers: 'green-peppers',
  whiteSauce: 'sauce',
  glutenFreeCrust: 'crust',
};

function renderButtons() {
  // Iteration 3: add/remove the class “active” of each `<button class=“btn”>`
  //console.log(button)
  for (let key in ingredientClasses) {
    if (state[key]) {
      document
        .querySelector(`.btn-${ingredientClasses[key]}`)
        .classList.add('active');
    } else {
      document
        .querySelector(`.btn-${ingredientClasses[key]}`)
        .classList.remove('active');
    }
  }
}

// Iteration 4 not done
/* 
function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  const price = document.querySelectorAll('.panel.price strong')
  const ingredientList = document.querySelector('.panel.price strong ul')
  ingredientList.innerHTML = '';
  let sum = basePrice;

  for (let ingredient in state) {
    if (state[ingredient]) {
      sum += ingredients[ingredient].price;
      newWholeList += `<li>$${ingredients[ingredient.price].price}</li>`
    }
  }
  price.innerText 
}
*/
renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', () => {
  state.pepperoni = !state.pepperoni;
  renderPepperoni();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').addEventListener('click', () => {
  state.mushrooms = !state.mushrooms;
  renderMushrooms();
});

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').addEventListener('click', () => {
  state.greenPeppers = !state.greenPeppers;
  renderGreenPeppers();
});

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').addEventListener('click', () => {
  state.whiteSauce = !state.whiteSauce;
  renderWhiteSauce();
});
// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').addEventListener('click', () => {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderGlutenFreeCrust();
});