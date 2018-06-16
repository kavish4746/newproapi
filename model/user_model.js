var db=require('../dbconnection');

var user={

getAllUserById:function(item,callback){

return db.query('Select * from user_tbl where Email_id=? and Password=?',[item.Email_id,item.Password],callback);
},
 getAllUserByEmailId:function(id,callback){
    
    return db.query('Select * from user_tbl where Email_id=?',[id],callback);
 },
 getAllUser:function(callback){
    
     return db.query('Select * from user_tbl',callback);
 },
addUser:function(item,callback){
     return db.query('insert into user_tbl values(?,?,?,?,?,?,?)',[item.Email_id,item.Username,item.Password,item.Mob_no,item.City,item.Gender,item.Address],callback);
},
// deleteTask:function(id,callback){
//     return db.query('delete from task where Id=?',[Id],callback);
// },
updateUser:function(id,item,callback){
     return db.query('update user_tbl set Username=?,Password=?,Mob_no=?,City=?,Gender=?,Address=? where Email_id=?',[item.Username,item.Password,item.Mob_no,item.City,item.Gender,item.Address,id],callback)
 },
 getPwd:function(id,callback){
    
    return db.query('Select Password from user_tbl where Email_id=?',[id],callback);
 }

};
module.exports=user;