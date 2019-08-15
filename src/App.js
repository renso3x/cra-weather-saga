import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { resetLocation, getCities } from './actions/locationAction';

import { Container, Col } from 'reactstrap';

import SearchLocation from './components/SearchLocation/searchLocation';
import ShowWeather from './components/ShowWeather/showWeather';

import './App.css';

import { Wrapper, Card, Button } from './style';

class App extends Component {
  handleSearchCity = city => {
    this.props.getCities(city);
  };
  handleResetLocation = () => {
    this.props.resetLocation();
  };

  render() {
    const { location } = this.props;
    return (
      <Wrapper>
        <Container>
          {!location.city ? (
            <Col md={{ size: 6, offset: 3 }}>
              <Card>
                <SearchLocation onSearchCity={this.handleSearchCity} />
              </Card>
            </Col>
          ) : (
            <Col md={{ size: 10, offset: 1 }}>
              <Card>
                <ShowWeather
                  city={location.city}
                  weatherConditions={location.weatherConditions}
                />
              </Card>

              <div style={{ textAlign: 'center', marginTop: '20px' }}>
                <Button onClick={this.handleResetLocation}>
                  Search City Weather again
                </Button>
              </div>
            </Col>
          )}
        </Container>
      </Wrapper>
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
      resetLocation,
      getCities
    },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
