import React from 'react';

import HomepageSearch from '../../containers/HomepageSearch/HomepageSearch';
import HowItWorks from '../../components/HowItWorks/HowItWorks';
import styles from './Home.less';

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
const Home = () => (
  <div>
    <div className={styles.homepage}>
      <h1><strong>Najděte školu</strong> pro své děti.</h1>
      <p>Naše škola je otevřená databáze mateřských, základních a středních škol na území České republiky, kterou spravují školy a rodiče.</p>
    </div>
    <HomepageSearch />
    <HowItWorks />
  </div>
);

export default Home;
