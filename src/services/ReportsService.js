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
    //   return xhr({
    //     method: 'post',
    //     url: '',
    //     data: body,
    //   }).then((res) => {
    //     setTimeout(() => {
    //       resolve(res)
    //     }, DEFAULT_DELAY_TIME)
    //   }).catch((err) => {
    //     const result = {
    //       code: err.code,
    //     }
    //     result.message = getErrorMessage(err.code)
    //     reject(result)
    //   })
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
    //   return xhr({
    //     method: 'post',
    //     url: '',
    //     data: body,
    //   }).then((res) => {
    //     setTimeout(() => {
    //       resolve(res)
    //     }, DEFAULT_DELAY_TIME)
    //   }).catch((err) => {
    //     const result = {
    //       code: err.code,
    //     }
    //     result.message = getErrorMessage(err.code)
    //     reject(result)
    //   })
    })
  }

  // == 代理报表 ==
  getAgentTableList = ({ body }) => {
    return new Promise((resolve, reject) => {
      // == testData ==
      const res = {
        data: [
          {
            id: 1,
            agent: 'agent1',
            agentName: 'agent1',
            totalBet: 12,
            totalEffectiveBet: 11,
            totalOrder: 101,
            profit: 502,
          },
          {
            id: 2,
            agent: 'agent2',
            agentName: 'agent2',
            totalBet: 120,
            totalEffectiveBet: 110,
            totalOrder: 1010,
            profit: 5020,
          },
          {
            id: 3,
            agent: 'agent3',
            agentName: 'agent3',
            totalBet: 1211,
            totalEffectiveBet: 1111,
            totalOrder: 10111,
            profit: 50211,
          },
        ],
        total: 100,
        totalUp: 521,
        totalProfit: 125,
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
    //   return xhr({
    //     method: 'post',
    //     url: '',
    //     data: body,
    //   }).then((res) => {
    //     setTimeout(() => {
    //       resolve(res)
    //     }, DEFAULT_DELAY_TIME)
    //   }).catch((err) => {
    //     const result = {
    //       code: err.code,
    //     }
    //     result.message = getErrorMessage(err.code)
    //     reject(result)
    //   })
    })
  }

  // == 代理上下分報表 ==
  getAgentUpperLowerReport = ({ body }) => {
    return new Promise((resolve, reject) => {
      // == testData ==
      const res = {
        data: [
          {
            id: 1,
            agentName: 'agent1',
            totalUp: 12,
            totalUpFee: 15,
            totalUpCount: 18,
            totalDown: 21,
            totalDownFee: 24,
            totalDownCount: 27,
          },
          {
            id: 2,
            agentName: 'agent2',
            totalUp: 121,
            totalUpFee: 151,
            totalUpCount: 118,
            totalDown: 211,
            totalDownFee: 214,
            totalDownCount: 271,
          },
          {
            id: 3,
            agentName: 'agent3',
            totalUp: 15,
            totalUpFee: 150,
            totalUpCount: 180,
            totalDown: 201,
            totalDownFee: 204,
            totalDownCount: 207,
          },
        ],
        total: 100,
        totalUp: 15,
        totalUpFee: 150,
        totalDown: 201,
        totalDownFee: 204,
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
    //   return xhr({
    //     method: 'post',
    //     url: '',
    //     data: body,
    //   }).then((res) => {
    //     setTimeout(() => {
    //       resolve(res)
    //     }, DEFAULT_DELAY_TIME)
    //   }).catch((err) => {
    //     const result = {
    //       code: err.code,
    //     }
    //     result.message = getErrorMessage(err.code)
    //     reject(result)
    //   })
    })
  }

  // == 會員報表 ==
  getUserReport = ({ body }) => {
    return new Promise((resolve, reject) => {
      // == testData ==
      const res = {
        data: [
          {
            id: 1,
            account: 'account1',
            agentName: 'agent1',
            totalBet: 120,
            totalEffectiveBet: 110,
            totalOrder: 1010,
            profit: 5020,
          },
          {
            id: 2,
            account: 'account2',
            agentName: 'agent2',
            totalBet: 120,
            totalEffectiveBet: 110,
            totalOrder: 1010,
            profit: 5020,
          },
          {
            id: 3,
            account: 'account3',
            agentName: 'agent3',
            totalBet: 120,
            totalEffectiveBet: 110,
            totalOrder: 1010,
            profit: 5020,
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
    //   return xhr({
    //     method: 'post',
    //     url: '',
    //     data: body,
    //   }).then((res) => {
    //     setTimeout(() => {
    //       resolve(res)
    //     }, DEFAULT_DELAY_TIME)
    //   }).catch((err) => {
    //     const result = {
    //       code: err.code,
    //     }
    //     result.message = getErrorMessage(err.code)
    //     reject(result)
    //   })
    })
  }
}

export default new ReportsService()
