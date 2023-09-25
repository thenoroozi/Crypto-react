import React, { useEffect, useState } from 'react';

//api
import { getCoin } from '../services/Api';
//Components
import Loader from './Loader';
import Coin from './coin';

const Landing = () => {

   const [coins, setCoins] = useState([])

   useEffect(() => {
      const fetchAPI = async () => {
         const data = await getCoin();
         console.log(data);
         setCoins(data)
      }

      fetchAPI()
   }, [])

   return (
      <div>
         <input type="text" placeholder='Search...' />
         {
            coins.length ?
               <div>
                  {
                     coins.map(coin => <Coin 
                          key={coin.id}
                          name={coin.name}
                          image={coin.image}
                          symbol={coin.symbol}
                          price={coin.current_price}
                          marketCap={coin.market_cap}
                          priceChange={coin.price_change_percentage_24h}
                     />)
                  }
               </div> :
               <Loader />
         }
      </div>
   );
};

export default Landing;