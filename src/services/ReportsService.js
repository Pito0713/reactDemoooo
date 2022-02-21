class ReportsService {
  // == 站台數據 ==
  getSiteList = () => {
    return new Promise((resolve, reject) => {
      // == testData ==
      const res = {
        data: [
          {
            unfinishProduct: 145,
            finishProduct: 1585,
            unfinishAmount: 1233,
            finishAmount: 591312,
          },
        ],
        peopleTotal: 12367,
        productTotal: 2000,
        AmountTotal: 987234,
      }
      resolve(res)
    })
  }

  // == 轉點紀錄 ==
  getPointList = ({ body }) => {
    return new Promise((resolve, reject) => {
      // == testData ==
      const res = {
        data: [
          {
            id: 1,
            account: 'account1',
            generalAgent: 'generalAgent1',
            agent: 'agent1',
            orderType: 'DEPOSIT',
            gameName: 'gameName1',
            orderStatus: 1,
            amount: 10,
            updateTime: '2021-11-26T01:53:13Z',
          },
          {
            id: 2,
            account: 'account2',
            generalAgent: 'generalAgent2',
            agent: 'agent2',
            orderType: 'DEPOSIT',
            gameName: 'gameName2',
            orderStatus: 2,
            amount: 10,
            updateTime: '2021-11-26T01:53:13Z',
          },
          {
            id: 3,
            account: 'account3',
            generalAgent: 'generalAgent3',
            agent: 'agent3',
            orderType: 'DEPOSIT',
            gameName: 'gameName3',
            orderStatus: 1,
            amount: 10,
            updateTime: '2021-11-26T01:53:13Z',
          },
        ],
        total: 100,
        totalAmount: 100,
      }

      res.data = res.data.filter(item => {
        if (body.account !== undefined) return item.account === body.account
        return true
      })

      res.data = res.data.filter(item => {
        if (body.generalAgent !== 0) return item.generalAgent === body.generalAgent
        return true
      })

      res.data = res.data.filter(item => {
        if (body.agent !== 0) return item.agent === body.agent
        return true
      })
      resolve(res)
    })
  }
}

export default new ReportsService()
