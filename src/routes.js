import React from 'react';
import {IndexRoute, Route} from 'react-router';
import {
    App,
    About,
    Home,
    Detail,
    Comparison,
    Filter,
    NotFound,
    SchoolPreview,
    How,
    Contact
  } from './pages';

export default () => {
  /**
   * Please keep routes in alphabetical order
   */
  return (
    <Route path="/" component={App}>
      {/* Home (main) route */}
      <IndexRoute component={Home} />

      <Route path="filter/:address/:schoolType" component={Filter}>
        <Route path="preview/:previewId" component={SchoolPreview} />
      </Route>

      {/* Detail of a school */}
      <Route path="detail/:schoolId" component={Detail} />

      {/* Comparison of multiple schools */}
      <Route path="comparison/:schoolIds" component={Comparison} />

      {/* Static pages */}
      <Route path="o-projektu" component={About} />
      <Route path="jak-vybrat" component={How} />
      <Route path="kontakt" component={Contact} />

      {/* Catch all route */}
      <Route path="*" component={NotFound} status={404} />
    </Route>
  );
};
