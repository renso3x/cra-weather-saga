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
    const { city, weatherConditions } = this.props;

    return (
      <div>
        <Label>5 day Forecast in {city}</Label>

        <ListGroup>
          {weatherConditions.map((item, index) => (
            <ListGroupItem key={index}>
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
