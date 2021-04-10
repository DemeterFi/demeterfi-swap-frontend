import { useEffect, useState } from 'react'
import { usePairContract } from './useContract'

type ApiResponse = {
  prices: {
    [key: string]: string
  }
  update_at: string
}

/**
 * Due to Cors the api was forked and a proxy was created
 * @see https://github.com/pancakeswap/gatsby-pancake-api/commit/e811b67a43ccc41edd4a0fa1ee704b2f510aa0ba
 */
const api = 'https://api.pancakeswap.com/api/v1/price'

const useGetPriceData = () => {

  const dmtrBNBContract = usePairContract("0x2CFef064616D94a89ED244F295412dc9eFBD97CF")
  const bnbBusdContract = usePairContract("0x1b96b92314c44b159149f7e0303511fb2fc4774f")

  const [[price, loaded], setPrice] = useState([0, false])


  useEffect(() => {
    const fetchData = async () => {
      try {


        const [[_dmtr1, _bnb1], [_bnb2, _busd2]] = await Promise.all([
          dmtrBNBContract?.getReserves(),
          bnbBusdContract?.getReserves()
        ])

        console.log(Number(_bnb1) / Number(_dmtr1), Number(_busd2) / Number(_bnb2));
        setPrice([(Number(_bnb1) / Number(_dmtr1)) * (Number(_busd2) / Number(_bnb2)), true]);

      } catch (error) {
        setPrice([0, false]);
      }
    }

    fetchData()
  }, [setPrice, dmtrBNBContract, bnbBusdContract])

  return {
    prices: loaded ? {
      DMTR: price
    } : {}
  }

}

export default useGetPriceData
