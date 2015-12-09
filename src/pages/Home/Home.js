import React from 'react';

import HomepageSearch from '../../components/HomepageSearch/HomepageSearch';
import HowItWorks from '../../containers/HowItWorks/HowItWorks';

const Home = () => {
  const styles = require('./Home.less');
  return (
    <div>
      <div className={styles.homepage}>
        <h1><strong>Najděte školu</strong> pro své děti.</h1>
        <p>Naše škola je otevřená databáze mateřských, základních a středních škol na území České republiky, kterou spravují školy a rodiče.</p>
      </div>
      <HomepageSearch />
      <HowItWorks />
    </div>
  );
};

export default Home;
