import AlertLog from '../models/AlertLog'

function extract(alertlog) {
  alertlog.message.now = alertlog.message.now.valueOf()
  return {
    scoutId: alertlog.scoutId,
    id: alertlog._id,
    status: alertlog.status,
    errMessage: alertlog.errMessage,
    body: alertlog.body,
    statusCode: alertlog.statusCode,
    time: alertlog.time.valueOf(),
    message: alertlog.message,
  }
}
export = server => {
  server.get('/alertlogs', (req, res) => {
    const { page = 1, pageSize = 10 } = req.params
    AlertLog.find()
      .sort({ time: -1 })
      .skip((page - 1) * pageSize)
      .limit(+pageSize)
      .lean()
      .then((alertlogs: any) => {
        res.send(alertlogs.map(extract))
      })
      .catch(err => {
        res.status(500)
        res.end(err.toString())
      })
  })
}
