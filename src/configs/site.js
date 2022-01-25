export const CURRENCY_MILLION = '万'

export const DEFAULT_DELAY_TIME = 500

export const TIME_FORMAT = 'YYYY-MM-DD HH:mm:ss'

export const TIMEZONE_ENABLE = true

export const TIMEZONE_DEFAULT = 'Asia/Shanghai'

export const TIMEZONE_LIST = [
  { value: 'Asia/Shanghai', text: '北京时间' },
]

// 預設語言
export const LANGUAGE_DEFAULT = 'zh-cn'

export const LANGUAGE_LIST = [
  { label: '簡体中文', value: 'zh-cn', languageTags: 'zh-CN' },
]

export const MENU_LIST = [
  {
    code: 1,
    name: 'accounts',
    text: '帳號管理',
    child: [
      { code: 11, name: 'hall', text: '會員管理', route: 'accounts/hall' },
      { code: 12, name: 'hall-create', text: '新增帳號', route: 'accounts/hall-create' },
    ],
  },
  {
    code: 2,
    name: 'points',
    text: '點數管理',
    child: [
      { code: 21, name: 'point', text: '點數管理', route: 'points/point' },
      { code: 22, name: 'point-serve', text: '點數服務', route: 'points/point-serve' },
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


