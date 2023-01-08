let db = require('../db/index.js')

exports.post = (req, res) => {
  var user = req.body.username
  var pass = req.body.password
  var oldName=req.body.oldName
  var sql = 'update loginInfo set name="'+user+'",password="'+pass+'" where name="'+oldName+'"'
  db.query(sql, (err, data) => {
    if (err) {
      return res.send('错误：' + err.message)
    }
    res.send({
      code: 1,
      msg: "修改数据成功"
    })
  })
}
