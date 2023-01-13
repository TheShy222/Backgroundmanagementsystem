let db = require('../db/index.js')

exports.post = (req, res) => {
  let data = req.body.formdata
  let id=req.body.goodsId
  let sql = 'update goodsInfo set goodsid="'+data.goodsId+'",size="'+data.size+'",brand="'+data.brand+'",picture="'+data.picture+'",price='+data.price+',detail="'+data.detail+'",reserve='+data.reserve+' where goodsid="'+id+'"'
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
