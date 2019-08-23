const express = require('express');
const app = express();
const UserModel = require('./models/user')
const bcry = require('bcryptjs')
const jwt=require('jsonwebtoken')

//req.body使用的中间件
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
//注册功能
// app.post('/api/wodetian', (req, res) => {
//     //1.接受到用户名与密码username\password
//     let username = req.body.username;
//     let password = req.body.password;
//     password = bcry.hashSync(password, 10)
//     const user = new UserModel({
//         username,
//         password
//     })
//     user.save().then(() => {
//         res.send({
//             code: 0,
//             msg: 'ok'
//         })
//     }).catch(() => {
//         res.send({
//             code: -1,
//             msg: '不ok'
//         })
//     })
// })
//登录功能
app.post('/api/nidetian',async (req, res) => {
    let username = req.body.username
    let password = req.body.password
    //2.使用username去到数据库查询
    let data = await UserModel.findOne({
        username
    });
    //3.判断data是否存在
    if (!data) {
        res.send({
            code: -1,
            msg: '用户名或密码不正确'
        });
        return
    }

    //4.校验密码是否正确
    if (!bcry.compareSync(password, data.password)) {
        //登录失败
        res.send({
            code: -1,
            msg: '用户名或者密码不正确'
        });
        return

    }
    //5.生成token
    let userInfo={
        userId:data._id,
        avatar:data.avatar,
        username:data.username
    }
  let token= jwt.sign({
        //令牌中隐藏的信息
        ...userInfo
    },'mygod')
    res.send({
        code:0,
        msg:'登录成功',
        data:{
           userInfo,
           token
        }
    })

})

//获取余额
app.post('/api/money',async(req,res)=>{
     //1.从请求图中获取token
     let token=req.get('Access_Token');
     //2.判断token是否存在
     if(!token){
         res.status(403).send('不允许访问')
         return;
     }
     //3.判断token的有效性
     jwt.verify(token,'mygod',(err,payload)=>{
         if(err){
             //校验失败
             res.status(401).send('token过期')
         }else{
             //校验成功
             res.send({
                 code:0,
                 msg:'ok',
                 data:{
                     money:'100w'
                 }
             })
         }
     })
})
//注册
app.post('/api/wodetian',async(req,res)=>{
    let username = req.body.username;
    let password = req.body.password;
    password = bcry.hashSync(password, 10)
    UserModel.find({username}).then(data=>{
        if(data.length>0){
            res.send({
                code:1,
                msg:'用户名已被注册'
            })
        }else{
            let user=new UserModel({
                username:username,
                password:password 
            })
            user.save().then(()=>{
                res.send({
                    code:0,
                    msg:'注册成功'
                })
            })
        }
    }).catch(error=>{
        res.send({
            code:-1,
            msg:'注册失败'
        })
    })
})



app.listen(9090);
