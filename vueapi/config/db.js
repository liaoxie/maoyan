const mongoose =require('mongoose');
const url ='mongodb://127.0.0.1:27017/maoyan'

mongoose.connect(url,{useNewUrlParser:true}).then(()=>{
     console.log('数据库链接成功')
}).catch(error=>{
    console.log('数据库链接失败')
})
module.exports=mongoose;