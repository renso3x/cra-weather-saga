import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getCities, saveLocation } from '../../actions/locationAction';

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

  render() {
    const { cities, loading } = this.state;
    const { saveLocation } = this.props;

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
                    key={index}
                    action
                    onClick={() => saveLocation(item.title, item.woeid)}
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

function mapStateToProps({ location }) {
  return {
    location
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      saveLocation
    },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchLocation);
