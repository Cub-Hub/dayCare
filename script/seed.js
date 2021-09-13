'use strict'

const {db, models: {User, Type, Category, Student, School} } = require('../server/db')

/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */
async function seed() {
  await db.sync({ force: true }) // clears db and matches models to tables
  console.log('db synced!')

  //create schools
  const [cots4tots, lidsNkids, wildChilds] = await Promise.all([
    School.create({ name: 'cots4tots', maxLat: 30.3949, 
    minLat: 30.3942, maxLon: -84.2357, minLon: -84.2367 }),
    School.create({ name: 'lidsNkids', maxLat: 30.3919, 
    minLat: 30.39, maxLon: -84.231, minLon: -84.233 }),
    School.create({ name: 'wildChilds', maxLat: 82.3949, 
    minLat: 82.3942, maxLon: -67.2357, minLon: -67.2367})
  ])

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
  const [cody, qonk, otaco, lumpy, skunk, tonka, puddle, plop, wurton, blublub, pwanko, slarzard, oreo] = await Promise.all([
    User.create({ username: 'cody', password: '123', typeId: 2, schoolId:cots4tots.id }),
    User.create({ username: 'qonk', password: '123', typeId: 1, schoolId:cots4tots.id }),
    User.create({ username: 'otaco', password: '123', typeId: 1, schoolId:cots4tots.id }),
    User.create({ username: 'lumpy', password: '123', typeId: 3, schoolId:cots4tots.id }),
    User.create({ username: 'skunk', password: '123', typeId: 3, schoolId:cots4tots.id }),
    User.create({ username: 'tonka', password: '123', typeId: 3, schoolId:wildChilds.id  }),
    User.create({ username: 'puddle', password: '123', typeId: 3, schoolId:lidsNkids.id }),
    User.create({ username: 'plop', password: '123', typeId: 3, schoolId:lidsNkids.id }),
    User.create({ username: 'wurton', password: '123', typeId: 3, schoolId:lidsNkids.id }),
    User.create({ username: 'blublub', password: '123', typeId: 3, schoolId:lidsNkids.id  }),
    User.create({ username: 'pwanko', password: '123', typeId: 3, schoolId:lidsNkids.id  }),
    User.create({ username: 'slarzard', password: '123', typeId: 3, schoolId:cots4tots.id  }),
    User.create({ username: 'oreo', password: '123', typeId: 3, schoolId:wildChilds.id  }),

  ])
  const users = [cody, qonk, otaco, lumpy, skunk, tonka, puddle, plop, wurton, blublub, pwanko, slarzard, oreo];

  // create students
  const students = await Promise.all([
    Student.create({ firstName: 'bodank', lastName: 'waddle', userId: lumpy.id, 
    categoryId: infant.id, age: 1,
    imgURL: "https://cub-hub.s3.us-east-2.amazonaws.com/toddler3.jpeg", schoolId:cots4tots.id }),
    Student.create({ firstName: 'wuhwuh', lastName: 'waddle', userId: lumpy.id, 
    categoryId: toddler.id, age: 2,
    imgURL: "https://cub-hub.s3.us-east-2.amazonaws.com/toddler1.jpeg", schoolId:cots4tots.id }),
    Student.create({ firstName: 'tinky', lastName: 'waddle', userId: lumpy.id,
    categoryId: preschooler.id , age: 3,
    imgURL: "https://cub-hub.s3.us-east-2.amazonaws.com/toddler2.png", schoolId:cots4tots.id }),
    Student.create({ firstName: 'wompum', lastName: 'spee', userId: skunk.id,
    categoryId: infant.id, age: 1, schoolId:cots4tots.id }),
    Student.create({ firstName: 'bumpy', lastName: 'spee', userId: skunk.id,
    categoryId: toddler.id, age: 2, schoolId:cots4tots.id }),
    Student.create({ firstName: 'slepmuch', lastName: 'wackcack', userId: tonka.id,
    categoryId: toddler.id, age: 2, schoolId:wildChilds.id }),
    Student.create({ firstName: 'farp', lastName: 'paddle', userId: puddle.id,
    categoryId: infant.id, age: 1, schoolId:lidsNkids.id }),
    Student.create({ firstName: 'burlap', lastName: 'paddle', userId: puddle.id,
    categoryId: infant.id, age: 1, schoolId:lidsNkids.id }),
    Student.create({ firstName: 'plinkity', lastName: 'paddle', userId: puddle.id,
    categoryId: toddler.id, age: 2, schoolId:lidsNkids.id }),
    Student.create({ firstName: 'raanchy', lastName: 'paddle', userId: puddle.id,
    categoryId: infant.id, age: 1, schoolId:lidsNkids.id }),
    Student.create({ firstName: 'frizbee', lastName: 'cushion', userId: plop.id,
    categoryId: toddler.id, age: 2, schoolId:lidsNkids.id }),
    Student.create({ firstName: 'yaggy', lastName: 'cushion', userId: plop.id,
    categoryId: preschooler.id, age: 3, schoolId:lidsNkids.id }),
    Student.create({ firstName: 'bluns', lastName: 'cushion', userId: plop.id,
    categoryId: kindergartener.id, age: 4, schoolId:lidsNkids.id }),
    Student.create({ firstName: 'larklark', lastName: 'sauce', userId: wurton.id,
    categoryId: infant.id, age: 1, schoolId:lidsNkids.id }),
    Student.create({ firstName: 'tonton', lastName: 'sauce', userId: wurton.id,
    categoryId: toddler.id, age: 2, schoolId:lidsNkids.id }),
    Student.create({ firstName: 'bwassy', lastName: 'sauce', userId: wurton.id,
    categoryId: preschooler.id, age: 3, schoolId:lidsNkids.id }),
    Student.create({ firstName: 'shinbutt', lastName: 'sprout', userId: blublub.id,
    categoryId: kindergartener.id, age: 4, schoolId:lidsNkids.id }),
    Student.create({ firstName: 'leebow', lastName: 'sprout', userId: blublub.id,
    categoryId: infant.id, age: 1, schoolId:lidsNkids.id }),
    Student.create({ firstName: 'kuhkaw', lastName: 'sprout', userId: blublub.id,
    categoryId: toddler.id, age: 2, schoolId:lidsNkids.id }),
    Student.create({ firstName: 'flicky', lastName: 'nards', userId: pwanko.id,
    categoryId: preschooler.id, age: 3, schoolId:lidsNkids.id }),
    Student.create({ firstName: 'punty', lastName: 'nards', userId: pwanko.id,
    categoryId: kindergartener.id, age: 4, schoolId:lidsNkids.id }),
    Student.create({ firstName: 'gasweebo', lastName: 'nards', userId: pwanko.id,
    categoryId: infant.id, age: 1, schoolId:lidsNkids.id }),
    Student.create({ firstName: 'lyrpip', lastName: 'nards', userId: pwanko.id,
    categoryId: toddler.id, age: 2, schoolId:lidsNkids.id }),
    Student.create({ firstName: 'warcking', lastName: 'moiss', userId: slarzard.id,
    categoryId: preschooler.id, age: 3, schoolId:cots4tots.id }),
    Student.create({ firstName: 'smooshed', lastName: 'moiss', userId: slarzard.id,
    categoryId: kindergartener.id, age: 4, schoolId:cots4tots.id }),
    Student.create({ firstName: 'jandypandy', lastName: 'moiss', userId: slarzard.id,
    categoryId: infant.id, age: 1, schoolId:cots4tots.id }),
    Student.create({ firstName: 'itchbalm', lastName: 'voink', userId: oreo.id,
    categoryId: toddler.id, age: 2, schoolId:wildChilds.id }),
    Student.create({ firstName: 'eeep', lastName: 'voink', userId: oreo.id,
    categoryId: preschooler.id, age: 3, schoolId:wildChilds.id }),
    Student.create({ firstName: 'numplum', lastName: 'voink', userId: oreo.id,
    categoryId: kindergartener.id, age: 4, schoolId:wildChilds.id }),
    Student.create({ firstName: 'fleatuck', lastName: 'voink', userId: oreo.id,
    categoryId: toddler.id, age: 2, schoolId:wildChilds.id }),
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
