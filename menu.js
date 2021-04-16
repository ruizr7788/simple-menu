// Food items
const buttermilkPancakes = {
  image: "/images/buttermilkpancakes.jpg",
  type: "breakfast",
  name: "Buttermilk Pancakes",
  price: "$11.99",
  details:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae ipsa labore nostrum sint excepturi, totam quam.",
};

const dinerDouble = {
  image: "/images/dinnerdouble.jpg",
  type: "lunch",
  name: "Diner Double",
  price: "$14.99",
  details:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae ipsa labore nostrum sint excepturi, totam quam.",
};
const godzillaMilkshake = {
  image: "/images/godzillamilkshake.jpeg",
  type: "shake",
  name: "Godzilla Milkshake",
  price: "$5.99",
  details:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae ipsa labore nostrum sint excepturi, totam quam.",
};
const countryDelight = {
  image: "/images/countryDelight.jpeg",
  type: "breakfast",
  name: "Country Delight",
  price: "$15.99",
  details:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae ipsa labore nostrum sint excepturi, totam quam.",
};
const eggAttack = {
  image: "/images/eggattack.jpg",
  type: "lunch",
  name: "Egg Attack",
  price: "$14.99",
  details:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae ipsa labore nostrum sint excepturi, totam quam.",
};
const oreoDream = {
  image: "/images/oreodream.jpg",
  type: "shake",
  name: "Oreo Dream",
  price: "$14.99",
  details:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae ipsa labore nostrum sint excepturi, totam quam.",
};
const baconOverflow = {
  image: "/images/baconoverflow.jpg",
  type: "breakfast",
  name: "Bacon Overflow",
  price: "$7.99",
  details:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae ipsa labore nostrum sint excepturi, totam quam.",
};
const americanClassic = {
  image: "/images/americanclassic.jpg",
  type: "lunch",
  name: "American Classic",
  price: "$18.99",
  details:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae ipsa labore nostrum sint excepturi, totam quam.",
};
const quarintineBuddy = {
  image: "/images/quarintinebuddy.jpg",
  type: "shake",
  name: "Quarantine Buddy",
  price: "$11.99",
  details:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae ipsa labore nostrum sint excepturi, totam quam.",
};
const steakDinner = {
  image: "/images/steakdinner.jpg",
  type: "dinner",
  name: "Steak Dinner",
  price: "$29.99",
  details:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae ipsa labore nostrum sint excepturi, totam quam.",
};

// object with all types of food
const allTypes = {
  all: [
    buttermilkPancakes,
    dinerDouble,
    godzillaMilkshake,
    countryDelight,
    eggAttack,
    oreoDream,
    baconOverflow,
    americanClassic,
    quarintineBuddy,
    steakDinner,
  ],
  breakfast: [buttermilkPancakes, countryDelight, baconOverflow],
  lunch: [dinerDouble, eggAttack, americanClassic],
  shakes: [godzillaMilkshake, oreoDream, quarintineBuddy],
  dinner: [dinerDouble],
};

// Adding food items to html
const menu = document.querySelector(".menu");
const displayFoods = function (foodObj) {
  foodObj.forEach(function (food) {
    const html = `
    <div class="menu-item">
      <img
        class="food-image"
        style="width: 217px; height: 142px"
        src="${food.image}"
        alt="Food picture"
      />
      <div class="menu-item-info all ${food.type}">
        <h3 class="menu-item-name">
          ${food.name} <span class="price">${food.price}</span>
        </h3>
        <p class="item-details">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae ipsa
          labore nostrum sint excepturi, totam quam.
        </p>
      </div>
    </div>
    `;
    menu.insertAdjacentHTML("beforeend", html);
  });
};
displayFoods(allTypes.all);

const clearCurrentFoods = function () {
  menu.innerHTML = "";
};

// displaying and clearing
const btns = document.querySelectorAll(".btn");
console.log(btns);

btns.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    console.log(`btn: ${i}`);
    if (i === 0) {
      clearCurrentFoods();
      displayFoods(allTypes.all);
    } else if (i === 1) {
      clearCurrentFoods();
      displayFoods(allTypes.breakfast);
    } else if (i === 2) {
      clearCurrentFoods();
      displayFoods(allTypes.lunch);
    } else if (i === 3) {
      clearCurrentFoods();
      displayFoods(allTypes.shakes);
    } else {
      clearCurrentFoods();
      displayFoods(allTypes.dinner);
    }
  });
});
