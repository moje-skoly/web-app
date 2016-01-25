import React, { PropTypes } from 'react';
import styles from './SchoolsMap.less';

export const getPosition = (school) => school.metadata.address.location;
// const getBounds = (schools) => shools.map(school => getPosition(school));

const SchoolsMap = ({
  nonFilteredSchools = [],
  center = null,
  select
}) => {
  // leaflet does not support server-side rendering
  if (!!process.env.NODE) {
    return <p><i className={'fa fa-spinner fa-spin'} /> Načítám mapu...</p>;
  }

  // remove schools without given location (damaged data)
  const schools = nonFilteredSchools.filter(school => school.metadata.address !== undefined && school.metadata.address.location !== undefined);

  const { Map, TileLayer, Marker, Popup } = require('react-leaflet');
  const onClick = school => () => {
    if (!!select) {
      select(school);
    }
  };

  // default position is the center of Prague and a bit unzoomed
  const mapCenter = center !== null ? center : { lat: 50.0803197, lon: 14.4155353 };
  const zoom = schools.length > 0 ? 16 : 12;

  return (
    <Map
      className={styles.map}
      center={mapCenter}
      zoom={zoom}
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
  center: PropTypes.object,
  onMarkerClick: PropTypes.func
};

export default SchoolsMap;
