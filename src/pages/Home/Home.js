import React from 'react';

import HomepageSearch from '../../components/HomepageSearch/HomepageSearch';
import HowItWorks from '../../containers/HowItWorks/HowItWorks';

const Home = () => {
  const styles = require('./Home.less');
  return (
    <div className={styles.hideoverflow}>
      <div className={styles.homepage}>
        <h1><strong>Najděte školu</strong> pro své děti.</h1>
        <p><strong>Moje školy</strong> je databáze mateřských, základních a středních škol na území České republiky sestavená z otevřených dat veřejných institucí.</p>
      </div>
      <HomepageSearch />
      <HowItWorks />
    </div>
  );
};

export default Home;
