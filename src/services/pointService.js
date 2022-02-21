class PointService {
  getPointlist = (body) => {
    return new Promise((resolve, reject) => {
      // == testData ==
      const res = {
        data: [
          {
            key: 0,
            account: 'llrtest001',
            reason: 0,
            content: '買太多',
            amount: 10000,
            single: 'asdasdasd123',
            createRange: '2021-12-28T12:12:12Z',
          },
          {
            key: 1,
            account: 'llrtest002',
            reason: 1,
            content: '買看看',
            amount: 10000,
            single: 'qweqweqwe123',
            createRange: '2021-12-28T12:12:12Z',
          },
          {
            key: 2,
            account: 'llrtest003',
            reason: 2,
            content: '買一堆',
            amount: 10000,
            single: 'zxczxc123',
            createRange: '2021-12-28T12:12:12Z',
          },
        ],
        total: 100,
        totalAmount: 100,
      }
      res.data = res.data.filter(item => {
        if (!['', null, undefined].includes(body.account)) return item.account === body.account
        return true
      })
      res.data = res.data.filter(item => {
        if (!['', null, undefined].includes(body.single)) return item.single === body.single
        return true
      })
      res.data = res.data.filter(item => {
        if (!['', null, undefined].includes(body.reason[0])) return item.reason === body.reason[0]
        return true
      })

      resolve(res)
    })
  }

  updatePoint = (body) => {
    return new Promise((resolve, reject) => {
      // == testData ==
      const res = true
      resolve(res)
    })
  }

  getPointServeData = (body) => {
    return new Promise((resolve, reject) => {
      // == testData ==
      const res = {
        data: [
          {
            account: 'llrtest001',
            amount: 10000,
            createRange: '2021-12-28T12:12:12Z',
          },
          {
            account: 'llrtest002',
            amount: 10000,
            createRange: '2021-12-28T12:12:12Z',
          },
        ]
      }
      res.data = res.data.filter(item => {
        if (!['', null, undefined].includes(body.account)) return item.account === body.account
        return true
      })

      resolve(res)
    })
  }
}

export default new PointService()
