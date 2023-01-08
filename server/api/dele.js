let db = require('../db/index.js')

exports.post = (req, res) => {
  var user = req.body.username
  var sql = 'delete from logininfo where name="'+user+'"'
  db.query(sql, (err, data) => {
    if (err) {
      return res.send('错误：' + err.message)
    }
    res.send({
      code: 1,
      msg: "删除数据成功"
    })
  })
}
