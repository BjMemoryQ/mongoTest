const express = require('express')
const router = express.Router()
const db = require('./db')


// 储存用户名密码
router.post('/signup', function (req, res) {
  new db.User(req.body.userInfo).save(function (err) {
    if (err) {
      res.status(500).send()
      return
    }
    res.send()
  })
})

// 登录
router.post('/login', function (req, res) {
  req.session.user = req.body.userInfo
  res.send()
})

// 根据用户名获取用户
router.get('/login/:name', function (req, res) {
  db.User.findOne({ name: req.params.name }, function (err, docs) {
    if (err) {
      console.error(err)
      return
    }
    res.send(docs)
  })
})

module.exports = router