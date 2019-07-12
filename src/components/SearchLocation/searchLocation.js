import React, { Component } from 'react';
import { getCities } from '../../actions/locationAction';
import {
  Form,
  FormGroup,
  Label,
  Input,
  ListGroup,
  ListGroupItem
} from 'reactstrap';

class SearchLocation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cities: [],
      loading: false
    };
  }

  fetchLocation = location => {
    this.setState({
      loading: true
    });

    getCities(location).then(res => {
      this.setState({
        cities: res,
        loading: false
      });
    });
  };

  fetchWeather = locationID => {
    console.log('LOCATION ID: ', locationID);
  };

  render() {
    const { cities, loading } = this.state;

    return (
      <Form>
        <FormGroup>
          <Label>Enter a city name</Label>

          <Input
            type="text"
            placeholder="Search for a city"
            onChange={e => this.fetchLocation(e.target.value)}
          />
        </FormGroup>

        {loading ? (
          <div>Fetching cities...</div>
        ) : (
          cities.length > 0 && (
            <FormGroup>
              <ListGroup>
                {cities.map((item, index) => (
                  <ListGroupItem
                    action
                    onClick={() => this.fetchWeather(item.woeid)}
                  >
                    {item.title}
                  </ListGroupItem>
                ))}
              </ListGroup>
            </FormGroup>
          )
        )}
      </Form>
    );
  }
}

export default SearchLocation;
