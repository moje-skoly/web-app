import React from 'react';
import {IndexRoute, Route} from 'react-router';
import {
    App,
    Home,
    Detail,
    Comparison,
    Filter,
    NotFound,
    SchoolPreview
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

      {/* Detail of a school */}
      <Route path="comparison/:schoolIds" component={Comparison} />

      {/* Catch all route */}
      <Route path="*" component={NotFound} status={404} />
    </Route>
  );
};
