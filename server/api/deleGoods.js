let db = require('../db/index.js')

exports.post = (req, res) => {
  let goodsId = req.body.goodsId
  let sql = 'delete from goodsinfo where goodsId="'+goodsId+'"'
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
