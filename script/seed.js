'use strict'

const {db, models: {User, Type} } = require('../server/db')

/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */
async function seed() {
  await db.sync({ force: true }) // clears db and matches models to tables
  console.log('db synced!')

  //create user types 
  const [employee, admin, parent, child] = await Promise.all([
    Type.create({ id:1, name: 'employee' }),
    Type.create({ id:2, name: 'admin' }),
    Type.create({ id:3, name: 'parent' }),
    Type.create({ id:4, name: 'child' })
  ])

  // Creating Users
  const users = await Promise.all([
    User.create({ username: 'cody', password: '123', typeId: 2 }),
    User.create({ username: 'murphy', password: '123', typeId: 1 }),
    User.create({ username: 'lumpy', password: '123', typeId: 3 }),
    User.create({ username: 'skunk', password: '123', typeId: 4 })
  ])

  console.log(`seeded ${users.length} users`)
  console.log(`seeded successfully`)
  return {
    users: {
      cody: users[0],
      murphy: users[1],
      lumpy: users[2],
      skunk: users[3]
    }
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
