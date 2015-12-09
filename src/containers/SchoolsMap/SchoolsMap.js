import React, { PropTypes } from 'react';
import styles from './SchoolsMap.less';

const getPosition = (school) => school.metadata.address.location;
// const getBounds = (schools) => shools.map(school => getPosition(school));

const SchoolsMap = ({
  schools,
  select
}) => {
  if (!schools || schools.length === 0) {
    return <p><i className={'fa fa-spinner fa-spin'} /> Načítám mapu...</p>; // leaflet does not support server-side rendering
  }

  const { Map, TileLayer, Marker, Popup } = require('react-leaflet');
  const onClick = school => () => {
    if (!!select) {
      select(school);
    }
  };

  return (
    <Map
      className={styles.map}
      bounds={getPosition(schools[0])}
      zoom={16}
      >
      <TileLayer
        url={'http://{s}.tile.osm.org/{z}/{x}/{y}.png'}
        attribution={'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}
        />
      {schools.map(school => (
        <Marker
          position={getPosition(school)}
          key={school._id}
          onClick={onClick(school)}>
          <Popup>
            <strong>{school.metadata.name}</strong>
          </Popup>
        </Marker>
      ))}
    </Map>
  );
};

SchoolsMap.propTypes = {
  schools: PropTypes.array.isRequired,
  onMarkerClick: PropTypes.func
};

export default SchoolsMap;
