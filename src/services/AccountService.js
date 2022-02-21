class AccountService {
  getAccountlist = (body) => {
    return new Promise((resolve, reject) => {
      // == testData ==
      const res = {
        data: [
          {
            key: 0,
            account: 'llrtest001',
            name: '千眼白龍',
            amount: 123,
            ip: '1.2.3.4',
            status: 0,
            createRange: '2021-12-28T12:12:12Z',
          },
          {
            key: 1,
            account: 'llrtest002',
            name: '真紅眼黑龍',
            amount: 123678,
            ip: '1.2.3.4',
            status: 1,
            createRange: '2021-12-31T12:12:12Z',
          },
          {
            key: 2,
            account: 'llrtest003',
            name: '黑魔導',
            amount: 678,
            ip: '1.2.3.4',
            status: 2,
            createRange: '2021-12-31T12:12:12Z',
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
        if (!['', null, undefined].includes(body.name)) return item.name === body.name
        return true
      })
      res.data = res.data.filter(item => {
        if (!['', null, undefined].includes(body.status[0])) return item.status === body.status[0]
        return true
      })

      resolve(res)
    })
  }

  createAccount = (body) => {
    return new Promise((resolve, reject) => {
      // == testData ==
      const res = true
      resolve(res)
    })
  }
}

export default new AccountService()
