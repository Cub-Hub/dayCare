'use strict'

const {db, models: {User, Type, Category, Student} } = require('../server/db')

/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */
async function seed() {
  await db.sync({ force: true }) // clears db and matches models to tables
  console.log('db synced!')

  //create user types 
  const [employee, admin, parent] = await Promise.all([
    Type.create({ id:1, name: 'employee' }),
    Type.create({ id:2, name: 'admin' }),
    Type.create({ id:3, name: 'parent' })
  ])

  //create categories
  const [infant, toddler, preschooler, kindergartener] = await Promise.all([
    Category.create({ id:1, name: 'infant' }),
    Category.create({ id:2, name: 'toddler' }),
    Category.create({ id:3, name: 'preschooler' }),
    Category.create({ id:4, name: 'kindergartner' })
  ])

  // Creating Users
  const [cody, qonk, otaco, lumpy, skunk, tonka, puddle] = await Promise.all([
    User.create({ username: 'cody', password: '123', typeId: 2 }),
    User.create({ username: 'qonk', password: '123', typeId: 1 }),
    User.create({ username: 'otaco', password: '123', typeId: 1 }),
    User.create({ username: 'lumpy', password: '123', typeId: 3 }),
    User.create({ username: 'skunk', password: '123', typeId: 3 }),
    User.create({ username: 'tonka', password: '123', typeId: 3 }),
    User.create({ username: 'puddle', password: '123', typeId: 3 })
  ])
  const users = [cody, qonk, otaco, lumpy, skunk, tonka, puddle];

  // create students
  const students = await Promise.all([
    Student.create({ firstName: 'bodank', lastName: 'waddle', userId: lumpy.id, 
    categoryId: infant.id, age: 1,
    imgURL: "https://cub-hub.s3.us-east-2.amazonaws.com/toddler3.jpeg" }),
    Student.create({ firstName: 'wuhwuh', lastName: 'waddle', userId: lumpy.id, 
    categoryId: toddler.id, age: 2,
    imgURL: "https://cub-hub.s3.us-east-2.amazonaws.com/toddler1.jpeg"}),
    Student.create({ firstName: 'tinky', lastName: 'waddle', userId: lumpy.id,
    categoryId: preschooler.id , age: 3,
    imgURL: "https://cub-hub.s3.us-east-2.amazonaws.com/toddler2.png"}),
    Student.create({ firstName: 'wompum', lastName: 'spee', userId: skunk.id,
    categoryId: infant.id, age: 1 }),
    Student.create({ firstName: 'bumpy', lastName: 'spee', userId: skunk.id,
    categoryId: toddler.id, age: 2 }),
    Student.create({ firstName: 'slepmuch', lastName: 'wackcack', userId: tonka.id,
    categoryId: toddler.id, age: 2 }),
    Student.create({ firstName: 'farp', lastName: 'paddle', userId: puddle.id,
    categoryId: infant.id, age: 1 }),
    Student.create({ firstName: 'burlap', lastName: 'paddle', userId: puddle.id,
    categoryId: infant.id, age: 1 }),
    Student.create({ firstName: 'plinkity', lastName: 'paddle', userId: puddle.id,
    categoryId: toddler.id, age: 2 }),
    Student.create({ firstName: 'raanchy', lastName: 'paddle', userId: puddle.id,
    categoryId: kindergartener.id, age: 4 }),
  ])

  console.log(`seeded ${users.length} users`)
  console.log(`seeded successfully`)
  return {
    users
  }
}

/*
 We've separated the `seed` function from the `runSeed` function.
 This way we can isolate the error handling and exit trapping.
 The `seed` function is concerned only with modifying the database.
*/
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

/*
  Execute the `seed` function, IF we ran this module directly (`node seed`).
  `Async` functions always return a promise, so we can use `catch` to handle
  any errors that might occur inside of `seed`.
*/
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
