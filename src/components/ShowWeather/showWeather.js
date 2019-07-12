import React, { Component } from 'react';
import { Form, FormGroup, Input } from 'reactstrap';
import moment from 'moment';

import {
  Label,
  ListGroup,
  ListGroupItem,
  Day,
  Date,
  WeatherState,
  WeatherIcon,
  Temperature
} from './style';

class ShowWeather extends Component {
  render() {
    const sampleWeather = [
      {
        id: 4542817370112000,
        weather_state_name: 'Showers',
        weather_state_abbr: 's',
        wind_direction_compass: 'WSW',
        created: '2019-07-11T06:02:16.467788Z',
        applicable_date: '2019-07-10',
        min_temp: 12.620000000000001,
        max_temp: 20.939999999999998,
        the_temp: 22.485,
        wind_speed: 7.054875174307379,
        wind_direction: 244.3014218764199,
        air_pressure: 1015.355,
        humidity: 77,
        visibility: 8.253052175296268,
        predictability: 73
      },
      {
        id: 6143870192582656,
        weather_state_name: 'Showers',
        weather_state_abbr: 's',
        wind_direction_compass: 'W',
        created: '2019-07-11T06:02:19.428657Z',
        applicable_date: '2019-07-11',
        min_temp: 10.01,
        max_temp: 13.31,
        the_temp: 15.440000000000001,
        wind_speed: 6.546355489464196,
        wind_direction: 276.59886839151636,
        air_pressure: 1014.39,
        humidity: 82,
        visibility: 12.102446711206554,
        predictability: 73
      },
      {
        id: 5651251872137216,
        weather_state_name: 'Heavy Cloud',
        weather_state_abbr: 'hc',
        wind_direction_compass: 'WSW',
        created: '2019-07-11T06:02:22.360976Z',
        applicable_date: '2019-07-12',
        min_temp: 10.295,
        max_temp: 16.685,
        the_temp: 18.515,
        wind_speed: 6.682870260998435,
        wind_direction: 238.0030640982058,
        air_pressure: 1012.815,
        humidity: 74,
        visibility: 13.816188459397122,
        predictability: 71
      },
      {
        id: 5818111620022272,
        weather_state_name: 'Heavy Cloud',
        weather_state_abbr: 'hc',
        wind_direction_compass: 'WSW',
        created: '2019-07-11T06:02:25.368662Z',
        applicable_date: '2019-07-13',
        min_temp: 11.1,
        max_temp: 17.015,
        the_temp: 18.85,
        wind_speed: 8.37569068777009,
        wind_direction: 240.26062845302965,
        air_pressure: 1013.65,
        humidity: 74,
        visibility: 14.46179312813171,
        predictability: 71
      },
      {
        id: 4976212722057216,
        weather_state_name: 'Heavy Cloud',
        weather_state_abbr: 'hc',
        wind_direction_compass: 'WSW',
        created: '2019-07-11T06:02:28.768355Z',
        applicable_date: '2019-07-14',
        min_temp: 11.605,
        max_temp: 17.71,
        the_temp: 17.740000000000002,
        wind_speed: 8.794354468546356,
        wind_direction: 247.15704776220838,
        air_pressure: 1013.87,
        humidity: 73,
        visibility: 12.106796309552216,
        predictability: 71
      },
      {
        id: 5672864147570688,
        weather_state_name: 'Showers',
        weather_state_abbr: 's',
        wind_direction_compass: 'SSW',
        created: '2019-07-11T06:02:31.295279Z',
        applicable_date: '2019-07-15',
        min_temp: 12.280000000000001,
        max_temp: 15.954999999999998,
        the_temp: 12.26,
        wind_speed: 5.295738089556988,
        wind_direction: 200,
        air_pressure: 1012.52,
        humidity: 84,
        visibility: 9.999726596675416,
        predictability: 73
      }
    ];

    return (
      <div>
        <Label>5 day Forecast in San Diego</Label>

        <ListGroup>
          {sampleWeather.map((item, index) => (
            <ListGroupItem>
              <Day>{moment(item.applicable_date).format('dddd')}</Day>
              <Date>{moment(item.applicable_date).format('MMMM DD')}</Date>
              <WeatherIcon
                src={`https://www.metaweather.com/static/img/weather/${
                  item.weather_state_abbr
                }.svg`}
              />
              <WeatherState>{item.weather_state_name}</WeatherState>

              <Temperature>
                {Math.round(item.min_temp)} °C -{Math.round(item.max_temp)} °C
              </Temperature>
            </ListGroupItem>
          ))}
        </ListGroup>
      </div>
    );
  }
}

export default ShowWeather;
