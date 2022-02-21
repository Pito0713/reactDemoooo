export const TIME_FORMAT = 'YYYY-MM-DD HH:mm:ss'

export const TIMEZONE_ENABLE = true

// 預設時間
export const TIMEZONE_DEFAULT = 'Asia/Shanghai'

// 預設語言
export const LANGUAGE_DEFAULT = 'zh-cn'


export const MENU_LIST = [
  {
    code: 1,
    name: 'accounts',
    text: '帳號管理',
    child: [
      { code: 11, name: 'hall', text: '會員管理', route: 'reactDemoooo/accounts/hall' },
      { code: 12, name: 'hall-create', text: '新增帳號', route: 'reactDemoooo/accounts/hall-create' },
    ],
  },
  {
    code: 2,
    name: 'points',
    text: '點數管理',
    child: [
      { code: 21, name: 'point', text: '點數管理', route: 'reactDemoooo/points/point' },
      { code: 22, name: 'point-serve', text: '點數服務', route: 'reactDemoooo/points/point-serve' },
    ],
  }
]

export const STATUS_OPTION = [
  { label: '還在喘氣', value: 0 },
  { label: '還可以動', value: 1 },
  { label: '人都沒了', value: 2 },
]

export const POINT_OPTION = [
  { label: '單買', value: 0 ,options: '單買'},
  { label: '套組', value: 1 ,options: '套組'},
  { label: '團購', value: 2, options: '團購'},
]
export const POINTSERVE_OPTION = [
  { label: '給你錢', value: 0 ,options: '給你錢'},
  { label: '給我錢', value: 1 ,options: '給我錢套組'},
  { label: '搞錯了', value: 2, options: '搞錯了'},
]


