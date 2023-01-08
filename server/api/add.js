let db = require('../db/index.js')

exports.post = (req, res) => {
  var user = req.body.username
  var pass = req.body.password
  var sql = 'insert into loginInfo values ('+user+','+pass+')'
  db.query(sql, (err, data) => {
    if (err) {
      return res.send('错误：' + err.message)
    }
    res.send({
      code: 1,
      msg: "添加数据成功"
    })
  })
}
