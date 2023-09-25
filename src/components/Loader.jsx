import React from 'react';

//Styles
import styles from './Loader.module.css'

const Loader = () => {
   return (
      <div className={styles.container}>
         <div className={styles.loader}></div>
         <h1>Loading ...</h1>
      </div>
   );
};

export default Loader;