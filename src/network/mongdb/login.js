// 这个文件两大用途  
// 1 第一个用途  在这个文件启动 然后要让数据库也启动  node user.js
// 2 第二用法 要让数据库数据规整schema
console.log('user执行了文件')
const db = require('./db')
//  mongoose下面有一个官方提供的Schema的方法  可用规整数据 更加用于商业化 防止数据乱入
const userSchema = new db.mongoose.Schema({
    username: { type: String },
    password: { type: String },
})
// db.mongoose.model的第一个参数 要求是数据库内部的集合  必须加S 
// 第二个参数  是规整化这个数据的结构的Schema
module.exports = db.mongoose.model('users', userSchema)


// db这个文件是连接总数据库的  起了个名字叫做gz2104a  
// user.js这个文件 是做gz2104a 数据库假面加了一个集合叫做users  并且让userSchema锁死了数据格式