const {db, Gardener, Plot, Vegetable} = require('./models');


// const addGardener = (name, age) => {
//   Gardener.create({
//     name: name,
//     age: age
//   })
//     .then(console.log())
// }

// db.authenticate()
//   .then(() => {
//   console.log('connected to the database');
// })

const carrot = {
  name: 'Carrot',
  color: 'Orange',
  planted_on: new Date()
}

const lettuce = {
  name: 'Lettuce',
  color: 'Green',
  planted_on: new Date()
}

const squash = {
  name: 'Squash',
  color: 'Yellow',
  planted_on: new Date()
}

Vegetable.bulkCreate([carrot, lettuce, squash])
  .then(() => console.log('veggies added!'))


db.sync({force: false})
  .then(() => {
    console.log('Database synced!')
    db.close();
  })
  .catch(err => {
    console.log('Something went wrong!')
    console.log(err)
    db.close();
  })
