'use strict'

const {db, models: {User, Type, Category, Student, School, Group} } = require('../server/db')

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
    School.create({ name: 'wildChilds', maxLat: 90.3949, 
    minLat: 20.3942, maxLon: -60.2357, minLon: -90.2367})
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

  //create groups
  const [cotsA, cotsB, cotsC, cotsD, cotsE, cotsF, lidsA, lidsB, lidsC, lidsD, lidsE, lidsF] = await Promise.all([
    Group.create({ name: 'Room A', schoolId: cots4tots.id, categoryId: 1 }),
    Group.create({ name: 'Room B', schoolId: cots4tots.id, categoryId: 2 }),
    Group.create({ name: 'Room C', schoolId: cots4tots.id, categoryId:  3 }),
    Group.create({ name: 'Room D', schoolId: cots4tots.id, categoryId: 4 }),
    Group.create({ name: 'Room E', schoolId: cots4tots.id, categoryId: 1 }),
    Group.create({ name: 'Room F', schoolId: cots4tots.id, categoryId: 2 }),
    Group.create({ name: 'Room A', schoolId: lidsNkids.id, categoryId: 1 }),
    Group.create({ name: 'Room B', schoolId: lidsNkids.id, categoryId: 2  }),
    Group.create({ name: 'Room C', schoolId: lidsNkids.id, categoryId: 3 }),
    Group.create({ name: 'Room D', schoolId: lidsNkids.id, categoryId: 4 }),
    Group.create({ name: 'Room E', schoolId: lidsNkids.id, categoryId: 1 }),
    Group.create({ name: 'Room F', schoolId: lidsNkids.id, categoryId: 2 }),
  ])

  // Creating Users

  const [olsock, lemon, onion, tums, shward, gumps, widdle, otaco, kimp, bean, qonk, pregut, frobeets, scunchy, cody,
     lumpy, skunk, slarzard, hoonfunk, tonka, oreo, puddle, plop, wurton, blublub, pwanko, toespink, flerk] = await Promise.all([
    User.create({ username: 'olsock', password: '123', typeId: 1, schoolId:cots4tots.id, groupId: cotsA.id }),
    User.create({ username: 'lemon', password: '123', typeId: 1, schoolId:cots4tots.id, groupId: cotsA.id }),
    User.create({ username: 'onion', password: '123', typeId: 1, schoolId:cots4tots.id, groupId: cotsB.id  }),
    User.create({ username: 'tums', password: '123', typeId: 1, schoolId:cots4tots.id, groupId: cotsC.id  }),
    User.create({ username: 'shward', password: '123', typeId: 1, schoolId:cots4tots.id, groupId: cotsD.id  }),
    User.create({ username: 'gumps', password: '123', typeId: 1, schoolId:cots4tots.id, groupId: cotsE.id  }),
    User.create({ username: 'widdle', password: '123', typeId: 1, schoolId:cots4tots.id, groupId: cotsF.id  }),
    User.create({ username: 'otaco', password: '123', typeId: 1, schoolId:cots4tots.id, groupId: cotsA.id }),
    User.create({ username: 'kimp', password: '123', typeId: 1, schoolId:lidsNkids.id, groupId: lidsA.id }),
    User.create({ username: 'bean', password: '123', typeId: 1, schoolId:lidsNkids.id, groupId: lidsB.id }),
    User.create({ username: 'qonk', password: '123', typeId: 1, schoolId:lidsNkids.id, groupId: lidsC.id }),
    User.create({ username: 'pregut', password: '123', typeId: 1, schoolId:lidsNkids.id, groupId: lidsD.id }),
    User.create({ username: 'frobeets', password: '123', typeId: 1, schoolId:lidsNkids.id, groupId: lidsE.id }),
    User.create({ username: 'scunchy', password: '123', typeId: 1, schoolId:lidsNkids.id, groupId: lidsF.id }),
    User.create({ username: 'cody', password: '123', typeId: 2, schoolId:cots4tots.id }),
    User.create({ username: 'lumpy', password: '123', typeId: 3, schoolId:cots4tots.id }),
    User.create({ username: 'skunk', password: '123', typeId: 3, schoolId:cots4tots.id }),
    User.create({ username: 'slarzard', password: '123', typeId: 3, schoolId:cots4tots.id  }),
    User.create({ username: 'hoonfunk', password: '123', typeId: 3, schoolId:cots4tots.id  }),
    User.create({ username: 'tonka', password: '123', typeId: 3, schoolId:wildChilds.id  }),
    User.create({ username: 'oreo', password: '123', typeId: 3, schoolId:wildChilds.id  }),
    User.create({ username: 'puddle', password: '123', typeId: 3, schoolId:lidsNkids.id }),
    User.create({ username: 'plop', password: '123', typeId: 3, schoolId:lidsNkids.id }),
    User.create({ username: 'wurton', password: '123', typeId: 3, schoolId:lidsNkids.id }),
    User.create({ username: 'blublub', password: '123', typeId: 3, schoolId:lidsNkids.id  }),
    User.create({ username: 'pwanko', password: '123', typeId: 3, schoolId:lidsNkids.id  }),
    User.create({ username: 'toespink', password: '123', typeId: 3, schoolId:lidsNkids.id  }),
    User.create({ username: 'flerk', password: '123', typeId: 3, schoolId:wildChilds.id  }),
  ])
  const users = [olsock, lemon, onion, tums, shward, gumps, widdle, kimp, bean, pregut, frobeets, scunchy, cody, qonk, otaco, lumpy, skunk, 
    tonka, puddle, plop, wurton, blublub, pwanko, slarzard, oreo, hoonfunk, toespink, flerk];
    
  // create students
  const students = await Promise.all([
    Student.create({ firstName: 'bodank', lastName: 'waddle', userId: lumpy.id, 
    categoryId: infant.id, age: 1, groupId: cotsA.id,
    imgURL: "https://cub-hub.s3.us-east-2.amazonaws.com/toddler3.jpeg", schoolId:cots4tots.id }),
    Student.create({ firstName: 'wuhwuh', lastName: 'waddle', userId: lumpy.id, 
    categoryId: toddler.id, age: 2, groupId: cotsB.id,
    imgURL: "https://cub-hub.s3.us-east-2.amazonaws.com/toddler1.jpeg", schoolId:cots4tots.id }),
    Student.create({ firstName: 'tinky', lastName: 'waddle', userId: lumpy.id,
    categoryId: preschooler.id , age: 3, groupId: cotsC.id,
    imgURL: "https://cub-hub.s3.us-east-2.amazonaws.com/toddler2.png", schoolId:cots4tots.id }),
    Student.create({ firstName: 'bodank', lastName: 'waddle', userId: flerk.id, imgURL: "https://cub-hub.s3.us-east-2.amazonaws.com/boy-1.png",
    categoryId: infant.id, age: 1, groupId: cotsA.id, schoolId:wildChilds.id }),
    Student.create({ firstName: 'wuhwuh', lastName: 'waddle', userId: flerk.id, imgURL: "https://cub-hub.s3.us-east-2.amazonaws.com/boy-2.png",
    categoryId: toddler.id, age: 2, groupId: cotsB.id, schoolId:wildChilds.id }),
    Student.create({ firstName: 'tinky', lastName: 'waddle', userId: flerk.id, imgURL: "https://cub-hub.s3.us-east-2.amazonaws.com/boy-3.png",
    categoryId: preschooler.id , age: 3, groupId: cotsC.id, schoolId:wildChilds.id }),
    Student.create({ firstName: 'wompum', lastName: 'spee', userId: flerk.id, imgURL: "https://cub-hub.s3.us-east-2.amazonaws.com/boy-4.png",
    categoryId: infant.id, age: 1, schoolId:wildChilds.id, groupId: cotsA.id }),
    Student.create({ firstName: 'slurgpum', lastName: 'spee', userId: flerk.id, imgURL: "https://cub-hub.s3.us-east-2.amazonaws.com/boy-5.png",
    categoryId: infant.id, age: 1, schoolId:wildChilds.id, groupId: cotsA.id }),
    Student.create({ firstName: 'bumpy', lastName: 'spee', userId: flerk.id, imgURL: "https://cub-hub.s3.us-east-2.amazonaws.com/boy-6.png",
    categoryId: toddler.id, age: 2, schoolId:wildChilds.id, groupId: cotsB.id }),
    Student.create({ firstName: 'slepmuch', lastName: 'wackcack', userId: flerk.id, imgURL: "https://cub-hub.s3.us-east-2.amazonaws.com/boy-7.png",
    categoryId: toddler.id, age: 2, schoolId:wildChilds.id }),
    Student.create({ firstName: 'farp', lastName: 'paddle', userId: flerk.id, imgURL: "https://cub-hub.s3.us-east-2.amazonaws.com/boy-8.png",
    categoryId: infant.id, age: 1, schoolId:wildChilds.id, groupId: lidsA.id }),
    Student.create({ firstName: 'burlap', lastName: 'paddle', userId: flerk.id, imgURL: "https://cub-hub.s3.us-east-2.amazonaws.com/boy-9.png",
    categoryId: infant.id, age: 1, schoolId:wildChilds.id, groupId: lidsA.id }),
    Student.create({ firstName: 'plinkity', lastName: 'paddle', userId: flerk.id, imgURL: "https://cub-hub.s3.us-east-2.amazonaws.com/boy-10.png",
    categoryId: toddler.id, age: 2, schoolId:wildChilds.id, groupId: lidsB.id }),
    Student.create({ firstName: 'raanchy', lastName: 'paddle', userId: flerk.id, imgURL: "https://cub-hub.s3.us-east-2.amazonaws.com/boy-11.png",
    categoryId: infant.id, age: 1, schoolId:wildChilds.id, groupId: lidsA.id }),
    Student.create({ firstName: 'frizbee', lastName: 'cushion', userId: flerk.id, imgURL: "https://cub-hub.s3.us-east-2.amazonaws.com/boy-12.png",
    categoryId: toddler.id, age: 2, schoolId:wildChilds.id, groupId: lidsB.id }),
    Student.create({ firstName: 'yaggy', lastName: 'cushion', userId: flerk.id, imgURL: "https://cub-hub.s3.us-east-2.amazonaws.com/boy-13.png",
    categoryId: preschooler.id, age: 3, schoolId:wildChilds.id, groupId: lidsC.id }),
    Student.create({ firstName: 'bluns', lastName: 'cushion', userId: flerk.id, imgURL: "https://cub-hub.s3.us-east-2.amazonaws.com/boy-14.png",
    categoryId: kindergartener.id, age: 4, schoolId:wildChilds.id, groupId: lidsD.id }),
    Student.create({ firstName: 'larklark', lastName: 'sauce', userId: flerk.id, imgURL: "https://cub-hub.s3.us-east-2.amazonaws.com/boy-15.png",
    categoryId: infant.id, age: 1, schoolId:wildChilds.id, groupId: lidsA.id }),
    Student.create({ firstName: 'tonton', lastName: 'sauce', userId: flerk.id, imgURL: "https://cub-hub.s3.us-east-2.amazonaws.com/boy-16.png",
    categoryId: toddler.id, age: 2, schoolId:wildChilds.id, groupId: lidsB.id }),
    Student.create({ firstName: 'bwassy', lastName: 'sauce', userId: flerk.id, imgURL: "https://cub-hub.s3.us-east-2.amazonaws.com/boy-17.png",
    categoryId: preschooler.id, age: 3, schoolId:wildChilds.id, groupId: lidsC.id }),
    Student.create({ firstName: 'shinbutt', lastName: 'sprout', userId: flerk.id, imgURL: "https://cub-hub.s3.us-east-2.amazonaws.com/boy-18.png",
    categoryId: kindergartener.id, age: 4, schoolId:wildChilds.id, groupId: lidsD.id }),
    Student.create({ firstName: 'leebow', lastName: 'sprout', userId: flerk.id, imgURL: "https://cub-hub.s3.us-east-2.amazonaws.com/boy-19.png",
    categoryId: infant.id, age: 1, schoolId:wildChilds.id, groupId: lidsA.id }),
    Student.create({ firstName: 'kuhkaw', lastName: 'sprout', userId: flerk.id, imgURL: "https://cub-hub.s3.us-east-2.amazonaws.com/boy-20.png",
    categoryId: toddler.id, age: 2, schoolId:wildChilds.id, groupId: lidsB.id }),
    Student.create({ firstName: 'flicky', lastName: 'nards', userId: flerk.id, imgURL: "https://cub-hub.s3.us-east-2.amazonaws.com/boy-21.png",
    categoryId: preschooler.id, age: 3, schoolId:wildChilds.id, groupId: lidsC.id }),
    Student.create({ firstName: 'punty', lastName: 'nards', userId: flerk.id, imgURL: "https://cub-hub.s3.us-east-2.amazonaws.com/boy-22.png",
    categoryId: kindergartener.id, age: 4, schoolId:wildChilds.id, groupId: lidsD.id }),
    Student.create({ firstName: 'gasweebo', lastName: 'nards', userId: flerk.id, imgURL: "https://cub-hub.s3.us-east-2.amazonaws.com/boy.png",
    categoryId: infant.id, age: 1, schoolId:wildChilds.id, groupId: lidsA.id }),
    Student.create({ firstName: 'lyrpip', lastName: 'nards', userId: flerk.id, imgURL: "https://cub-hub.s3.us-east-2.amazonaws.com/girl.png",
    categoryId: toddler.id, age: 2, schoolId:wildChilds.id, groupId: lidsB.id }),
    Student.create({ firstName: 'warcking', lastName: 'moiss', userId: flerk.id, imgURL: "https://cub-hub.s3.us-east-2.amazonaws.com/girl-1.png",
    categoryId: preschooler.id, age: 3, schoolId:wildChilds.id, groupId: cotsC.id }),
    Student.create({ firstName: 'smooshed', lastName: 'moiss', userId: flerk.id, imgURL: "https://cub-hub.s3.us-east-2.amazonaws.com/girl-2.png",
    categoryId: kindergartener.id, age: 4, schoolId:wildChilds.id, groupId: cotsD.id }),
    Student.create({ firstName: 'jandypandy', lastName: 'moiss', userId: flerk.id, imgURL: "https://cub-hub.s3.us-east-2.amazonaws.com/girl-3.png",
    categoryId: infant.id, age: 1, schoolId:wildChilds.id, groupId: cotsA.id }),
    Student.create({ firstName: 'itchbalm', lastName: 'voink', userId: flerk.id, imgURL: "https://cub-hub.s3.us-east-2.amazonaws.com/girl-4.png",
    categoryId: toddler.id, age: 2, schoolId:wildChilds.id }),
    Student.create({ firstName: 'eeep', lastName: 'voink', userId: flerk.id, imgURL: "https://cub-hub.s3.us-east-2.amazonaws.com/girl-5.png",
    categoryId: preschooler.id, age: 3, schoolId:wildChilds.id }),
    Student.create({ firstName: 'numplum', lastName: 'voink', userId: flerk.id, imgURL: "https://cub-hub.s3.us-east-2.amazonaws.com/girl-6.png",
    categoryId: kindergartener.id, age: 4, schoolId:wildChilds.id }),
    Student.create({ firstName: 'fleatuck', lastName: 'voink', userId: flerk.id, imgURL: "https://cub-hub.s3.us-east-2.amazonaws.com/girl-7.png",
    categoryId: infant.id, age: 2, schoolId:wildChilds.id }),
    Student.create({ firstName: 'swerm', lastName: 'kahkow', userId: flerk.id, imgURL: "https://cub-hub.s3.us-east-2.amazonaws.com/girl-8.png",
    categoryId: infant.id, age: 1, schoolId:wildChilds.id, groupId: cotsA.id }),
    Student.create({ firstName: 'lipgoosh', lastName: 'kahkow', userId: flerk.id, imgURL: "https://cub-hub.s3.us-east-2.amazonaws.com/girl-9.png",
    categoryId: infant.id, age: 1, schoolId:wildChilds.id, groupId: cotsA.id }),
    Student.create({ firstName: 'shimmity', lastName: 'kahkow', userId: flerk.id, imgURL: "https://cub-hub.s3.us-east-2.amazonaws.com/girl-10.png",
    categoryId: infant.id, age: 1, schoolId:wildChilds.id, groupId: cotsA.id }),
    Student.create({ firstName: 'vurstworst', lastName: 'kahkow', userId: flerk.id, imgURL: "https://cub-hub.s3.us-east-2.amazonaws.com/girl-11.png",
    categoryId: infant.id, age: 1, schoolId:wildChilds.id, groupId: cotsA.id }),
    Student.create({ firstName: 'swoohoop', lastName: 'puckdrubs', userId: flerk.id, imgURL: "https://cub-hub.s3.us-east-2.amazonaws.com/girl-12.png",
    categoryId: toddler.id, age: 2, schoolId:wildChilds.id, groupId: cotsB.id }),
    Student.create({ firstName: 'spydigit', lastName: 'puckdrubs', userId: flerk.id, imgURL: "https://cub-hub.s3.us-east-2.amazonaws.com/girl-13.png",
    categoryId: toddler.id, age: 2, schoolId:wildChilds.id, groupId: cotsB.id }),
    Student.create({ firstName: 'klurchomp', lastName: 'puckdrubs', userId: flerk.id, imgURL: "https://cub-hub.s3.us-east-2.amazonaws.com/girl-14.png",
    categoryId: toddler.id, age: 2, schoolId:wildChilds.id, groupId: cotsB.id }),
    Student.create({ firstName: 'suckatash', lastName: 'puckrubs', userId: flerk.id, imgURL: "https://cub-hub.s3.us-east-2.amazonaws.com/girl-15.png",
    categoryId: toddler.id, age: 2, schoolId:wildChilds.id, groupId: cotsB.id }), 
    Student.create({ firstName: 'wompum', lastName: 'spee', userId: skunk.id,imgURL: "https://cub-hub.s3.us-east-2.amazonaws.com/girl-16.png",
    categoryId: infant.id, age: 1, schoolId:cots4tots.id, groupId: cotsA.id }),
    Student.create({ firstName: 'slurgpum', lastName: 'spee', userId: skunk.id,imgURL: "https://cub-hub.s3.us-east-2.amazonaws.com/girl-17.png",
    categoryId: infant.id, age: 1, schoolId:cots4tots.id, groupId: cotsA.id }),
    Student.create({ firstName: 'bumpy', lastName: 'spee', userId: skunk.id,imgURL: "https://cub-hub.s3.us-east-2.amazonaws.com/girl-18.png",
    categoryId: toddler.id, age: 2, schoolId:cots4tots.id, groupId: cotsB.id }),
    Student.create({ firstName: 'slepmuch', lastName: 'wackcack', userId: tonka.id,imgURL: "https://cub-hub.s3.us-east-2.amazonaws.com/girl-19.png",
    categoryId: toddler.id, age: 2, schoolId:wildChilds.id }),
    Student.create({ firstName: 'farp', lastName: 'paddle', userId: puddle.id,imgURL: "https://cub-hub.s3.us-east-2.amazonaws.com/girl-20.png",
    categoryId: infant.id, age: 1, schoolId:lidsNkids.id, groupId: lidsA.id }),
    Student.create({ firstName: 'burlap', lastName: 'paddle', userId: puddle.id,imgURL: "https://cub-hub.s3.us-east-2.amazonaws.com/girl-21.png",
    categoryId: infant.id, age: 1, schoolId:lidsNkids.id, groupId: lidsA.id }),
    Student.create({ firstName: 'plinkity', lastName: 'paddle', userId: puddle.id,imgURL: "https://cub-hub.s3.us-east-2.amazonaws.com/girl-22.png",
    categoryId: toddler.id, age: 2, schoolId:lidsNkids.id, groupId: lidsB.id }),
    Student.create({ firstName: 'raanchy', lastName: 'paddle', userId: puddle.id,imgURL: "https://cub-hub.s3.us-east-2.amazonaws.com/girl-23.png",
    categoryId: infant.id, age: 1, schoolId:lidsNkids.id, groupId: lidsA.id }),
    Student.create({ firstName: 'frizbee', lastName: 'cushion', userId: plop.id,imgURL: "https://cub-hub.s3.us-east-2.amazonaws.com/girl-24.png",
    categoryId: toddler.id, age: 2, schoolId:lidsNkids.id, groupId: lidsB.id }),
    Student.create({ firstName: 'yaggy', lastName: 'cushion', userId: plop.id,imgURL: "https://cub-hub.s3.us-east-2.amazonaws.com/girl-25.png",
    categoryId: preschooler.id, age: 3, schoolId:lidsNkids.id, groupId: lidsC.id }),
    Student.create({ firstName: 'bluns', lastName: 'cushion', userId: plop.id,imgURL: "https://cub-hub.s3.us-east-2.amazonaws.com/girl-26.png",
    categoryId: kindergartener.id, age: 4, schoolId:lidsNkids.id, groupId: lidsD.id }),
    Student.create({ firstName: 'larklark', lastName: 'sauce', userId: wurton.id,
    categoryId: infant.id, age: 1, schoolId:lidsNkids.id, groupId: lidsA.id }),
    Student.create({ firstName: 'tonton', lastName: 'sauce', userId: wurton.id,
    categoryId: toddler.id, age: 2, schoolId:lidsNkids.id, groupId: lidsB.id }),
    Student.create({ firstName: 'bwassy', lastName: 'sauce', userId: wurton.id,
    categoryId: preschooler.id, age: 3, schoolId:lidsNkids.id, groupId: lidsC.id }),
    Student.create({ firstName: 'shinbutt', lastName: 'sprout', userId: blublub.id,
    categoryId: kindergartener.id, age: 4, schoolId:lidsNkids.id, groupId: lidsD.id }),
    Student.create({ firstName: 'leebow', lastName: 'sprout', userId: blublub.id,
    categoryId: infant.id, age: 1, schoolId:lidsNkids.id, groupId: lidsA.id }),
    Student.create({ firstName: 'kuhkaw', lastName: 'sprout', userId: blublub.id,
    categoryId: toddler.id, age: 2, schoolId:lidsNkids.id, groupId: lidsB.id }),
    Student.create({ firstName: 'flicky', lastName: 'nards', userId: pwanko.id,
    categoryId: preschooler.id, age: 3, schoolId:lidsNkids.id, groupId: lidsC.id }),
    Student.create({ firstName: 'punty', lastName: 'nards', userId: pwanko.id,
    categoryId: kindergartener.id, age: 4, schoolId:lidsNkids.id, groupId: lidsD.id }),
    Student.create({ firstName: 'gasweebo', lastName: 'nards', userId: pwanko.id,
    categoryId: infant.id, age: 1, schoolId:lidsNkids.id, groupId: lidsA.id }),
    Student.create({ firstName: 'lyrpip', lastName: 'nards', userId: pwanko.id,
    categoryId: toddler.id, age: 2, schoolId:lidsNkids.id, groupId: lidsB.id }),
    Student.create({ firstName: 'warcking', lastName: 'moiss', userId: slarzard.id,
    categoryId: preschooler.id, age: 3, schoolId:cots4tots.id, groupId: cotsC.id }),
    Student.create({ firstName: 'smooshed', lastName: 'moiss', userId: slarzard.id,
    categoryId: kindergartener.id, age: 4, schoolId:cots4tots.id, groupId: cotsD.id }),
    Student.create({ firstName: 'jandypandy', lastName: 'moiss', userId: slarzard.id,
    categoryId: infant.id, age: 1, schoolId:cots4tots.id, groupId: cotsA.id }),
    Student.create({ firstName: 'itchbalm', lastName: 'voink', userId: oreo.id,
    categoryId: toddler.id, age: 2, schoolId:wildChilds.id }),
    Student.create({ firstName: 'eeep', lastName: 'voink', userId: oreo.id,
    categoryId: preschooler.id, age: 3, schoolId:wildChilds.id }),
    Student.create({ firstName: 'numplum', lastName: 'voink', userId: oreo.id,
    categoryId: kindergartener.id, age: 4, schoolId:wildChilds.id }),
    Student.create({ firstName: 'fleatuck', lastName: 'voink', userId: oreo.id,
    categoryId: infant.id, age: 2, schoolId:wildChilds.id }),
    Student.create({ firstName: 'swerm', lastName: 'kahkow', userId: hoonfunk.id,
    categoryId: infant.id, age: 1, schoolId:cots4tots.id, groupId: cotsA.id }),
    Student.create({ firstName: 'lipgoosh', lastName: 'kahkow', userId: hoonfunk.id,
    categoryId: infant.id, age: 1, schoolId:cots4tots.id, groupId: cotsA.id }),
    Student.create({ firstName: 'shimmity', lastName: 'kahkow', userId: hoonfunk.id,
    categoryId: infant.id, age: 1, schoolId:cots4tots.id, groupId: cotsA.id }),
    Student.create({ firstName: 'vurstworst', lastName: 'kahkow', userId: hoonfunk.id,
    categoryId: infant.id, age: 1, schoolId:cots4tots.id, groupId: cotsA.id }),
    Student.create({ firstName: 'swoohoop', lastName: 'puckdrubs', userId: toespink.id,
    categoryId: toddler.id, age: 2, schoolId:cots4tots.id, groupId: cotsB.id }),
    Student.create({ firstName: 'spydigit', lastName: 'puckdrubs', userId: toespink.id,
    categoryId: toddler.id, age: 2, schoolId:cots4tots.id, groupId: cotsB.id }),
    Student.create({ firstName: 'klurchomp', lastName: 'puckdrubs', userId: toespink.id,
    categoryId: toddler.id, age: 2, schoolId:cots4tots.id, groupId: cotsB.id }),
    Student.create({ firstName: 'suckatash', lastName: 'puckrubs', userId: toespink.id,
    categoryId: toddler.id, age: 2, schoolId:cots4tots.id, groupId: cotsB.id }),
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
