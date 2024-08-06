// Reduce Function:  Reduce function in JavaScript takes in an accumulator and a current value.
//     The accumulator is used to keep track of values and perform operations on them.
const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)

     // OR 

const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)

console.log(myTotal);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);


// Another example

const user = [
    { firstname: "M", lastname: "Zohaib", age: 21 },
    { firstname: "Ahmad", lastname: "Sajjad", age: 45 },
    { firstname: "falak", lastname: "Ali", age: 21 },
    { firstname: "Talha", lastname: "Shafique", age: 67 },
  ];

  const output = user.reduce((acc, current) => {

    if(current.age < 30){
        acc.push(current.firstname);
    }
    
    return acc;

  }, []);

  console.log(output);
