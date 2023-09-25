import React, { useEffect, useState } from 'react';

//api
import { getCoin } from '../services/Api';
//Components
import Loader from './Loader';

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
                     coins.map(coin => <p key={coin.id}>{coin.name}</p>)
                  }
               </div> :
               <Loader />
         }
      </div>
   );
};

export default Landing;