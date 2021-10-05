'use strict'

const { db, models: { User, Type, Category, Student, School, Group } } = require('../server/db')

/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */
async function seed() {
  await db.sync({ force: true }) // clears db and matches models to tables
  console.log('db synced!')

  //create schools
  const [cots4tots, lidsNkids, wildChilds] = await Promise.all([
    School.create({
      name: 'cots4tots', maxLat: 30.3949,
      minLat: 30.3942, maxLon: -84.2357, minLon: -84.2367
    }),
    School.create({
      name: 'lidsNkids', maxLat: 30.3919,
      minLat: 30.39, maxLon: -84.231, minLon: -84.233
    }),
    School.create({
      name: 'wildChilds', maxLat: 90.3949,
      minLat: 20.3942, maxLon: -60.2357, minLon: -90.2367
    })
  ])

  //create user types 
  const [employee, admin, parent] = await Promise.all([
    Type.create({ id: 1, name: 'employee' }),
    Type.create({ id: 2, name: 'admin' }),
    Type.create({ id: 3, name: 'parent' })
  ])

  //create categories
  const [infant, toddler, preschooler, kindergartener] = await Promise.all([
    Category.create({ id: 1, name: 'infant' }),
    Category.create({ id: 2, name: 'toddler' }),
    Category.create({ id: 3, name: 'preschooler' }),
    Category.create({ id: 4, name: 'kindergartner' })
  ])

  //create groups
  const [cotsA, cotsB, cotsC, cotsD, cotsE, cotsF, lidsA, lidsB, lidsC, lidsD, lidsE, lidsF] = await Promise.all([
    Group.create({ name: 'Room A', schoolId: cots4tots.id, categoryId: 1 }),
    Group.create({ name: 'Room B', schoolId: cots4tots.id, categoryId: 2 }),
    Group.create({ name: 'Room C', schoolId: cots4tots.id, categoryId: 3 }),
    Group.create({ name: 'Room D', schoolId: cots4tots.id, categoryId: 4 }),
    Group.create({ name: 'Room E', schoolId: cots4tots.id, categoryId: 1 }),
    Group.create({ name: 'Room F', schoolId: cots4tots.id, categoryId: 2 }),
    Group.create({ name: 'Room A', schoolId: lidsNkids.id, categoryId: 1 }),
    Group.create({ name: 'Room B', schoolId: lidsNkids.id, categoryId: 2 }),
    Group.create({ name: 'Room C', schoolId: lidsNkids.id, categoryId: 3 }),
    Group.create({ name: 'Room D', schoolId: lidsNkids.id, categoryId: 4 }),
    Group.create({ name: 'Room E', schoolId: lidsNkids.id, categoryId: 1 }),
    Group.create({ name: 'Room F', schoolId: lidsNkids.id, categoryId: 2 }),
  ])

  // Creating Users


  const [Khadijah, Jayson, Suzannah, Enzo, Brisa, Eliza, Cameron, Frida, Rosemary, Victor, Viviana, Cooper, Molly, Harley, Admin,
    Lilianna, Javier, Terrell, Cordell, Maria, Sincere, Shayla, Lea, Amara, Gemma, Zoe, Derrick, Anabella] = await Promise.all([
      User.create({
        username: 'Bob', password: '123', typeId: 1, schoolId: cots4tots.id, groupId: cotsA.id, lastName: 'Oneil',
        imgURL: 'https://cub-hub.s3.us-east-2.amazonaws.com/emp1.jpeg', email: 'Khadijah@gmail.com', phone: '305-781-2359'
      }),
      User.create({
        username: 'Jayson', password: '123', typeId: 3, schoolId: cots4tots.id, groupId: cotsC.id, lastName: 'Foster',
        imgURL: 'https://cub-hub.s3.us-east-2.amazonaws.com/emp2.jpeg', email: 'Jayson@gmail.com', phone: '305-932-9572'
      }),
      User.create({
        username: 'Suzannah', password: '123', typeId: 1, schoolId: cots4tots.id, groupId: cotsB.id, lastName: 'Redmond',
        imgURL: 'https://cub-hub.s3.us-east-2.amazonaws.com/emp3.jpeg', email: 'Suzannah@gmail.com', phone: '305-341-2762'
      }),
      User.create({
        username: 'Enzo', password: '123', typeId: 1, schoolId: cots4tots.id, groupId: cotsA.id, lastName: 'Michael',
        imgURL: 'https://cub-hub.s3.us-east-2.amazonaws.com/emp4.jpeg', email: 'Enzo@gmail.com', phone: '305-320-4321'
      }),
      User.create({
        username: 'Brisa', password: '123', typeId: 1, schoolId: cots4tots.id, groupId: cotsD.id, lastName: 'Nguyen',
        imgURL: 'https://cub-hub.s3.us-east-2.amazonaws.com/emp5.jpeg', email: 'Brisa@gmail.com', phone: '305-126-6573'
      }),
      User.create({
        username: 'Eliza', password: '123', typeId: 1, schoolId: cots4tots.id, groupId: cotsE.id, lastName: 'Davey',
        imgURL: 'https://cub-hub.s3.us-east-2.amazonaws.com/emp6.jpeg', email: 'Eliza@gmail.com', phone: '305-130-4187'
      }),
      User.create({
        username: 'Cameron', password: '123', typeId: 1, schoolId: cots4tots.id, groupId: cotsF.id, lastName: 'Cortez',
        imgURL: 'https://cub-hub.s3.us-east-2.amazonaws.com/emp7.jpeg', email: 'Cameron@gmail.com', phone: '305-961-4356'
      }),
      User.create({
        username: 'Frida', password: '123', typeId: 1, schoolId: cots4tots.id, groupId: cotsA.id, lastName: 'Spencer',
        imgURL: 'https://cub-hub.s3.us-east-2.amazonaws.com/emp8.jpeg', email: 'Frida@gmail.com', phone: '305-396-1942'
      }),
      User.create({
        username: 'Rosemary', password: '123', typeId: 1, schoolId: lidsNkids.id, groupId: lidsA.id, lastName: 'Odom',
        imgURL: 'https://cub-hub.s3.us-east-2.amazonaws.com/emp9.jpeg', email: 'Rosemary@gmail.com', phone: '305-193-4396'
      }),
      User.create({
        username: 'Victor', password: '123', typeId: 1, schoolId: lidsNkids.id, groupId: lidsB.id, lastName: 'Flynn',
        imgURL: 'https://cub-hub.s3.us-east-2.amazonaws.com/emp10.jpeg', email: 'Victor@gmail.com', phone: '305-341-8912'
      }),
      User.create({
        username: 'Viviana', password: '123', typeId: 1, schoolId: lidsNkids.id, groupId: lidsC.id, lastName: 'Rangel',
        imgURL: 'https://cub-hub.s3.us-east-2.amazonaws.com/emp11.jpeg', email: 'Viviana@gmail.com', phone: '305-781-7773'
      }),
      User.create({
        username: 'Cooper', password: '123', typeId: 1, schoolId: lidsNkids.id, groupId: lidsD.id, lastName: 'Santiago',
        imgURL: 'https://cub-hub.s3.us-east-2.amazonaws.com/emp12.jpeg', email: 'Cooper@gmail.com', phone: '305-129-5969'
      }),
      User.create({
        username: 'Molly', password: '123', typeId: 3, schoolId: lidsNkids.id, groupId: lidsE.id, lastName: 'Benitez',
        imgURL: 'https://cub-hub.s3.us-east-2.amazonaws.com/emp13.jpeg', email: 'Molly@gmail.com', phone: '305-781-9992'
      }),
      User.create({
        username: 'Harley', password: '123', typeId: 1, schoolId: lidsNkids.id, groupId: lidsF.id, lastName: 'Bailey',
        imgURL: 'https://cub-hub.s3.us-east-2.amazonaws.com/emp14.jpeg', email: 'Harley@gmail.com', phone: '305-433-3992'
      }),
      User.create({ username: 'Admin', password: '123', typeId: 2, schoolId: cots4tots.id, lastName: 'Hawkins', email: 'Admin@gmail.com', }),
      User.create({ username: 'Lilianna', password: '123', typeId: 3, schoolId: cots4tots.id, lastName: 'Anderson', email: 'Lilianna@gmail.com', }),
      User.create({ username: 'Javier', password: '123', typeId: 3, schoolId: cots4tots.id, lastName: 'Coleman', email: 'Javier@gmail.com', }),
      User.create({ username: 'Terrell', password: '123', typeId: 3, schoolId: cots4tots.id, lastName: 'Scott', email: 'Terrell@gmail.com', }),
      User.create({ username: 'Cordell', password: '123', typeId: 3, schoolId: cots4tots.id, lastName: 'Berry', email: 'Cordell@gmail.com', }),
      User.create({ username: 'Maria', password: '123', typeId: 3, schoolId: wildChilds.id, lastName: 'Nelson', email: 'Maria@gmail.com', }),
      User.create({ username: 'Sincere', password: '123', typeId: 3, schoolId: wildChilds.id, lastName: 'Fisher', email: 'Sincere@gmail.com', }),
      User.create({ username: 'Shayla', password: '123', typeId: 3, schoolId: lidsNkids.id, lastName: 'Henderson', email: 'Shayla@gmail.com', }),
      User.create({ username: 'Lea', password: '123', typeId: 3, schoolId: lidsNkids.id, lastName: 'Colon', email: 'Lea@gmail.com', }),
      User.create({ username: 'Amara', password: '123', typeId: 3, schoolId: lidsNkids.id, lastName: 'Mendez', email: 'Amara@gmail.com', }),
      User.create({ username: 'Gemma', password: '123', typeId: 3, schoolId: lidsNkids.id, lastName: 'Goodwin', email: 'Gemma@gmail.com', }),
      User.create({ username: 'Zoe', password: '123', typeId: 3, schoolId: lidsNkids.id, lastName: 'Berry', email: 'Zoe@gmail.com', }),
      User.create({ username: 'Derrick', password: '123', typeId: 3, schoolId: lidsNkids.id, lastName: 'Peters', email: 'Derrick@gmail.com', }),
      User.create({ username: 'Anabella', password: '123', typeId: 3, schoolId: wildChilds.id, lastName: 'Francis', email: 'Anabella@gmail.com', }),
    ])
  const users = [Khadijah, Jayson, Suzannah, Enzo, Brisa, Eliza, Cameron, Rosemary, Victor, Cooper, Molly, Harley, Admin, Viviana, Frida, Lilianna, Javier,
    Maria, Shayla, Lea, Amara, Gemma, Zoe, Terrell, Sincere, Cordell, Derrick, Anabella];


  // create students
  const students = await Promise.all([
    Student.create({
      firstName: 'Raquel', lastName: 'Joyce', userId: Khadijah.id,
      categoryId: infant.id, age: 1, groupId: cotsA.id,
      imgURL: "https://cub-hub.s3.us-east-2.amazonaws.com/toddler3.jpeg", schoolId: cots4tots.id
    }),
    Student.create({
      firstName: 'Kingston', lastName: 'Hartman', userId: Khadijah.id,
      categoryId: toddler.id, age: 2, groupId: cotsB.id,
      imgURL: "https://cub-hub.s3.us-east-2.amazonaws.com/toddler1.jpeg", schoolId: cots4tots.id
    }),
    Student.create({
      firstName: 'Natalie', lastName: 'Bell', userId: Khadijah.id,
      categoryId: preschooler.id, age: 3, groupId: cotsC.id,
      imgURL: "https://cub-hub.s3.us-east-2.amazonaws.com/toddler2.png", schoolId: cots4tots.id
    }),
    Student.create({
      firstName: 'Piper', lastName: 'Rojas', userId: Jayson.id, imgURL: "https://cub-hub.s3.us-east-2.amazonaws.com/boy-1.png",
      categoryId: infant.id, age: 1, groupId: cotsA.id, schoolId: wildChilds.id
    }),
    Student.create({
      firstName: 'Vanessa', lastName: 'Greene', userId: Jayson.id, imgURL: "https://cub-hub.s3.us-east-2.amazonaws.com/boy-2.png",
      categoryId: toddler.id, age: 2, groupId: cotsB.id, schoolId: wildChilds.id
    }),
    Student.create({
      firstName: 'Adolfo', lastName: 'Villegas', userId: Jayson.id, imgURL: "https://cub-hub.s3.us-east-2.amazonaws.com/boy-3.png",
      categoryId: preschooler.id, age: 3, groupId: cotsC.id, schoolId: wildChilds.id
    }),
    Student.create({
      firstName: 'Arturo', lastName: 'Welch', userId: Jayson.id, imgURL: "https://cub-hub.s3.us-east-2.amazonaws.com/boy-4.png",
      categoryId: infant.id, age: 1, schoolId: wildChilds.id, groupId: cotsA.id
    }),
    Student.create({
      firstName: 'Jayla', lastName: 'Conley', userId: Jayson.id, imgURL: "https://cub-hub.s3.us-east-2.amazonaws.com/boy-5.png",
      categoryId: infant.id, age: 1, schoolId: wildChilds.id, groupId: cotsA.id
    }),
    Student.create({
      firstName: 'Kenneth', lastName: 'Fritz', userId: Jayson.id, imgURL: "https://cub-hub.s3.us-east-2.amazonaws.com/boy-6.png",
      categoryId: toddler.id, age: 2, schoolId: wildChilds.id, groupId: cotsB.id
    }),
    Student.create({
      firstName: 'Jaden', lastName: 'Mayer', userId: Jayson.id, imgURL: "https://cub-hub.s3.us-east-2.amazonaws.com/boy-7.png",
      categoryId: toddler.id, age: 2, schoolId: wildChilds.id
    }),
    Student.create({
      firstName: 'Quinn', lastName: 'Calderon', userId: Jayson.id, imgURL: "https://cub-hub.s3.us-east-2.amazonaws.com/boy-8.png",
      categoryId: infant.id, age: 1, schoolId: wildChilds.id, groupId: lidsA.id
    }),
    Student.create({
      firstName: 'Jaxon', lastName: 'Craig', userId: Jayson.id, imgURL: "https://cub-hub.s3.us-east-2.amazonaws.com/boy-9.png",
      categoryId: infant.id, age: 1, schoolId: wildChilds.id, groupId: lidsA.id
    }),
    Student.create({
      firstName: 'Brynn', lastName: 'Quinn', userId: Jayson.id, imgURL: "https://cub-hub.s3.us-east-2.amazonaws.com/boy-10.png",
      categoryId: toddler.id, age: 2, schoolId: wildChilds.id, groupId: lidsB.id
    }),
    Student.create({
      firstName: 'Oswaldo', lastName: 'Austin', userId: Jayson.id, imgURL: "https://cub-hub.s3.us-east-2.amazonaws.com/boy-11.png",
      categoryId: infant.id, age: 1, schoolId: wildChilds.id, groupId: lidsA.id
    }),
    Student.create({
      firstName: 'Isaac', lastName: 'Weber', userId: Jayson.id, imgURL: "https://cub-hub.s3.us-east-2.amazonaws.com/boy-12.png",
      categoryId: toddler.id, age: 2, schoolId: wildChilds.id, groupId: lidsB.id
    }),
    Student.create({
      firstName: 'Natalya', lastName: 'Valentine', userId: Jayson.id, imgURL: "https://cub-hub.s3.us-east-2.amazonaws.com/boy-13.png",
      categoryId: preschooler.id, age: 3, schoolId: wildChilds.id, groupId: lidsC.id
    }),
    Student.create({
      firstName: 'Emely', lastName: 'Summers', userId: Jayson.id, imgURL: "https://cub-hub.s3.us-east-2.amazonaws.com/boy-14.png",
      categoryId: kindergartener.id, age: 4, schoolId: wildChilds.id, groupId: lidsD.id
    }),
    Student.create({
      firstName: 'Kaylie', lastName: 'Norman', userId: Jayson.id, imgURL: "https://cub-hub.s3.us-east-2.amazonaws.com/boy-15.png",
      categoryId: infant.id, age: 1, schoolId: wildChilds.id, groupId: lidsA.id
    }),
    Student.create({
      firstName: 'Tiffany', lastName: 'Coffey', userId: Jayson.id, imgURL: "https://cub-hub.s3.us-east-2.amazonaws.com/boy-16.png",
      categoryId: toddler.id, age: 2, schoolId: wildChilds.id, groupId: lidsB.id
    }),
    Student.create({
      firstName: 'Kade', lastName: 'Fuller', userId: Jayson.id, imgURL: "https://cub-hub.s3.us-east-2.amazonaws.com/boy-17.png",
      categoryId: preschooler.id, age: 3, schoolId: wildChilds.id, groupId: lidsC.id
    }),
    Student.create({
      firstName: 'Kaley', lastName: 'Thomas', userId: Jayson.id, imgURL: "https://cub-hub.s3.us-east-2.amazonaws.com/boy-18.png",
      categoryId: kindergartener.id, age: 4, schoolId: wildChilds.id, groupId: lidsD.id
    }),
    Student.create({
      firstName: 'Rigoberto', lastName: 'Arellano', userId: Jayson.id, imgURL: "https://cub-hub.s3.us-east-2.amazonaws.com/boy-19.png",
      categoryId: infant.id, age: 1, schoolId: wildChilds.id, groupId: lidsA.id
    }),
    Student.create({
      firstName: 'Diana', lastName: 'Ellis', userId: Jayson.id, imgURL: "https://cub-hub.s3.us-east-2.amazonaws.com/boy-20.png",
      categoryId: toddler.id, age: 2, schoolId: wildChilds.id, groupId: lidsB.id
    }),
    Student.create({
      firstName: 'Rihanna', lastName: 'Buck', userId: Jayson.id, imgURL: "https://cub-hub.s3.us-east-2.amazonaws.com/boy-21.png",
      categoryId: preschooler.id, age: 3, schoolId: wildChilds.id, groupId: lidsC.id
    }),
    Student.create({
      firstName: 'Lilliana', lastName: 'House', userId: Jayson.id, imgURL: "https://cub-hub.s3.us-east-2.amazonaws.com/boy-22.png",
      categoryId: kindergartener.id, age: 4, schoolId: wildChilds.id, groupId: lidsD.id
    }),
    Student.create({
      firstName: 'Anika', lastName: 'Grant', userId: Jayson.id, imgURL: "https://cub-hub.s3.us-east-2.amazonaws.com/boy.png",
      categoryId: infant.id, age: 1, schoolId: wildChilds.id, groupId: lidsA.id
    }),
    Student.create({
      firstName: 'Evie', lastName: 'Torres', userId: Jayson.id, imgURL: "https://cub-hub.s3.us-east-2.amazonaws.com/girl.png",
      categoryId: toddler.id, age: 2, schoolId: wildChilds.id, groupId: lidsB.id
    }),
    Student.create({
      firstName: 'Ariana', lastName: 'Jennings', userId: Jayson.id, imgURL: "https://cub-hub.s3.us-east-2.amazonaws.com/girl-1.png",
      categoryId: preschooler.id, age: 3, schoolId: wildChilds.id, groupId: cotsC.id
    }),
    Student.create({
      firstName: 'Aracely', lastName: 'Zuniga', userId: Jayson.id, imgURL: "https://cub-hub.s3.us-east-2.amazonaws.com/girl-2.png",
      categoryId: kindergartener.id, age: 4, schoolId: wildChilds.id, groupId: cotsD.id
    }),
    Student.create({
      firstName: 'Nina', lastName: 'Landry', userId: Jayson.id, imgURL: "https://cub-hub.s3.us-east-2.amazonaws.com/girl-3.png",
      categoryId: infant.id, age: 1, schoolId: wildChilds.id, groupId: cotsA.id
    }),
    Student.create({
      firstName: 'Triston', lastName: 'Gilmore', userId: Jayson.id, imgURL: "https://cub-hub.s3.us-east-2.amazonaws.com/girl-4.png",
      categoryId: toddler.id, age: 2, schoolId: wildChilds.id
    }),
    Student.create({
      firstName: 'Rigoberto', lastName: 'Arellano', userId: Jayson.id, imgURL: "https://cub-hub.s3.us-east-2.amazonaws.com/girl-5.png",
      categoryId: preschooler.id, age: 3, schoolId: wildChilds.id
    }),
    Student.create({
      firstName: 'Alani', lastName: 'Lynn', userId: Jayson.id, imgURL: "https://cub-hub.s3.us-east-2.amazonaws.com/girl-6.png",
      categoryId: kindergartener.id, age: 4, schoolId: wildChilds.id
    }),
    Student.create({
      firstName: 'Beckham', lastName: 'Vaughan', userId: Jayson.id, imgURL: "https://cub-hub.s3.us-east-2.amazonaws.com/girl-7.png",
      categoryId: infant.id, age: 2, schoolId: wildChilds.id
    }),
    Student.create({
      firstName: 'Olive', lastName: 'Mendez', userId: Jayson.id, imgURL: "https://cub-hub.s3.us-east-2.amazonaws.com/girl-8.png",
      categoryId: infant.id, age: 1, schoolId: wildChilds.id, groupId: cotsA.id
    }),
    Student.create({
      firstName: 'Lorelei', lastName: 'Frost', userId: Jayson.id, imgURL: "https://cub-hub.s3.us-east-2.amazonaws.com/girl-9.png",
      categoryId: infant.id, age: 1, schoolId: wildChilds.id, groupId: cotsA.id
    }),
    Student.create({
      firstName: 'Makai', lastName: 'Maynard', userId: Jayson.id, imgURL: "https://cub-hub.s3.us-east-2.amazonaws.com/girl-10.png",
      categoryId: infant.id, age: 1, schoolId: wildChilds.id, groupId: cotsA.id
    }),
    Student.create({
      firstName: 'Hassan', lastName: 'Davis', userId: Jayson.id, imgURL: "https://cub-hub.s3.us-east-2.amazonaws.com/girl-11.png",
      categoryId: infant.id, age: 1, schoolId: wildChilds.id, groupId: cotsA.id
    }),
    Student.create({
      firstName: 'Yosef', lastName: 'Stein', userId: Jayson.id, imgURL: "https://cub-hub.s3.us-east-2.amazonaws.com/girl-12.png",
      categoryId: toddler.id, age: 2, schoolId: wildChilds.id, groupId: cotsB.id
    }),
    Student.create({
      firstName: 'Jeremy', lastName: 'Church', userId: Jayson.id, imgURL: "https://cub-hub.s3.us-east-2.amazonaws.com/girl-13.png",
      categoryId: toddler.id, age: 2, schoolId: wildChilds.id, groupId: cotsB.id
    }),
    Student.create({
      firstName: 'Parker', lastName: 'Cardenas', userId: Jayson.id, imgURL: "https://cub-hub.s3.us-east-2.amazonaws.com/girl-14.png",
      categoryId: toddler.id, age: 2, schoolId: wildChilds.id, groupId: cotsB.id
    }),
    Student.create({
      firstName: 'Sharon', lastName: 'Shaffer', userId: Jayson.id, imgURL: "https://cub-hub.s3.us-east-2.amazonaws.com/girl-15.png",
      categoryId: toddler.id, age: 2, schoolId: wildChilds.id, groupId: cotsB.id
    }),
    Student.create({
      firstName: 'Breanna', lastName: 'Mckinney', userId: Suzannah.id, imgURL: "https://cub-hub.s3.us-east-2.amazonaws.com/girl-16.png",
      categoryId: infant.id, age: 1, schoolId: cots4tots.id, groupId: cotsA.id
    }),
    Student.create({
      firstName: 'Jameson', lastName: 'Blackwell', userId: Suzannah.id, imgURL: "https://cub-hub.s3.us-east-2.amazonaws.com/girl-17.png",
      categoryId: infant.id, age: 1, schoolId: cots4tots.id, groupId: cotsA.id
    }),
    Student.create({
      firstName: 'Nadia', lastName: 'Walsh', userId: Suzannah.id, imgURL: "https://cub-hub.s3.us-east-2.amazonaws.com/girl-18.png",
      categoryId: toddler.id, age: 2, schoolId: cots4tots.id, groupId: cotsB.id
    }),
    Student.create({
      firstName: 'Jamarion', lastName: 'Esparza', userId: Victor.id, imgURL: "https://cub-hub.s3.us-east-2.amazonaws.com/girl-19.png",
      categoryId: toddler.id, age: 2, schoolId: wildChilds.id
    }),
    Student.create({
      firstName: 'Pedro', lastName: 'Schmidt', userId: Rosemary.id, imgURL: "https://cub-hub.s3.us-east-2.amazonaws.com/girl-20.png",
      categoryId: infant.id, age: 1, schoolId: lidsNkids.id, groupId: lidsA.id
    }),
    Student.create({
      firstName: 'Aaron', lastName: 'Ryan', userId: Rosemary.id, imgURL: "https://cub-hub.s3.us-east-2.amazonaws.com/girl-21.png",
      categoryId: infant.id, age: 1, schoolId: lidsNkids.id, groupId: lidsA.id
    }),
    Student.create({
      firstName: 'Franco', lastName: 'Santana', userId: Rosemary.id, imgURL: "https://cub-hub.s3.us-east-2.amazonaws.com/girl-22.png",
      categoryId: toddler.id, age: 2, schoolId: lidsNkids.id, groupId: lidsB.id
    }),
    Student.create({
      firstName: 'Clayton', lastName: 'Cain', userId: Rosemary.id, imgURL: "https://cub-hub.s3.us-east-2.amazonaws.com/girl-23.png",
      categoryId: infant.id, age: 1, schoolId: lidsNkids.id, groupId: lidsA.id
    }),
    Student.create({
      firstName: 'Zion', lastName: 'Parsons', userId: Cooper.id, imgURL: "https://cub-hub.s3.us-east-2.amazonaws.com/girl-24.png",
      categoryId: toddler.id, age: 2, schoolId: lidsNkids.id, groupId: lidsB.id
    }),
    Student.create({
      firstName: 'Monica', lastName: 'Barton', userId: Cooper.id, imgURL: "https://cub-hub.s3.us-east-2.amazonaws.com/girl-25.png",
      categoryId: preschooler.id, age: 3, schoolId: lidsNkids.id, groupId: lidsC.id
    }),
    Student.create({
      firstName: 'Kimora', lastName: 'Tyler', userId: Cooper.id, imgURL: "https://cub-hub.s3.us-east-2.amazonaws.com/girl-26.png",
      categoryId: kindergartener.id, age: 4, schoolId: lidsNkids.id, groupId: lidsD.id
    }),
    Student.create({
      firstName: 'Peter', lastName: 'Bauer', userId: Molly.id, imgURL: "https://cub-hub.s3.us-east-2.amazonaws.com/girl-26.png",
      categoryId: infant.id, age: 1, schoolId: lidsNkids.id, groupId: lidsA.id
    }),
    Student.create({
      firstName: 'Susan', lastName: 'Mckinney', userId: Molly.id, imgURL: "https://cub-hub.s3.us-east-2.amazonaws.com/girl-26.png",
      categoryId: toddler.id, age: 2, schoolId: lidsNkids.id, groupId: lidsB.id
    }),
    Student.create({
      firstName: 'Gabrielle', lastName: 'Gallegos', userId: Molly.id, imgURL: "https://cub-hub.s3.us-east-2.amazonaws.com/girl-26.png",
      categoryId: preschooler.id, age: 3, schoolId: lidsNkids.id, groupId: lidsC.id
    }),
    Student.create({
      firstName: 'Savion', lastName: 'Hale', userId: Harley.id, imgURL: "https://cub-hub.s3.us-east-2.amazonaws.com/girl-26.png",
      categoryId: kindergartener.id, age: 4, schoolId: lidsNkids.id, groupId: lidsD.id
    }),
    Student.create({
      firstName: 'Jazmin', lastName: 'Key', userId: Harley.id, imgURL: "https://cub-hub.s3.us-east-2.amazonaws.com/girl-26.png",
      categoryId: infant.id, age: 1, schoolId: lidsNkids.id, groupId: lidsA.id
    }),
    Student.create({
      firstName: 'Carissa', lastName: 'Moore', userId: Harley.id, imgURL: "https://cub-hub.s3.us-east-2.amazonaws.com/girl-26.png",
      categoryId: toddler.id, age: 2, schoolId: lidsNkids.id, groupId: lidsB.id
    }),
    Student.create({
      firstName: 'Cole', lastName: 'Mckay', userId: Viviana.id, imgURL: "https://cub-hub.s3.us-east-2.amazonaws.com/girl-26.png",
      categoryId: preschooler.id, age: 3, schoolId: lidsNkids.id, groupId: lidsC.id
    }),
    Student.create({
      firstName: 'Camren', lastName: 'Mcguire', userId: Viviana.id, imgURL: "https://cub-hub.s3.us-east-2.amazonaws.com/.png",
      categoryId: kindergartener.id, age: 4, schoolId: lidsNkids.id, groupId: lidsD.id
    }),
    Student.create({
      firstName: 'Saul', lastName: 'Ferguson', userId: Viviana.id, imgURL: "https://cub-hub.s3.us-east-2.amazonaws.com/boy-11.png",
      categoryId: infant.id, age: 1, schoolId: lidsNkids.id, groupId: lidsA.id
    }),
    Student.create({
      firstName: 'Alexus', lastName: 'Wood', userId: Viviana.id, imgURL: "https://cub-hub.s3.us-east-2.amazonaws.com/boy-18.png",
      categoryId: toddler.id, age: 2, schoolId: lidsNkids.id, groupId: lidsB.id
    }),
    Student.create({
      firstName: 'Patricia', lastName: 'Wiggins', userId: Maria.id, imgURL: "https://cub-hub.s3.us-east-2.amazonaws.com/boy-2.png",
      categoryId: preschooler.id, age: 3, schoolId: cots4tots.id, groupId: cotsC.id
    }),
    Student.create({
      firstName: 'Jarrett', lastName: 'Huerta', userId: Maria.id, imgURL: "https://cub-hub.s3.us-east-2.amazonaws.com/boy-18.png",
      categoryId: kindergartener.id, age: 4, schoolId: cots4tots.id, groupId: cotsD.id
    }),
    Student.create({
      firstName: 'Mateo', lastName: 'Mahoney', userId: Maria.id, imgURL: "https://cub-hub.s3.us-east-2.amazonaws.com/boy-12.png",
      categoryId: infant.id, age: 1, schoolId: cots4tots.id, groupId: cotsA.id
    }),
    Student.create({
      firstName: 'Judith', lastName: 'Valenzuela', userId: Gemma.id, imgURL: "https://cub-hub.s3.us-east-2.amazonaws.com/girl-1.png",
      categoryId: toddler.id, age: 2, schoolId: wildChilds.id
    }),
    Student.create({
      firstName: 'Dale', lastName: 'Kaiser', userId: Gemma.id, imgURL: "https://cub-hub.s3.us-east-2.amazonaws.com/boy-5.png",
      categoryId: preschooler.id, age: 3, schoolId: wildChilds.id
    }),
    Student.create({
      firstName: 'Tony', lastName: 'Coffey', userId: Gemma.id, imgURL: "https://cub-hub.s3.us-east-2.amazonaws.com/boy-8.png",
      categoryId: kindergartener.id, age: 4, schoolId: wildChilds.id
    }),
    Student.create({
      firstName: 'Trevon', lastName: 'Cook', userId: Gemma.id, imgURL: "https://cub-hub.s3.us-east-2.amazonaws.com/girl-3.png",
      categoryId: infant.id, age: 2, schoolId: wildChilds.id
    }),
    Student.create({
      firstName: 'Ciara', lastName: 'Frederick', userId: Lea.id, imgURL: "https://cub-hub.s3.us-east-2.amazonaws.com/girl-9.png",
      categoryId: infant.id, age: 1, schoolId: cots4tots.id, groupId: cotsA.id
    }),
    Student.create({
      firstName: 'Daisy', lastName: 'Daniels', userId: Lea.id, imgURL: "https://cub-hub.s3.us-east-2.amazonaws.com/girl-25.png",
      categoryId: infant.id, age: 1, schoolId: cots4tots.id, groupId: cotsA.id
    }),
    Student.create({
      firstName: 'Heidi', lastName: 'Rosario', userId: Lea.id, imgURL: "https://cub-hub.s3.us-east-2.amazonaws.com/girl-13.png",
      categoryId: infant.id, age: 1, schoolId: cots4tots.id, groupId: cotsA.id
    }),
    Student.create({
      firstName: 'Kira', lastName: 'Gallegos', userId: Lea.id, imgURL: "https://cub-hub.s3.us-east-2.amazonaws.com/boy-7.png",
      categoryId: infant.id, age: 1, schoolId: cots4tots.id, groupId: cotsA.id
    }),
    Student.create({
      firstName: 'Pierre', lastName: 'Logan', userId: Terrell.id, imgURL: "https://cub-hub.s3.us-east-2.amazonaws.com/boy-6.png",
      categoryId: toddler.id, age: 2, schoolId: cots4tots.id, groupId: cotsB.id
    }),
    Student.create({
      firstName: 'Lesly', lastName: 'Gill', userId: Terrell.id, imgURL: "https://cub-hub.s3.us-east-2.amazonaws.com/girl-6.png",
      categoryId: toddler.id, age: 2, schoolId: cots4tots.id, groupId: cotsB.id
    }),
    Student.create({
      firstName: 'Rudy', lastName: 'Ryan', userId: Terrell.id, imgURL: "https://cub-hub.s3.us-east-2.amazonaws.com/girl-23.png",
      categoryId: toddler.id, age: 2, schoolId: cots4tots.id, groupId: cotsB.id
    }),
    Student.create({
      firstName: 'Jaylin', lastName: 'Wolfe', userId: Terrell.id, imgURL: "https://cub-hub.s3.us-east-2.amazonaws.com/boy-2.png",
      categoryId: toddler.id, age: 2, schoolId: cots4tots.id, groupId: cotsB.id
    }),
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
