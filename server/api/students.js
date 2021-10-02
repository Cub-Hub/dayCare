const router = require('express').Router()
const { models: { Student, Checkin, School, User, Category, Group } } = require('../db')
module.exports = router

router.get('/checkins', async (req, res, next) => {
  try {
    const checkins = await Checkin.findAll({})
    res.json(checkins)
  } catch (err) {
    next(err)
  }
})

router.get('/', async (req, res, next) => {
  try {
    const students = await Student.findAll({
      include: [School, User, Category, Group]
    })
    res.json(students)
  } catch (err) {
    next(err)
  }
})
// router.get('/:id', async (req, res, next) => {
//   const id = req.params.id * 1;
//   try {
//     const student = await Student.findAll({
//       where: { id: id }
//     });
//     res.send(student)
//   } catch (error) {
//     next(error)
//   }
// })

router.put('/:id', async (req, res, next) => {

  const id = req.body.id;
  try {
    const student = await Student.update({ isPending: false }, { where: { id: id } });
    res.json(student)
  } catch (error) {
    next(error)
  }
})

router.post('/create', async (req, res, next) => {
  try {
    const newStudent = await Student.create(req.body.newStudent);
    res.send(newStudent)
  } catch (error) {
    next(error)
  }
})

// router.post('/:id', async (req, res, next) => {
//   const id = req.body.id * 1;
//   try {
//     const student = await Student.update(req.body, { where: { id: id } });
//     res.json(student);
//   } catch (error) {
//     next(error)
//   }
// })