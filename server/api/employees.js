const router = require("express").Router();
const {
  models: { User, Clockin },
} = require("../db");
module.exports = router;

router.get("/clockins", async (req, res, next) => {
  try {
    const clockins = await Clockin.findAll({});
    res.json(clockins);
  } catch (err) {
    next(err);
  }
});

router.post("/clockin", async (req, res, next) => {
  try {
    const today = new Date();
    const dateStr = today.toDateString();

    await Clockin.create({ date: dateStr, userId: req.body.id });

    res.send("checkin complete");
  } catch (err) {
    next(err);
  }
});

router.post("/clockout", async (req, res, next) => {
    try {
      const today = new Date();
      const dateStr = today.toDateString();
  
      await Clockin.create({ date: dateStr, userId: req.body.id, clockedin: false });
  
      res.send("checkout complete");
    } catch (err) {
      next(err);
    }
  });

  router.put("/activate", async (req, res, next) => {
    try {
  
      await User.update(
          {isActive: true},
          {where: {id:req.body.id}}
      )
  
      res.send("User is active");
    } catch (err) {
      next(err);
    }
  });

  router.put("/deactivate", async (req, res, next) => {
    try {
  
      await User.update(
          {isActive: false},
          {where: {id:req.body.id}}
      )
  
      res.send("User has been deactivated");
    } catch (err) {
      next(err);
    }
  });
