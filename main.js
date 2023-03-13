"use strict";

const restaurant = {
  name: "Burger House",
  location: "Puran Bogura, Dhaka,Bangladesh",
  category: ["Italian", "Thailand", "Indian", "Local", "Organic"],
  startMenu: [
    "Chicken Cheese Burger",
    "Beef Burger",
    "Garlic Bread",
    "Italian Spicy Pasta",
  ],
  mainMenu: ["Burger", "Pasta", "Pizza", "French Fries"],
  openingHours: {
    sun: {
      open: 10,
      close: 22,
    },
    fri: {
      open: 12,
      close: 20,
    },
    wed: {
      open: 8,
      close: 20,
    },
  },
  order: function (startInd, mainInd) {
    return [this.startMenu[startInd], this.mainMenu[mainInd]];
  },
  orderDelivery: function ({
    startIndex = 0,
    mainIndex = 0,
    time = "10:00pm",
    address = "Unknown",
  }) {
    console.log(
      `${this.startMenu[startIndex]} & ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  burgerOrder: function (ing1, ing2, ing3) {
    console.log(`Here is your is burger with ${ing1} , ${ing2} & ${ing3}`);
  },
};
//OBJECT DESTRUCTURING
// const {
//   name: resName,
//   location: resLocation,
//   category: foodCategory,
// } = restaurant;
// console.log(resName, foodCategory, resLocation);

// const [italian, thailand, ...rest] = restaurant.category;
// console.log(italian, thailand, ...rest);

const myObj = {
  name: "Usuf Ali",
  education: {
    ssc: "chandradighi alim mad",
    hsc: "chandradighi alim mad",
  },
};

// const { ssc, hsc } = myObj.education;
// console.log(ssc, hsc);

const {
  name,
  education: { ssc, hsc },
} = myObj;

console.log(name, ssc, hsc);

// console.log(restaurant);
////////////////////////////////////////
//DESTRACTURING ARRAY
// const arr101 = [10, 4, 5, 6];
// const [ten, four, , six] = arr101;
// console.log(ten, four, six);

// const [italian, , indian] = restaurant.category;
// console.log(indian, italian);

///////////////////////////////////////////
/*SPREAD OPERATOR=>(...)*/

// const firstArr = [10, 15, 20, 25];
// const newArr = [5, 25, firstArr[0], firstArr[1], firstArr[2], firstArr[3]];
// const lastArr = [30, 35, ...firstArr]
// console.log(firstArr);
// console.log(lastArr);

// const newMenu = [...restaurant.mainMenu, 'mango milk shake', 'Noodles'];
// console.log(newMenu)

/*arrey copy*/
// const newMainMenuCopy = [...restaurant.mainMenu];
// console.log(newMainMenuCopy);

// const newStartCopy = [...restaurant.startMenu];
// console.log(newStartCopy);

/*joins array*/
// const allFoods = [...restaurant.mainMenu, ...restaurant.startMenu];
// allFoods.push('amer achar')
// console.log(allFoods)

/*Itarables=>array, string, maps, sets, not object */
// const str = "My name is shm yousuf";
// console.log(...str);
// const str2 = 'shm';
// const nameArr = [...str2];
// const [fLetter, sLetter, lLetter] = nameArr;
// console.log(fLetter);
// console.log(sLetter);
// console.log(lLetter);

// const ingredians = ['Chicken', 'Tomato', 'Lettus'];
// restaurant.burgerOrder(...ingredians);

/*coping objects*/
// const newRestaurent = { ...restaurant, founder: 'Amzad' };
// newRestaurent.name = 'Remix Food Coner'
// console.log(restaurant);
// console.log(newRestaurent);

///////////////////////////////////////////

///////////////////////////////////////////
/*Object destructuring*/

// restaurant.orderDelivery({
//   startIndex: 1,
//   mainIndex: 2,
//   time: '6:20pm',
//   address: 'Uttara, Dhaka'
// });

// restaurant.orderDelivery({
//   startIndex: 2,
//   address: 'Dhaka'
// });
// console.log(restaurant.openingHours.sun.close);

// const { category: categoryName, startMenu: menuItems } = restaurant;
// console.log(categoryName[0], menuItems[2]);

// const person = {
//   firstName: 'Jhon',
//   lastName: 'Doe'
// }
// const { firstName, lastName } = person;
// const { firstName: fName, lastName: lName } = person;
// console.log(fName, lName)

///////////////////////////////////
/*MUTING VARIABLE IN OBJECTS*/
// let a = 100;
// let b = 200;

// const obj = { a: 20, b: 30 };

// ({ a, b } = obj);
// [a, b] = [b, a]
// console.log(a, b)
////////////////////////////////////
/*NESTED OBJECTS*/
// const tupma = {
//   friend: {
//     firstName: 'Jibon',
//     lastName: 'Roy'
//   }
// }
// console.log(tupma)

// const { firstName, lastName } = tupma.friend;
// const { friend: { firstName, lastName } } = tupma;
// console.log(firstName, lastName);

////////////////////////////////////////////
/*destructuring  Array*/
/*
  মানে হচ্ছে কোনো array কে ভেঙ্গে নতুন করে আবার গঠন করা।
*/
// const arr = [10, 15, 20, 25, 30];
// const [first, second] = arr;

// console.log(first, second);

// let [main, , secondary] = restaurant.category;
// console.log(main, secondary);

// let [food1, , food2] = restaurant.mainMenu;
// console.log(food1, food2);

// [food1, food2] = [food2, food1];
// console.log(food1, food2);

//////////////////////////////////
/* Switching variables:*/
/*
  একটা ভারিয়েবলের ভ্যালুকে অন্য ভারিয়েবলে রাখাকেই মুলত সুইচিং/সোয়াপ কারা বুঝায়।
*/
// let a = 100;
// let b = 200;

// console.log(a, b);

// [a, b] = [b, a];

// console.log(a, b);

// const [fOrder, sOrder] = restaurant.order(0, 0)
// console.log(fOrder, sOrder);

//////////////////////////////////
/*Nested destructuring*/
/*
  কোনো একটা আরের ভিতরে অন্য আরেকে বের করে আনার প্রক্রিয়াকে nested distructuring বলে।
*/
// const numArr = [1, 3, [4, 6], 7];
// const [a, b, [c, d], e] = numArr;

// console.log(a, b, c, d, e);

// const nameArray = ['Jakaria', 'Jubair', ['Rupa', 'Suraiya'], 'Priti'];
// const [n1, n2, [n3, n4], n5] = nameArray;
// console.log(n1, n2, n3, n4, n5);

///////////////////////////////////
/*Dafoult value*/
// const newArr = [10, 20, 30, 40, 50];
// const [m = 5, n = 5, o = 5, p = 5, q = 5, r = 5, s = 5, t = 5] = newArr;
// console.log(m, n, o, p, q, r, s, t);
/////////////////////////////////////
