var express = require("express");
var router = express.Router();

// import userSchema
const User = require(`../models/UserSchema`);

// GET Login
router.get(`/login`, (req, res, next) => {
  res.render(`login`, { title: `Halaman Login` });
});

// GET Registrasi
router.get(`/register`, (req, res, next) => {
  res.render(`register`, { title: `Halaman Register` });
});

// POST Registrasi
router.post(`/register`, (req, res, next) => {
  const { name, email, password, password2 } = req.body;
  console.log(req.body);

  let errors = [];
  if (!name || !email || !password || !password2) {
    errors.push(`Silahkan lengkapi data anda`);
    console.log(`Silahkan lengkapi data anda`);
  }

  if (password != password2) {
    errors.push(`Password anda tidak sama`);
    console.log(`Password anda tidak sama`);
  }
  if (errors.length > 0) {
    res.render(`register`, {
      errors,
      name,
      email,
      password,
      password2,
    });
  } else {
    User.findOne({ email: email }).then((user) => {
      if (user) {
        errors.push(`email sudah terdaftar`);
        console.log(`Email sudah terdaftar`);
        res.render(`register`, {
          errors,
          name,
          email,
          password,
          password2,
        });
      } else {
        const newUser = new User({
          name: req.body.name,
          email: req.body.email,
          password: req.body.password,
        });
        newUser
          .save()
          .then((user) => {
            console.log(user);
            console.log(`Selamat berhasil regist`);
            res.redirect(`/auth/login`);
          })
          .catch((err) => console.log(`cobaaa`));
      }
    });
  }
});

module.exports = router;
