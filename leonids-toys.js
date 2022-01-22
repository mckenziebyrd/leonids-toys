const barbie = {
    id: 1,
    name: "Barbie",
    price: 20,
}

const careBear = {
    id: 2,
    name: "Care Bear",
    price: 17,
}

const jumpRope = {
    id: 3,
    name: "Jump Rope",
    price: 8,
}

const toys = [
    {
    id: 1,
    name: "Barbie",
    price: 20,
    }
 ,
 {
    id: 2,
    name: "Care Bear",
    price: 17,
  } ,
{
    id: 3,
    name: "Jump Rope",
    price: 8,
}
]

// console.log(toys[1].price)
// console.log(barbie.price)
// for (const toy of toys) {
//     console.log(toy)
// }
// for (const toy of toys){
//     console.log(toy.price)
// }
// for (const toy of toys) {
//     console.log(`Price is $${toy.price}`)
// }
// for (const toy of toys) {
//     console.log(toy.name)
// }

const hoolaHoop = {
        id: 4,
        name: "Hoola Hoop",
        price: 5,
}

const powerRanger = {
    id: 5,
    name: "Power Ranger",
    price: 16,
}

toys.push(hoolaHoop)

toys.push(powerRanger)
console.log(toys)

// for (const toy of toys) {
//     console.log(` The ${toy.name} costs ${toy.price} dollars`)

//  for (const toy of toys) {
//      toy.price = toy.price + 4
 

//  console.log(`The new price of ${toy.name} is ${toy.price} dollars.`)
//  }

//  const toysToFind = 2

//  for (const toy of toys) {
//      if (toy.id === toysToFind) {
//          toy.price = toy.price + 7
//          console.log(`The ${toy.name} costs ${toy.price} dollars.`)
//      }
//     }

const bubbles = {
    name: "Bubbles",
    price: 1,
}

const addBubbleToToys = (toysObject) => {
    const lastIndex = toys.length -1
    const currentLastToy = toys[lastIndex]
    const maxId = currentLastToy.id
    const idForNewToy = maxId + 1

    toysObject.id = idForNewToy
    toys.push(toysObject)
}

addBubbleToToys(bubbles)

for (const toy of toys) {
    console.log (`The ${toy.name} costs ${toy.price} dollars.`)
}