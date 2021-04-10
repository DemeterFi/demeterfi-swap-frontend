import { MenuEntry } from '@pancakeswap-libs/uikit'


const homepage = "https://demeterfi.com/"

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: `${homepage}`,
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    initialOpenState: true,
    items: [
      {
        label: 'Exchange',
        href: '/swap',
      },
      {
        label: 'Liquidity',
        href: '/pool',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: `${homepage}farms`,
  },
  {
    label: 'Silos',
    icon: 'PoolIcon',
    href: `${homepage}silos`,
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Github',
        href: 'https://github.com/demeter-finance/',
        newTab: true,
      },
      {
        label: 'Docs',
        href: 'https://docs.demeterfi.com',
        newTab: true,
      },
      {
        label: 'Medium',
        href: 'https://medium.com/@DemeterFi',
        newTab: true,
      },
    ],
  },
]

export const configCNLang: MenuEntry[] = [
  {
    label: '主页',
    icon: 'HomeIcon',
    href: `${homepage}`,
  },
  {
    label: '交易',
    icon: 'TradeIcon',
    initialOpenState: true,
    items: [
      {
        label: '币币交易',
        href: '/swap',
      },
      {
        label: '流动性池',
        href: '/pool',
      },
    ],
  },
  {
    label: '农场',
    icon: 'FarmIcon',
    href: `${homepage}farms`,
  },
  {
    label: '筒仓',
    icon: 'PoolIcon',
    href: `${homepage}silos`,
  },
  {
    label: '更多',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Github',
        href: 'https://github.com/demeter-finance/',
        newTab: true,
      },
      {
        label: 'Docs',
        href: 'https://docs.demeterfi.com',
        newTab: true,
      },
      {
        label: 'Medium',
        href: 'https://medium.com/@DemeterFi',
        newTab: true,
      },
    ],
  },
]

export default config
