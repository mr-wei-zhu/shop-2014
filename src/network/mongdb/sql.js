const user = require('./user')
// 先学会用代码连接数据库 并且配置  然后再学代码操作数据库

// nodejs操作数据库  第一个插入多个数据
// nodejs操作 数据库 代码操作数据库 语法和命令行差不多   差异在有代码的错误处理 工作中都用node

// user.insertMany([{
//     username:'宋江',
//     password:123456,
//     age:11,
   
// },{
//     username:'卢俊义',
//     password:123456,
//     age:2,
   
// },{
//     username:'吴用',
//     password:123456,
//     age:111,
    
// },{
//     username:'公孙胜',
//     password:123456,
//     age:19,
   
// },{
//     username:'关胜',
//     password:123456,
//     age:19,
   
// },{
//     username:'林冲',
//     password:123456,
//     age:19,
  
// },{
//     username:'秦明',
//     password:123456,
//     age:15,
   
// },{
//     username:'呼延灼',
//     password:123456,
//     age:40,
    
// },{
//     username:'花荣',
//     password:123456,
//     age:66,
    
// },{
//     username:'柴进',
//     password:123456,
//     age:55,
   
// },{
//     username:'李应',
//     password:123456,
//     age:88,
   
// }],(err)=>{
//     if(err) {
//         console.log('err')
//     }else {
//         console.log('数据库写入成功')
//     }
// })






// nodejs操作数据库 如何删除  deleteOne 

// user.deleteOne({username:'宋江'},(err,data)=>{
//     if(err) {
//         console.log('err',err)
//     }else {
//         console.log('删除成功')
//         console.log(data)
//     }
// })





// nodejs操作数据库 如何删除  deleteMany

// user.deleteMany({username:'卢俊义'},(err,data)=>{
//     if(err) {
//         console.log('err',err)
//     }else {
//         console.log('删除成功')
//         console.log(data)
//     }
// })




// vue里面有一个key值绑定  经常用它删除后端数据  前后端联调经常用
//  用宇宙唯一ID删除数据  数据库中经常有重复数据 这个方法可用做到精准删除 
// user.findByIdAndDelete('60ee89dc41c58b4af871799f',(err,data)=>{
//     if(err) {
//         console.log('err',err)
//     }else {
//         console.log('宇宙唯一id删除成功')
//     }
// })





// 更新方法 update 

// user.updateOne({username:'公孙胜'},{$set:{username:'公孙胜2222'}},(err,data)=>{
//     if(err) {
//         console.log('err',err)
//     }else {
//         console.log('修改成功')
//     }
// })




// 更改多个的 使用  updateMany  

// user.updateMany({username:'林冲'},{$set:{username:'linchong2222'}},(err,data)=>{
//     if(err) {
//         console.log('err',err)
//     }else {
//         console.log(data)
//         console.log('修改全部林冲成功')
//     }
// })




// 查询数据   查询全部数据

// user.find({},(err,data)=>{
//     if(err) {
//         console.log('err')
//     }
//     console.log(data)
// })





// 查询数据  linchong2222

// user.findOne({username:'linchong2222'},(err,data)=>{
//     if(err) {
//         console.log('err')
//     }
//     console.log(data)
// })




// 查询一个区间  要求年龄小于50 

// user.find({age:{$lt:50}},(err,data)=>{
//     if(err) {
//         console.log('err',err)
//     } else {
//         console.log(data)
//         console.log('年龄小于50')
//     }
// })



// 查询一个区间  要求年龄大于50 
// user.find({age:{$gt:50}},(err,data)=>{
//     if(err) {
//         console.log('err',err)
//     } else {
//         console.log(data)
       
//     }
// })




// 查询一个区间  要求年龄大于等于88 
// user.find({age:{$gte:88}},(err,data)=>{
//     if(err) {
//         console.log('err',err)
//     } else {
//         console.log(data)
       
//     }
// })


// 下去自己试 小于等于88  



// 现在要求 大于等于30  小于等于88 

// user.find({$and:[
//     {age:{$gte:30}},
//     {age:{$lte:88}},
// ]},(err,data)=>{
//     if(err) {
//         console.log('err',err)
//     }else {
//         console.log(data)
//     }
// })








// 分页的查询  

// user.find({}).skip(2).limit(5).exec((err,data)=>{
//     if(err) {
//         console.log('err',err)
//     }else {
//         console.log('跳过前两条  限制 五条的数据')
//         console.log(data)
//     }
// })



// var songs =[
//     {name:'刚刚好', singer:'薛之谦', url:'http://music.163.com/xxx'},
//     {name:'最佳歌手', singer:'许嵩', url:'http://music.163.com/xxx'},
//     {name:'初学者', singer:'薛之谦', url:'http://music.163.com/xxx'},
//     {name:'绅士', singer:'薛之谦', url:'http://music.163.com/xxx'},
//     {name:'我们', singer:'陈伟霆', url:'http://music.163.com/xxx'},
//     {name:'画风', singer:'后弦', url:'http://music.163.com/xxx'},
//     {name:'We Are One', singer:'郁可唯', url:'http://music.163.com/xxx'} 
// ]


 
 










