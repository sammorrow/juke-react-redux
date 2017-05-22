import React from 'react';
import { Link } from 'react-router';

const DUMMY_STATIONS_DATA = [
  { name: '90s Hip Hop' },
  { name: 'Death Metal' },
  { name: 'Instrumental' }
];

const Stations = (props) => {
  console.log(props)
  return (
    <div>
      <h3>Stations</h3>
      <div className="list-group">
      {
        props.stations && Object.keys(props.stations).map(station => {
          return (
            <div className="list-group-item" key={station}>
              <Link to={`stations/${station}`}>{station}</Link>
            </div>
          );
        })
      }
      </div>
  </div>
  )
}

export default Stations;
