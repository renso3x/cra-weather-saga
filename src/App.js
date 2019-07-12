import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Container, Col } from 'reactstrap';
import SearchLocation from './components/SearchLocation/searchLocation';
import ShowWeather from './components/ShowWeather/showWeather';

import './App.css';

import { Wrapper, Card, Button } from './style';

import { saveLocation } from './actions/locationAction';

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Container>
          <Col md={{ size: 6, offset: 3 }}>
            <Card>
              <SearchLocation />
            </Card>
          </Col>

          {/* <Col md={{ size: 10, offset: 1 }}>
            <Card>
              <ShowWeather />
            </Card>

            <div style={{ textAlign: 'center', marginTop: '20px' }}>
              <Button>Search City Weather again</Button>
            </div>
          </Col> */}
        </Container>
      </Wrapper>
    );
  }
}

function mapStateToProps({ state }) {
  return {
    state
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
)(App);
