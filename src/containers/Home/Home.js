import React, { Component } from 'react';

import HomepageSearch from '../HomepageSearch/HomepageSearch';
import HowItWorks from '../HowItWorks/HowItWorks';

export default class Home extends Component {
  render() {
    const styles = require('./Home.less');
    // require the logo image both from client and server
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
  }
}
