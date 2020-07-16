const mongoose = require('mongoose');
const config = require('config');
const { check, validationResult } = require('express-validator');
const express = require('express');
const Users = require('../../models/Users');
const router = express.Router();

//@route  POST api/user
//@desc   Register User
//@access Public

router.post(
  '/',
  [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Please enter valid email').isEmail(),
    check('phone', 'Please enter PhoneNumber').not().isEmpty(),
    check('company', 'Please enter your Company Name').not().isEmpty(),
    check('address', 'Please enter valid address').not().isEmpty(),
  ],

  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { name, email, phone, company, address } = req.body;

    try {
      //See if user exists
      let user = await Users.findOne({ email });
      if (user) {
        return res
          .status(400)
          .json({ errors: [{ mgs: 'User already exists' }] });
      }

      user = new Users({
        name,
        email,
        phone,
        company,
        address,
      });

      //Saving the user in database
      await user.save();

      res.json({ user });
    } catch (error) {
      console.log(error.message);
      res.status(500).send('Server Error');
    }
  }
);

//@route  GET api/user
//@desc   Get all Users
//@access Public

router.get('/', async (req, res) => {
  try {
    let users = await Users.find();
    res.json({ users });
  } catch (error) {
    console.log(error.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
