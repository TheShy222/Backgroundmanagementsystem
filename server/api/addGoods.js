let db = require('../db/index.js')
exports.post = (req, res) => {
  let data = req.body.formdata
  let sql = 'insert into goodsinfo values ("'+data.goodsId+'","'+data.size+'","'+data.brand+'","'+data.picture+'",'+data.price+',"'+data.detail+'",'+data.reserve+')'
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
