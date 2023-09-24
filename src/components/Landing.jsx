import React, { useEffect } from 'react';

//api
import { getCoin } from '../services/Api';

const Landing = () => {

   useEffect(() => {
      const fetchAPI = async () => {
         const data = await getCoin();
         console.log(data);
      }

      fetchAPI()
   }, [])

   return (
      <div>
         Landing
      </div>
   );
};

export default Landing;