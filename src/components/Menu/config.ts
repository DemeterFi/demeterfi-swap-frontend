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
      // {
      //   label: 'Publish0x',
      //   href: 'https://www.publish0x.com/demeter-finance',
      //   newTab: true,
      // },
    ],
  },
]

export default config
