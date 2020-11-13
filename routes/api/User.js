const express = require('express')
const router = express.Router()
const bcrypt = require("bcryptjs");
const config=require('config')
const jwt = require("jsonwebtoken");

//Item models

const User = require('../../models/User')


router.get('/',(req,res)=>{
    res.send('register')
})





//signup


router.post('/register', async (req, res) => {
  const { name, email, password } = req.body;

  // Simple validation
  if (!name || !email || !password) {
    return res.status(400).json({ msg: 'Please enter all fields' });
  }

  try {
    const user = await User.findOne({ email });
    if (user) return res.status(400).json( {msg: 'User already exists'});
    // if (user) throw Error( {msg: 'User already exists'});

    const salt = await bcrypt.genSalt(10);
    if (!salt) throw Error('Something went wrong with bcrypt');

    const hash = await bcrypt.hash(password, salt);
    if (!hash) throw Error('Something went wrong hashing the password');

    const newUser = new User({
      name:name,
      email:email,
      password: hash
    });

    const savedUser = await newUser.save();
    if (!savedUser) throw Error('Something went wrong saving the user');

    const token = jwt.sign({ id: savedUser._id }, config.get('JWT_SECRET'), {
      expiresIn: 3600
    });

    res.status(200).json({
      token,
      user: {
        id: savedUser.id,
        name: savedUser.name,
        email: savedUser.email
      }
    });
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
});

module.exports= router;








































