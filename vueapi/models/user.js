const db=require('../config/db')
const Schema=new db.Schema({
    username:String,
    password:String,
    avatar:{
        type:String,
        default:
            'http://b-ssl.duitang.com/uploads/item/201712/22/20171222223729_d8HCB.jpeg'
    }
});
module.exports=db.model('user',Schema)  