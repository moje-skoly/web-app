import React, { PropTypes } from 'react';
import styles from './SchoolsMap.less';

const SchoolsMap = ({
  schools,
  center = null,
  select
}) => {
  // leaflet does not support server-side rendering
  if (!!process.env.NODE) {
    return <p><i className={'fa fa-spinner fa-spin'} /> Načítám mapu...</p>;
  }

  // remove schools without giv en location (damaged data)
  const filteredSchools = schools.filter(school => school.metadata.address !== undefined && school.metadata.address.location !== undefined);

  const { Map, TileLayer, Marker, Popup } = require('react-leaflet');
  const onClick = school => () => {
    if (!!select) {
      select(school);
    }
  };

  // default position is the center of Prague and a bit unzoomed
  const mapCenter = center !== null ? center : { lat: 50.0803197, lon: 14.4155353 };
  const zoom = filteredSchools.length > 0 ? 12 : 10;

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
      {filteredSchools.map(school => (
        <Marker
          position={school.metadata.address.location}
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
