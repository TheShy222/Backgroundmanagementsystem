let db = require('../db/index.js')

exports.post = (req, res) => {
  var user = req.body.username
  var pass = req.body.password
  var sql = 'select * from loginInfo where name="'+user+'" and password="'+pass+'"'
  db.query(sql, (err, data) => {
    if (err) {
      return res.send('错误：' + err.message)
    }
    if(data.length>0){
      res.send({
        code: 1,
        msg: "登录成功"
      })
    }else{
      res.send({
        code: -1,
        msg: "账号或密码错误"
      })
    }
  })
}
