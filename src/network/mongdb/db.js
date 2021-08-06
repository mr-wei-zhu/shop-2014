const mongoose = require('mongoose')
console.log('db这个文件执行了')
// 1 连接本地数据库或者云数据库  use gz2104
mongoose.connect('mongodb://localhost:27017/gz2104')
// use gz2104a
// mongoose.connect('mongodb+srv://qianfeng2012:654321AAAA@cluster0.ugafb.mongodb.net/qianfeng2012?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
// 2 连接成功监听
mongoose.connection.on('connected', () => {
    console.log('数据库连接成功了')
})
// 3 连接断开

mongoose.connection.on('disconnected', () => {
    console.log('数据库disconnected了')
})



// 4 连接错误
mongoose.connection.on('error', () => {
    console.log('数据库error')
})


// 5导入导出
module.exports = {
    mongoose: mongoose
}



// const userSchema = new db.mongoose.Schema({

// })