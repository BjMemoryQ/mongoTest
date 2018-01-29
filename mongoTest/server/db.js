'use strict';

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/test');
const con = mongoose.connection;
con.on('error', console.error.bind(console, '连接数据库失败'));
con.once('open',()=>{
    //成功连接
    console.log('成功连接 !++')
})
const userSchema = new mongoose.Schema({
  name: String,
  password: String
})

const Models = {
  User: mongoose.model('User', userSchema),
  // Article: mongoose.model('Article', articleSchema)
}

module.exports = Models
