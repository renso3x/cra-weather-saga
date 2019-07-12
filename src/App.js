import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { resetLocation } from './actions/locationAction';

import { Container, Col } from 'reactstrap';

import SearchLocation from './components/SearchLocation/searchLocation';
import ShowWeather from './components/ShowWeather/showWeather';

import './App.css';

import { Wrapper, Card, Button } from './style';

class App extends Component {
  render() {
    const { location, resetLocation } = this.props;

    return (
      <Wrapper>
        <Container>
          {!location.city ? (
            <Col md={{ size: 6, offset: 3 }}>
              <Card>
                <SearchLocation />
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
                <Button onClick={() => resetLocation()}>
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
      resetLocation
    },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
